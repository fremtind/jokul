FROM docker.intern.sparebank1.no/base/cicd-container-base-images/node22-ubi9-minimal:latest AS base

WORKDIR /app
USER root
RUN npm install -g corepack
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable
RUN corepack prepare --activate
RUN useradd -ms /bin/bash appuser
RUN microdnf install tar -y
RUN microdnf install findutils -y

FROM base AS dependencies
ARG SANITY_PROJECT_ID

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY server.js .
COPY patches ./patches
COPY .storybook ./.storybook
COPY packages ./packages
COPY ny-portal ./ny-portal
COPY pnpm-workspace.yaml .
RUN pnpm install --frozen-lockfile
RUN find . -name 'node_modules' -print0 | tar -cf node_modules.tar --null --files-from -

FROM base AS builder
ARG SANITY_PROJECT_ID

WORKDIR /app
COPY --from=dependencies /app/node_modules.tar ./node_modules.tar
COPY . .
RUN tar -xf node_modules.tar 
RUN pnpm --filter "@fremtind/jokul" build
RUN pnpm build-storybook
RUN pnpm --filter "ny-portal" build

FROM base AS runner

WORKDIR /app
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/server.js server.js
COPY --from=builder /app/ny-portal ./ny-portal
COPY --from=builder /app/packages/jokul ./packages/jokul
COPY --from=builder /app/storybook-static ./storybook-static
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD pnpm serve