FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN ci

COPY . .

CMD [ "npm" "start"]