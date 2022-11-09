from sqlalchemy import Column, Integer, String, Text, DateTime
from database.session import Base


class Test(Base):
    __tablename__ = "test"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    
class Sign(Base):
    __tablename__="sign"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    user_password = Column(String, nullable=False)
    user_name = Column(String, nullable=False)