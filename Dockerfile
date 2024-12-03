### BASE
FROM docker.intern.sparebank1.no/ubi8-nodejs18/master:latest as base

WORKDIR /app

RUN node -v
RUN npm -v

COPY portalen/cacert.pem .
RUN npm config set cafile /app/cacert.pem
ENV NODE_EXTRA_CA_CERTS=/app/cacert.pem

COPY portalen/package.json .
RUN npm install -g corepack

# Version of pnpm controlled via package.json#packageManager
RUN corepack enable
RUN corepack prepare --activate

### DEPENDENCIES
FROM base as dependencies

WORKDIR /app

COPY portalen/pnpm-lock.yaml .
COPY portalen/pnpm-workspace.yaml .
COPY portalen/.npmrc .

# Recreate minimal monorepo structure to install dependencies
# but not break Docker cache w/ changes in source code.

RUN mkdir -p apps/cms
RUN mkdir -p apps/server/public/fonts
RUN mkdir -p apps/server/public/types
RUN mkdir -p apps/web/app/data

RUN mkdir -p utils

RUN mkdir -p packages/shared
RUN mkdir -p packages/ui
RUN mkdir -p packages/jokul

RUN mkdir patches

COPY portalen/apps/cms/package.json apps/cms/package.json
COPY portalen/apps/server/package.json apps/server/package.json
COPY portalen/apps/web/package.json apps/web/package.json

COPY portalen/apps/server/postinstall.js apps/server/postinstall.js
COPY portalen/apps/web/tsconfig.types.json apps/web/tsconfig.types.json

COPY portalen/packages/shared/package.json packages/shared/package.json
COPY portalen/packages/ui/package.json packages/ui/package.json

COPY tsconfig.json .
COPY packages/jokul packages/jokul
COPY utils utils

COPY portalen/patches/* patches/

WORKDIR /app/packages/jokul
RUN pnpm install
RUN pnpm build

WORKDIR /app
RUN pnpm install

### BUILDER
FROM dependencies as build

WORKDIR /app

COPY portalen/apps/ apps/
COPY portalen/packages/ packages/
COPY portalen/tsconfig.json .
COPY portalen/turbo.json .

RUN pnpm build

### OUTPUT
FROM build as output

WORKDIR /app

RUN ls -al

EXPOSE 3000

CMD pnpm serve
