FROM python:3.7-bullseye

WORKDIR /home

RUN apt-get update && apt-get install vim -y

RUN pip install --upgrade pip

RUN pip install fastapi && pip install uvicorn && pip install pandas && pip install numpy && pip install psycopg2 && pip install pymysql && pip install sqlalchemy && pip install openpyxl

EXPOSE 8080

CMD ["python", "hello.py"]