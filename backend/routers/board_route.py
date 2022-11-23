from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.connection import get_db
from api import board
from models.pydantic_model import Board_post_pydantic


router = APIRouter(
    prefix="/api/board",
)

# 게시글 전부 들고오는 API
@router.get("/")
def get_boards(db: Session = Depends(get_db)):
    res = board.get_boards(db=db)
    
    return {
        "res" : res
    }
    
@router.post("/")
def post_board(post_form: Board_post_pydantic, db: Session = Depends(get_db)):
    res = board.post_board(db=db, post_form=post_form)
    
    return {
        "res": res
    }