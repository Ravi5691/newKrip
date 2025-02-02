from sqlalchemy import Column, Integer, String, ForeignKey, Text, DECIMAL
from sqlalchemy.orm import relationship
from app.database import Base

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)

class Overview(Base):
    __tablename__ = "services"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"))
    rating = Column(DECIMAL(3,2), default=0)
    user = relationship("User")
    category = relationship("Category")
