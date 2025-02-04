from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user, service, order, chat, payment, auth
from app.database import engine, Base

# Initialize database tables (only for development)
Base.metadata.create_all(bind=engine)

# Create FastAPI instance
app = FastAPI(title="Freelance Marketplace API", version="1.0.0")

# Enable CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routes
app.include_router(auth.router)
app.include_router(user.router)
app.include_router(service.router)
app.include_router(order.router)
app.include_router(chat.router)
app.include_router(payment.router)

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to Freelance Marketplace API"}
