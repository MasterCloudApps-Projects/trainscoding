FROM node:16-alpine3.11

ENV NODE_ENV production

WORKDIR /usr/server

COPY package.json /usr/server
COPY package-lock.json /usr/server

RUN npm install --only=production

COPY lib /usr/server/lib

EXPOSE ${SERVER_PORT}

CMD ["npm", "start"]
