from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        from_attributes = True

class UserProfileResponse(BaseModel):
    id: int
    user_id: int
    about_me: Optional[str] = None
    country: Optional[str] = None
    state: Optional[str] = None

    class Config:
        from_attributes = True
