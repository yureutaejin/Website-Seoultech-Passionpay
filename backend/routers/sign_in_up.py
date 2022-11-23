from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.connection import get_db
from api import sign
from models.pydantic_model import Sign_pydantic

router = APIRouter(
    prefix="/api/sign",
)

@router.get("/in")
def signin(user_id: str, password: str, db: Session = Depends(get_db)):
    res = sign.signin(db=db, user_id=user_id, password=password) # api 호출
    
    return {
        "res" : res
    }
    
@router.post("/up")
def signup(sign_form: Sign_pydantic, db: Session = Depends(get_db)):
    res = sign.signup(db=db, sign_form=sign_form) # api 호출
    
    return {
        "res": res
    }