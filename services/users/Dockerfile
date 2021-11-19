FROM node:17-alpine3.12

ENV NODE_ENV production

WORKDIR /usr/users

COPY package.json /usr/users
COPY package-lock.json /usr/users

RUN npm install
RUN npm run build

COPY dist /usr/users/dist

EXPOSE ${USERS_PORT}

CMD ["npm", "start"]
