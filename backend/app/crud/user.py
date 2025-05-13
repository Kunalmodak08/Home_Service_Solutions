from sqlalchemy.orm import Session
from app.db import models
from app.schemas import user as user_schema

def get_users(db: Session):
    return db.query(models.User).all()