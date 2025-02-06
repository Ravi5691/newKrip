from pydantic import BaseModel, condecimal
from typing import Optional
from datetime import datetime
from typing_extensions import Annotated  # Required for Pydantic v2

DecimalType = Annotated[float, condecimal(max_digits=10, decimal_places=2)]  # Fix condecimal

class PaymentCreate(BaseModel):
    user_id: int
    order_id: Optional[int] = None
    amount: DecimalType  # Use the fixed decimal type
    payment_method: str  # e.g., "razorpay", "credit_card"

class PaymentResponse(BaseModel):
    id: int
    user_id: int
    order_id: Optional[int]
    amount: DecimalType  # Use the fixed decimal type
    payment_status: bool
    payment_method: str
    transaction_id: str
    created_at: datetime

    class Config:
        from_attributes = True
