FROM node:current-bullseye

WORKDIR /home

RUN apt-get update && apt-get install vim -y

RUN npm install -g create-react-app

EXPOSE 3000

CMD ["npm", "start"]