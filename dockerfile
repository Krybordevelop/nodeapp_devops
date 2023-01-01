FROM node:18-alpine3.16

WORKDIR /app

COPY myapp .

RUN npm install

CMD ["npm", "run", "prod"]

