FROM node:20.18-alpine
WORKDIR /app

COPY ./src ./src
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json

RUN ls

RUN npm i
RUN npm run build

CMD ["node", "dist/index.js"]
