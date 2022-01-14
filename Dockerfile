FROM node:16-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm ci --silent

COPY . .

RUN npm run build && rm -rf ./src

CMD ["npm", "start"]