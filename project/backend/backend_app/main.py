from fastapi import FastAPI
app = FastAPI()
from fastapi.responses import FileResponse


# login
@app.get("/api/login/access")
def hello():
    return "hello fastapi"

@app.post("/api/login/signin")


# noticeboard
@app.get("/api/noticeboard/read)

@app.post("/api/noticeboard/create)

@app.post("/api/noticeboard/update)

@app.post("/api/noticeboard/delete)


