FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i -g npm@latest

RUN npm install

CMD ["npm", "run", "serve"] 

