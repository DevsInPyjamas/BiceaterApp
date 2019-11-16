FROM node:12-alpine AS builder

ARG WEB_PATH

WORKDIR app/
RUN apk add --no-cache jq git

COPY . .

RUN npm install && \
    mv package.json package.original.json && \
    cat package.original.json | jq ".homepage = \"${WEB_PATH}\"" > package.json && \
    npm run build


FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ /usr/share/nginx/html/

