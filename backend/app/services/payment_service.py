import stripe
from sqlalchemy.orm import Session
from app.models.payment import Transaction
from app.config import STRIPE_SECRET_KEY
from fastapi import HTTPException, Request
import uuid

stripe.api_key = STRIPE_SECRET_KEY

def handle_stripe_webhook(db: Session, request: Request):
    payload = request.json()
    event_type = payload["type"]

    if event_type == "payment_intent.succeeded":
        payment_intent_id = payload["data"]["object"]["id"]
        transaction = db.query(Transaction).filter(Transaction.transaction_id == payment_intent_id).first()
        if transaction:
            transaction.payment_status = True
            db.commit()
            return {"message": "Payment confirmed"}
    
    return {"message": "Webhook received"}

def process_refund(db: Session, transaction_id: str):
    transaction = db.query(Transaction).filter(Transaction.transaction_id == transaction_id).first()
    if not transaction or not transaction.payment_status:
        raise HTTPException(status_code=400, detail="Transaction not found or not completed")

    # Refund via Stripe
    refund = stripe.Refund.create(payment_intent=transaction.transaction_id)
    transaction.payment_status = False  # Mark refunded
    db.commit()
    
    return {"message": "Refund processed", "refund_id": refund.id}
