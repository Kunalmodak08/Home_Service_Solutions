# app/api/router.py

from fastapi import APIRouter
from app.api import users, services, bookings

api_router = APIRouter()

api_router.include_router(users.router, prefix="/users", tags=["Users"])
api_router.include_router(services.router, prefix="/services", tags=["Services"])
api_router.include_router(bookings.router, prefix="/bookings", tags=["Bookings"])
