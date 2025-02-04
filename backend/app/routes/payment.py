from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.dependencies import get_db
from app.services.payment_service import handle_stripe_webhook, process_refund

router = APIRouter(prefix="/payments", tags=["Payments"])

@router.post("/webhook")
async def stripe_webhook(request: Request, db: Session = Depends(get_db)):
    return handle_stripe_webhook(db, request)

@router.post("/{transaction_id}/refund")
def refund_payment(transaction_id: str, db: Session = Depends(get_db)):
    return process_refund(db, transaction_id)
