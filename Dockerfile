FROM  node:lts-alpine3.14

COPY build/ root/app/

WORKDIR root/app

RUN yarn

CMD yarn run "dev"