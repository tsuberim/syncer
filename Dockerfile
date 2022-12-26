FROM node:alpine

ADD . .

RUN npm test

ENTRYPOINT npm start