FROM 607705927749.dkr.ecr.eu-north-1.amazonaws.com/base/cicd-container-base-images/node22-ubi9-minimal:latest AS base

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

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY server.js .
COPY patches ./patches
COPY .storybook ./.storybook
COPY packages ./packages
COPY portal ./portal
COPY pnpm-workspace.yaml .
RUN pnpm install --frozen-lockfile
RUN find . -name 'node_modules' -print0 | tar -cf node_modules.tar --null --files-from -

FROM base AS builder
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=rppnrdtw
ARG NEXT_PUBLIC_SANITY_DATASET=test
ARG NEXT_PUBLIC_STORYBOOK_BASE_URL=/storybook

WORKDIR /app
COPY --from=dependencies /app/node_modules.tar ./node_modules.tar
COPY . .
RUN tar -xf node_modules.tar 
RUN pnpm --filter "@fremtind/jokul" build
RUN pnpm build-storybook

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_STORYBOOK_BASE_URL=$NEXT_PUBLIC_STORYBOOK_BASE_URL
RUN \ 
  --mount=type=secret,id=FIGMA_IMAGE_READ_TOKEN,env=FIGMA_IMAGE_READ_TOKEN \
  --mount=type=secret,id=SANITY_API_READ_TOKEN,env=SANITY_API_READ_TOKEN \
  pnpm --filter "portal" build

FROM base AS runner

WORKDIR /app
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/server.js server.js
COPY --from=builder /app/portal ./portal
COPY --from=builder /app/packages/jokul ./packages/jokul
COPY --from=builder /app/storybook-static ./storybook-static
COPY --from=builder /app/storybook-public ./storybook-public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD pnpm serve