FROM 607705927749.dkr.ecr.eu-north-1.amazonaws.com/base/cicd-container-base-images/node22-ubi9-minimal:latest AS base

WORKDIR /app
USER root
RUN useradd -ms /bin/bash appuser

# pnpm trengs bare under bygging. Versjonen hentes fra packageManager.
# https://docs.docker.com/build/building/multi-stage/
FROM base AS build-base

COPY package.json .
RUN npm install --global "$(node --print 'require("./package.json").packageManager')"

# -----------------------------------------------------------------------------
# dependencies: installer hele workspace-en én gang. node_modules holder seg
# i dette laget og gjenbrukes av builder via `COPY --from` (ingen tar-dans).
# -----------------------------------------------------------------------------
FROM build-base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
COPY .storybook ./.storybook
# Kun jokul-pakken trengs for å bygge portalen + Storybook. mcp-server,
# stylelint-config-jkl, actions/ og utils/ er irrelevante og droppes helt.
# pnpm-workspace.yaml lister dem via wildcard, men `--frozen-lockfile` godtar at
# katalogene mangler (de blir dangling symlinks som ingenting i build-stien
# importerer).
COPY packages/jokul ./packages/jokul
COPY portal ./portal
# `--ignore-scripts`: hopp over workspace-pakkenes lifecycle-scripts (f.eks.
# mcp-server sin `prepare: tsc`). De er irrelevante for portal-builden, og
# mcp-server kopieres ikke engang inn – uten flagget feiler installen med
# «tsc: command not found». Pakkene vi faktisk bygger (@fremtind/jokul, portal)
# har ingen prepare/postinstall og bygges eksplisitt lenger nede.
RUN pnpm install --frozen-lockfile --ignore-scripts

# -----------------------------------------------------------------------------
# builder: bygger jokul-pakken, Storybook og portalen. Portalen bygges med
# Next `output: "standalone"`, så Next tracer nøyaktig de runtime-avhengighetene
# den trenger inn i `.next/standalone` – vi slipper å sende med hele monorepoets
# node_modules til runner.
# -----------------------------------------------------------------------------
FROM build-base AS builder
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=rppnrdtw
ARG NEXT_PUBLIC_SANITY_DATASET=test
ARG NEXT_PUBLIC_STORYBOOK_BASE_URL=/storybook
ARG NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN

WORKDIR /app
# Start fra dependencies-laget som allerede har node_modules + kildekoden for
# .storybook, packages/jokul og portal (inkl. portal/deploy/ med proxy og
# start-script). Legg på de resterende root-filene og assets build-en trenger –
# men ikke hele konteksten (ingen mcp-server, actions, utils, tester osv.).
COPY --from=dependencies /app ./
COPY tsconfig.json tsconfig-for-declarations.json biome.json ./
COPY storybook-public ./storybook-public

RUN pnpm --filter "@fremtind/jokul" build
RUN pnpm build:storybook

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_STORYBOOK_BASE_URL=$NEXT_PUBLIC_STORYBOOK_BASE_URL
ENV NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN=$NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN
RUN \
  --mount=type=secret,id=FIGMA_IMAGE_READ_TOKEN,env=FIGMA_IMAGE_READ_TOKEN \
  --mount=type=secret,id=SANITY_API_READ_TOKEN,env=SANITY_API_READ_TOKEN \
  pnpm --filter "portal" build

# Next standalone kopierer IKKE med statiske assets eller `public/` automatisk –
# de må legges inn manuelt i standalone-treet på riktig sted.
RUN cp -R portal/.next/static portal/.next/standalone/portal/.next/static
RUN cp -R portal/public portal/.next/standalone/portal/public

# -----------------------------------------------------------------------------
# proxy-deps: bygg et bittelite node_modules kun for Express-proxyen
# (portal/deploy/server.mjs). Isolert fra portalens standalone node_modules slik
# at runner holder seg slank.
# -----------------------------------------------------------------------------
FROM base AS proxy-deps

WORKDIR /app/proxy
COPY portal/deploy/proxy.package.json ./package.json
RUN npm install --omit=dev --no-package-lock

# -----------------------------------------------------------------------------
# runner: kun det som trengs i produksjon. Ingen pnpm, ingen tar, ingen prune –
# bare Next standalone-outputen, Storybook, proxyen og dens små node_modules.
# -----------------------------------------------------------------------------
FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

# Next standalone-output (inkluderer minimalt node_modules, packages/jokul og
# den genererte portal/server.js-entrypointen).
COPY --from=builder /app/portal/.next/standalone ./

# Bygd Storybook, servert under /storybook av proxyen.
COPY --from=builder /app/storybook-static ./storybook-static

# Express-proxyen og dens isolerte avhengigheter. Filendelsen .mjs sikrer at
# Node tolker den som ESM uansett omkringliggende package.json.
COPY --from=builder /app/portal/deploy/server.mjs ./proxy/server.mjs
COPY --from=proxy-deps /app/proxy/node_modules ./proxy/node_modules

# Felles entrypoint som starter Next standalone (:3333) + proxy (:3000).
COPY --from=builder /app/portal/deploy/start.mjs ./start.mjs

USER appuser
EXPOSE 3000
CMD ["node", "start.mjs"]
