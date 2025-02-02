from sqlalchemy.orm import Session
from app.models.order import Order
from app.schemas.order import OrderCreate

def create_order(db: Session, order: OrderCreate):
    new_order = Order(
        buyer_id=order.buyer_id,
        seller_id=order.seller_id,
        service_id=order.service_id,
        status=order.status
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order

def get_order_by_id(db: Session, order_id: int):
    return db.query(Order).filter(Order.id == order_id).first()
