from sqlalchemy.orm import Session
from app.models.service import Overview
from app.schemas.service import ServiceCreate

def create_service(db: Session, service: ServiceCreate):
    new_service = Overview(
        user_id=service.user_id,
        title=service.title,
        category_id=service.category_id,
        rating=service.rating
    )
    db.add(new_service)
    db.commit()
    db.refresh(new_service)
    return new_service

def get_all_services(db: Session):
    return db.query(Overview).all()
