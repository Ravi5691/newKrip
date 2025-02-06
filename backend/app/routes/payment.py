from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.dependencies import get_db, get_authenticated_user
from app.services.payment_service import create_payment, verify_payment
from app.schemas.payment import PaymentCreate

router = APIRouter(prefix="/payments", tags=["Payments"])

@router.post("/")
def initiate_payment(payment: PaymentCreate, db: Session = Depends(get_db), user: dict = Depends(get_authenticated_user)):
    return create_payment(db, payment)

@router.post("/verify")
def verify_razorpay_payment(razorpay_payment_id: str, razorpay_order_id: str, razorpay_signature: str, db: Session = Depends(get_db)):
    return verify_payment(db, razorpay_payment_id, razorpay_order_id, razorpay_signature)
