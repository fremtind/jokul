FROM docker.intern.sparebank1.no/base/cicd-container-base-images/node22-ubi9-minimal:latest as base

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

FROM base as dependencies

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY patches ./patches
COPY packages ./packages
COPY ny-portal ./ny-portal
COPY pnpm-workspace.yaml .
RUN pnpm install --frozen-lockfile
RUN find . -name 'node_modules' -print0 | tar -cf node_modules.tar --null --files-from -

FROM base as builder

WORKDIR /app
COPY --from=dependencies /app/node_modules.tar ./node_modules.tar
COPY . .
RUN tar -xf node_modules.tar 
RUN pnpm build
RUN cd ny-portal && pnpm build

FROM base as runner

WORKDIR /app
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/ny-portal ./ny-portal
COPY --from=builder /app/packages/jokul ./packages/jokul
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
WORKDIR /app/ny-portal
CMD pnpm start