from typing import Optional
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.connection import get_db
from api import test

router = APIRouter(
    prefix="/api",
)

@router.get("/test_route")
def test_index(db: Session = Depends(get_db)):
    res = test.test_index(db=db) # api 호출
    
    return {
        "res" : res
    }