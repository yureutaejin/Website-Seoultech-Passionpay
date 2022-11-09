from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Text, DateTime
import pandas as pd
import os
import json

Base = declarative_base()

DB = (json.load(open("../core/DB_info.json", 'r')))['DB']

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{DB['user']}:{DB['password']}@{DB['host']}:{DB['port']}/{DB['database']}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)


class Test(Base):
    __tablename__ = "test"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30))
    
class Sign(Base):
    __tablename__="sign"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(20), nullable=False)
    user_password = Column(String(20), nullable=False)
    user_name = Column(String(20), nullable=False)

        
    

if __name__=="__main__":
    Base.metadata.drop_all(bind=engine)
    
    Test.metadata.create_all(engine)
    Sign.metadata.create_all(engine)
    
    Test_df = pd.read_excel("./db_test.xlsx", engine="openpyxl")
    Sign_df = pd.read_excel("./db_sign.xlsx", engine="openpyxl")
    Test_df.to_sql(name="test", con=engine, if_exists="append", index=False)
    Sign_df.to_sql(name="sign", con=engine, if_exists="append", index=False)