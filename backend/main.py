from typing import Optional
from routers import test_route, sign_in_up
import uvicorn
from fastapi import FastAPI


def create_app():
    
    app = FastAPI()
    app.include_router(test_route.router)
    app.include_router(sign_in_up.router)
    
    return app

app = create_app()


if __name__=="__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)