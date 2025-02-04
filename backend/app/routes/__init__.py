from fastapi import APIRouter
from app.routes.user import router as user_router
from app.routes.service import router as service_router
from app.routes.order import router as order_router
from app.routes.chat import router as chat_router
from app.routes.auth import router as auth_router

router = APIRouter()

router.include_router(user_router)
router.include_router(service_router)
router.include_router(order_router)
router.include_router(chat_router)
router.include_router(auth_router)
