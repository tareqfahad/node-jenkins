FROM node:17

WORKDIR /usr/src/app

ADD node_modules /usr/src/app/node_modules
ADD dist /usr/src/app/dist

CMD ["node", "dist/app.js"]

