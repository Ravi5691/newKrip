from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.chat import Message
from app.schemas.chat import MessageCreate, MessageResponse
from app.services.chat_service import send_message, get_messages_by_order

router = APIRouter(prefix="/chat", tags=["Chat"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=MessageResponse)
def send_chat_message(message: MessageCreate, db: Session = Depends(get_db)):
    return send_message(db, message)

@router.get("/{order_id}", response_model=list[MessageResponse])
def get_chat_history(order_id: int, db: Session = Depends(get_db)):
    return get_messages_by_order(db, order_id)
