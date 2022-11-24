from sqlalchemy.orm import Session
from models.model import Board
from models.pydantic_model import Board_post_pydantic
from datetime import datetime

def get_boards(db: Session):
    return db.query(Board).all()

def post_board(db: Session, post_form: Board_post_pydantic):
    try:
        temp_post = Board(subject=post_form.subject, text=post_form.text, date=datetime.now(), sign_id=post_form.sign_id)
        db.add(temp_post)
        db.commit()
        res = "post success!"
    except Exception as e:
        res = "post failed!"
    
    return res