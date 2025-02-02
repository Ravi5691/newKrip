from sqlalchemy.orm import Session
from app.models.chat import Message
from app.schemas.chat import MessageCreate
from datetime import datetime

def send_message(db: Session, message: MessageCreate):
    new_message = Message(
        sender_id=message.sender_id,
        receiver_id=message.receiver_id,
        order_id=message.order_id,
        content=message.content,
        timestamp=datetime.utcnow()
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message

def get_messages_by_order(db: Session, order_id: int):
    return db.query(Message).filter(Message.order_id == order_id).all()
