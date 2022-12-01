from sqlalchemy.orm import Session
from models.model import Board, Sign
from models.pydantic_model import Board_post_pydantic
from datetime import datetime

def get_boards(db: Session):
    return db.query(Board.subject, Board.date, Board.sign_id, Sign.user_name).join(Sign).all()

def get_one_board(board_number: int, db: Session):
    return db.query(Board.subject, Board.date, Board.sign_id, Sign.user_name).join(Sign).filter(Board.id==board_number).all()

def post_board(db: Session, post_form: Board_post_pydantic):
    try:
        temp_post = Board(subject=post_form.subject, text=post_form.text, date=datetime.now(), sign_id=post_form.sign_id)
        db.add(temp_post)
        db.commit()
        res = "post success!"
    except Exception as e:
        res = "post failed!"
    
    return res