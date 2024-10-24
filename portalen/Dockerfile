### BASE
FROM docker.intern.sparebank1.no/ubi8-nodejs18/master:latest as base

WORKDIR /app

RUN node -v
RUN npm -v

COPY cacert.pem .
RUN npm config set cafile /app/cacert.pem
ENV NODE_EXTRA_CA_CERTS=/app/cacert.pem

COPY package.json .
RUN npm install -g corepack

# Version of pnpm controlled via package.json#packageManager
RUN corepack enable
RUN corepack prepare --activate

### DEPENDENCIES
FROM base as dependencies

WORKDIR /app

COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY .npmrc .

# Recreate minimal monorepo structure to install dependencies
# but not break Docker cache w/ changes in source code.

RUN mkdir -p apps/cms
RUN mkdir -p apps/server/public/fonts
RUN mkdir -p apps/server/public/types
RUN mkdir -p apps/web/app/data

RUN mkdir -p packages/eslint-config
RUN mkdir -p packages/shared
RUN mkdir -p packages/stylelint-config
RUN mkdir -p packages/ui

RUN mkdir patches

COPY apps/cms/package.json apps/cms/package.json
COPY apps/server/package.json apps/server/package.json
COPY apps/web/package.json apps/web/package.json

COPY apps/server/postinstall.js apps/server/postinstall.js
COPY apps/web/tsconfig.types.json apps/web/tsconfig.types.json

COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY packages/stylelint-config/package.json packages/stylelint-config/package.json
COPY packages/ui/package.json packages/ui/package.json

COPY patches/* patches/

RUN pnpm install

### BUILDER
FROM dependencies as build

WORKDIR /app

COPY apps/ apps/
COPY packages/ packages/
COPY tsconfig.json .
COPY turbo.json .

RUN pnpm build

### OUTPUT
FROM build as output

WORKDIR /app

# Kommenter ut curl ved `docker-compose up --build` lokalt, ellers prøver Payload å koble til MongoDB med SSL
RUN curl -O https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem

RUN ls -al

EXPOSE 3000

CMD pnpm serve
