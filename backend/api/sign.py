from sqlalchemy.orm import Session
from models.model import Sign
from sqlalchemy import and_, or_

def signin(user_id, password, db: Session):
    try:
        res = (db.query(Sign).filter(and_(Sign.user_id==user_id, Sign.user_password==password)).all())[0]
        return res.user_name
    except:
        return "wrong access!"