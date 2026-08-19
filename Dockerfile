FROM 607705927749.dkr.ecr.eu-north-1.amazonaws.com/base/cicd-container-base-images/node22-ubi9-minimal:latest AS base

WORKDIR /app
USER root

ENV NPM_CONFIG_REGISTRY=https://nexus.intern.sparebank1.no/repository/npmgroup/
RUN useradd -ms /bin/bash appuser

# pnpm trengs bare under bygging. Versjonen hentes fra packageManager.
# https://docs.docker.com/build/building/multi-stage/
FROM base AS build-base

COPY package.json .
RUN npm install --global "$(node --print 'require("./package.json").packageManager')"

# -----------------------------------------------------------------------------
# builder: Installerer pnpm kun for installasjon og bygging av pakker
# -----------------------------------------------------------------------------
FROM build-base AS builder
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=rppnrdtw
ARG NEXT_PUBLIC_SANITY_DATASET=test
ARG NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install --global "$(node --print 'require("./package.json").packageManager')"

COPY patches ./patches
COPY packages/jokul ./packages/jokul
COPY portal ./portal
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY tsconfig.json tsconfig-for-declarations.json biome.json ./
RUN pnpm --filter "@fremtind/jokul" build

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN=$NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN
RUN \
  --mount=type=secret,id=FIGMA_IMAGE_READ_TOKEN,env=FIGMA_IMAGE_READ_TOKEN \
  --mount=type=secret,id=SANITY_API_READ_TOKEN,env=SANITY_API_READ_TOKEN \
  pnpm --filter "portal" build

# Next standalone kopierer IKKE med statiske assets eller `public/` automatisk,
# så de må legges inn manuelt i standalone-treet på riktig sted.
RUN cp -R portal/.next/static portal/.next/standalone/portal/.next/static
RUN cp -R portal/public portal/.next/standalone/portal/public

# -----------------------------------------------------------------------------
# runner: Kun det som trengs i produksjon (Next standalone)
# -----------------------------------------------------------------------------
FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/portal/.next/standalone ./

USER appuser
EXPOSE 3000
CMD ["node", "portal/server.js"]
