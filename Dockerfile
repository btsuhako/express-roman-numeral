FROM node:10-stretch-slim

WORKDIR /app

RUN chown node:node -R /app

USER node

COPY ["index.js", "package*.json", "./"]

ARG NODE_ENV=production

RUN npm ci

COPY ["./src/", "./src/"]

EXPOSE 3000

ENV NODE_ENV=producion

CMD ["node", "index.js"]