FROM node:16-alpine3.11

ENV NODE_ENV production

WORKDIR /usr/server

COPY package.json /usr/server
COPY package-lock.json /usr/server

RUN npm install --only=production

COPY src /usr/server/src
COPY config /usr/server/config

EXPOSE ${SERVER_PORT}

CMD ["npm", "start"]
