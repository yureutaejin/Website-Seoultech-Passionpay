from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.connection import get_db
from api import sign

router = APIRouter(
    prefix="/api/sign",
)

@router.get("/in")
def signin(user_id: str, password: str, db: Session = Depends(get_db)):
    res = sign.signin(db=db, user_id=user_id, password=password) # api 호출
    
    return {
        "res" : res
    }