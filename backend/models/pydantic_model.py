from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class Sign_pydantic(BaseModel):
    user_id: str
    user_password: str
    user_name: str

class Board_post_pydantic(BaseModel):
    subject: str
    text: str
    sign_id: int