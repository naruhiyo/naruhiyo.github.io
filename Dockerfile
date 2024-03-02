FROM node:20.10-alpine

WORKDIR /app
EXPOSE 8888

COPY . /app

RUN yarn global add pnpm &&\
  pnpm install

CMD [ "pnpm", "run", "dev" ]
