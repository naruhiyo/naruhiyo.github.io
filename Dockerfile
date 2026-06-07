FROM node:26.3.0-slim AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install -g pnpm && \
  pnpm install --frozen-lockfile && \
  pnpm store prune

COPY . .
RUN pnpm run build && \
  rm -rf /root/.npm /root/.cache /tmp/*

FROM httpd:2.4.67-alpine3.23
WORKDIR /usr/local/apache2/htdocs
EXPOSE 8888
COPY --chown=www-data:www-data --from=builder /app/build /usr/local/apache2/htdocs
RUN apk add --no-cache libcap && \
  setcap 'cap_net_bind_service=+ep' /usr/local/apache2/bin/httpd
USER www-data
