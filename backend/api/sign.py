from sqlalchemy.orm import Session
from models.model import Sign
from models.pydantic_model import Sign_pydantic
from sqlalchemy import and_, or_

def signin(user_id, password, db: Session):
    try:
        res = (db.query(Sign).filter(and_(Sign.user_id==user_id, Sign.user_password==password)).all())[0]
        return res.user_name
    except:
        return "wrong access!"
    
    
def signup(db: Session, sign_form: Sign_pydantic):
    try:
        if len(db.query(Sign).filter(Sign.user_id==sign_form.user_id).all()) != 0:
            res = "duplicated id"
        else:
            temp_user = Sign(user_id=sign_form.user_id, user_password=sign_form.user_password, user_name=sign_form.user_name)
            db.add(temp_user)
            db.commit()
            res = "user add success!"
        
        return res
    except:
        return "wrong access!"
    