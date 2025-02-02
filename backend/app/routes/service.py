from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.service import Overview, Category
from app.schemas.service import ServiceCreate, ServiceResponse
from app.services.service_service import create_service, get_all_services

router = APIRouter(prefix="/services", tags=["Services"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ServiceResponse)
def create_new_service(service: ServiceCreate, db: Session = Depends(get_db)):
    return create_service(db, service)

@router.get("/", response_model=list[ServiceResponse])
def list_services(db: Session = Depends(get_db)):
    return get_all_services(db)
