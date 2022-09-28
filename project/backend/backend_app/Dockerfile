FROM python:3.7-buster

RUN apt-get update && apt-get install git -y
RUN echo "git install"
RUN apt-get install vim -y

RUN pip install fastapi
RUN pip install uvicorn

WORKDIR home/
RUN git clone https://github.com/yureutaejin/passionpaywebpage

EXPOSE 80
