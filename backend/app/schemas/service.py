from pydantic import BaseModel
from typing import Optional

class ServiceCreate(BaseModel):
    user_id: int
    title: str
    category_id: int
    rating: Optional[float] = 0.0

class ServiceResponse(BaseModel):
    id: int
    user_id: int
    title: str
    category_id: int
    rating: Optional[float] = 0.0

    class Config:
        from_attributes = True
