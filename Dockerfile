ARG NODE_VERSION=12

FROM node:${NODE_VERSION}-alpine AS builder

RUN mkdir -p /api
WORKDIR /api

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD ["run", "start:dev"]