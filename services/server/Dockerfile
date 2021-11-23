FROM node:17-alpine3.12

ENV NODE_ENV production

WORKDIR /usr/server

COPY package.json /usr/server
COPY package-lock.json /usr/server

RUN npm install

COPY dist /usr/server/dist

EXPOSE ${USERS_PORT}

CMD ["npm", "start"]
