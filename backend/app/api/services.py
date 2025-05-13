# === app/api/services.py ===
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_services():
    return {"message": "List of services"}
