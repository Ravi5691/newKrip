from sqlalchemy import Column, Integer, String, ForeignKey, DECIMAL, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)  # User making the payment
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=True)
    amount = Column(DECIMAL(10, 2), nullable=False)
    payment_status = Column(Boolean, default=False)  # False = Pending, True = Completed
    payment_method = Column(String(50), nullable=False)  # "credit_card", "razorpay"
    transaction_id = Column(String(100), unique=True, nullable=False)  # Razorpay Order ID
    razorpay_payment_id = Column(String(100), unique=True, nullable=True)  # Payment ID from Razorpay
    razorpay_signature = Column(String(255), nullable=True)  # Signature from Razorpay
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    order = relationship("Order", back_populates="transaction")
