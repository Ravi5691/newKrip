import razorpay
from sqlalchemy.orm import Session
from app.models.payment import Transaction
from app.schemas.payment import PaymentCreate
from app.config import RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
from fastapi import HTTPException
import uuid

# Initialize Razorpay client
razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))

def create_payment(db: Session, payment: PaymentCreate):
    try:
        # Generate a unique transaction ID
        transaction_id = str(uuid.uuid4())

        # Create Razorpay Order
        razorpay_order = razorpay_client.order.create({
            "amount": int(payment.amount * 100),  # Convert to paise
            "currency": "INR",
            "payment_capture": "1"  # Auto-capture
        })

        # Save transaction details in the database
        new_transaction = Transaction(
            user_id=payment.user_id,
            order_id=payment.order_id,
            amount=payment.amount,
            payment_method=payment.payment_method,
            transaction_id=razorpay_order["id"],
            payment_status=False  # Initially pending
        )

        db.add(new_transaction)
        db.commit()
        db.refresh(new_transaction)

        return {
            "transaction_id": transaction_id,
            "razorpay_order_id": razorpay_order["id"],
            "amount": payment.amount
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def verify_payment(db: Session, razorpay_payment_id: str, razorpay_order_id: str, razorpay_signature: str):
    try:
        params_dict = {
            "razorpay_order_id": razorpay_order_id,
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_signature": razorpay_signature
        }

        # Verify Razorpay payment signature
        razorpay_client.utility.verify_payment_signature(params_dict)

        # Update transaction in database
        transaction = db.query(Transaction).filter(Transaction.transaction_id == razorpay_order_id).first()
        if transaction:
            transaction.payment_status = True
            db.commit()
            db.refresh(transaction)
            return {"message": "Payment verified successfully"}

        raise HTTPException(status_code=404, detail="Transaction not found")

    except razorpay.errors.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid payment signature")
