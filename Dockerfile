FROM node:10

ENV APP_DIR /usr/src/pokedex-api
ENV PORT 4000

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json ${APP_DIR}
RUN npm install

EXPOSE ${PORT}

COPY . ${APP_DIR}

CMD ["npm", "start"]
