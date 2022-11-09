from sqlalchemy.orm import Session
from models.model import Test

def get_items(db: Session):
    return db.query(Test).all()