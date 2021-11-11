FROM node:16-alpine3.11

ENV NODE_ENV production

WORKDIR /usr/users

COPY package.json /usr/users
COPY package-lock.json /usr/users

RUN npm install

COPY dist /usr/users/dist

EXPOSE ${USERS_PORT}

CMD ["npm", "start"]
