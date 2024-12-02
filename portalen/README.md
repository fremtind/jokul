# Jøkul Portal

Jøkul Portal er inngangsporten til dokumentasjon og egenopplæring i bruken av [Jøkul](https://github.com/fremtind/jokul), designsystemet til Fremtind.

Basert på [Payloads mal for Payload CMS + Remix](https://github.com/payloadcms/remix-server).

> This is an example repository of how to set up Payload CMS for content management together with Remix, in such a manner that each application is divided into its own package (including the express server app).
>
> The Payload instance is injected into Remix loaders and actions through request context. This way we are free to use the Payload Local API for data, user and authentication management, while avoiding payload having to be bundled together with the remix server build. With this setup you can even use the Payload Authentication middleware in your remix application.

## Kom i gang

Som utvikler for Jøkul Portal trenger du:

-   [Node LTS](https://nodejs.org/en/)
-   [Postgresql](https://www.postgresql.org/).

Prosjektet bruker `pnpm`, som du kan installere via [`corepack`](https://nodejs.org/dist/latest/docs/api/corepack.html).

Valgfritt, men kan være nyttig:

-   Tilgang til Jøkuls kontoer (`fremtind-distlosn-ds-jkl-preprod` / `fremtind-distlosn-ds-jkl-prod´) i IAM (spør leder)
-   [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) satt opp med `aws configure sso`.
-   SSO start URL: https://fremtind.awsapps.com/start
-   Region: eu-west-1
-   Konto: fremtind-distlosn-ds-jkl-preprod
-   Docker, via Self Service (spør leder om lisens for Docker Desktop) for å bygge og teste containers lokalt.

## Setup

Portalen avhenger av Jøkul via `file:../packages/jokul`. Før du starter portalen, sørg for å installere og bygge Jøkul.

1. Kjør `pnpm install` og `pnpm build` på rotnivået (Jøkul).

### Lokalt oppsett av PostgreSQL

Følg disse trinnene for å sette opp PostgreSQL lokalt:

#### Installer og start PostgreSQL (macOS)

Bruk Homebrew til å installere PostgreSQL versjon 14 og starte tjenesten:

```sh
brew install postgresql@14
brew services start postgresql@14
```

#### Opprett en database

Koble til PostgreSQL via terminalen:

```sh
psql postgres
```

Opprett en ny database ved å kjøre følgende SQL-kommando:

```sql
CREATE DATABASE jokul-portal;
```

#### Konfigurer prosjektet

-   Lag en `.env`-fil i [`./apps/server/`](./apps/server/) basert på [`.env.example`](./apps/server/.env.example).
-   Kjør `pnpm install` på rotnivå (portalen).
-   Kjør `pnpm dev`.

Om alt går som det skal vil devserveren være tilgjengelig på [localhost:3000](http://localhost:3000).

## Generering av typer

Ved endring på schema i Payload, og ved oppdatering av Jøkul-pakker, må du kjøre `pnpm -r generate:types` på rotnivå, for å generere nye typer. Commit endringene som genereres.

## Monorepo

> This monorepo is using `pnpm` for package management. While it is an easy task to switch to `yarn` instead, setting this up with `npm` workspaces can be trickier.

### Apps og packages

Fra malen:

-   `/apps/cms`: a [Payload CMS](https://payloadcms.com/) application, which will act as our backend and admin interface
-   `/apps/web`: a [Remix](https://remix.run/) application, which will act as our frontend
-   `/apps/server`: a [ExpressJS](https://expressjs.com/) application that ties all our middleware, static file serving and routing needs together
-   `/packages/ui`: a stub React component library shared by both `web` and `cms` applications
-   `/packages/shared`: a package that all out apps use that contains shared dependencies, in order to reduce bundle sizes
-   `/packages/eslint-config`: `eslint` configurations
-   `/packages/stylelint-config`: `stylelint` configurations

### Utilities

Fra malen:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting
-   [Turborepo](https://turborepo.org/) for running monorepo builds and script in a DX friendly and parallel manner
-   [Nodemon](https://www.npmjs.com/package/nodemon) for running the express server while listening to file changes in the Payload CMS package

### Develop

> To develop all apps and packages, run `pnpm run dev` from the root of the monorepo. This will start the express server that serves both the Remix and PayloadCMS applications.
>
> When saving file changes in the `apps/cms` package, the running express server will restart in order for the Payload CMS configuration changes to take effect.
>
> Remix is reloaded without restarting the express server by purging the node `require()` cache of previously imported Remix files.

### Usage

CMS Admin UI finnes under [localhost:3000/admin](http://localhost:3000/admin).

Brukernavn og passord er _dev@payloadcms.com_ / _qwerty_

### Build

> To build all apps and packages, run `pnpm run build` from the root of the monorepo. Turborepo will take care of running the build scripts in order so that packages depending on other monorepo packages is built last.
>
> If you want, serve your production build with `pnpm run serve` from the root of the monorepo.

Containers bygges og deployes automatisk av GitHub Actions ved merge til `main`.

## Produksjon

TBA: Vi er i ferd med å migrere til ny infrastruktur for deploy
