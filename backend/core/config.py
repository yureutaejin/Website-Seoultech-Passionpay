# DB 연결 configuration

import os
import json

DB = (json.load(open("./core/DB_info.json", 'r')))['DB']

class Settings:
    SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{DB['user']}:{DB['password']}@{DB['host']}:{DB['port']}/{DB['database']}"

settings = Settings()    