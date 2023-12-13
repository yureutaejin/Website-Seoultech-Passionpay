from sqlalchemy import Text, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
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
    # user_authority = Column(String, nullable=False)
    board = relationship("Board", back_populates="sign")
    
    
class Board(Base):
    __tablename__="board"
    
    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, nullable=False)
    text = Column(Text, nullable=False)
    date = Column(DateTime, nullable=False)
    sign_id = Column(Integer, ForeignKey('sign.id'))
    sign = relationship("Sign", back_populates="board")