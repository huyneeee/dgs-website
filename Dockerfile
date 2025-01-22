# Build BASE
FROM node:20.10-alpine as BASE

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:20.10-alpine AS BUILD

WORKDIR /app
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && yarn build \
    && cd .next/standalone

# Build production
FROM node:20.10-alpine AS PRODUCTION

WORKDIR /app

ENV NEXT_SHARP_PATH=/app/node_modules/sharp

COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.mjs ./

# Set mode "standalone" in file "next.config.js"
COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static

EXPOSE 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]