from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class OrderCreate(BaseModel):
    buyer_id: int
    seller_id: Optional[int] = None
    service_id: int
    status: Optional[str] = "pending"

class OrderResponse(BaseModel):
    id: int
    buyer_id: int
    seller_id: Optional[int] = None
    service_id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
