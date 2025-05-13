# === app/api/bookings.py ===
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_bookings():
    return {"message": "List of bookings"}