# Portal for dokumentasjon av designsystemet Jøkul

![Skjermbilde 2025-05-08 kl  14 54 09](https://github.com/user-attachments/assets/47214e8c-049e-4c3c-b123-664603319755)

Portalen er knutepunktet for informasjon om Jøkul. Målet med tjenesten er å være en kilde for sannhet om designsystemets bestanddeler og hvordan man bruker dem, både hver for seg og sammen som en helhet.

## Arkitektur

### CMS 

Mesteparten av innholdet som vises i Portalen ligger i CMSet Sanity. Innholdet er organisert etter hva det beskriver, ikke etter hvor i portalen det vises, slik at det er enklere å benytte det flere steder.

Innholdet redigeres gjennom et web-grensesnitt som hostes sammen med selve portalen i både testmiljø og på nett. Dette grensesnittet kan også kjøres opp lokalt under utvikling.

Konfigurasjonsfiler for grensesnittet, og definisjon av datatyper for portalen/designsystemet finnes i mappen [`src/sanity`](./src/sanity).

### Webklient

Selve portalen er bygget i Next.js med utstrakt bruk av serversiderendring (SSR). Grensesnittet til CMSet er bygget inn i denne applikasjonen.

### Eksempelkode for komponenter

Dokumentasjonen inneholder utstrakt bruk av kjørbare eksempler for komponentene, både for seg selv og satt sammen i vanlige mønstre. Disse eksemplene er skrevet som Storybook stories, og ligger sammen med koden til hver enkelt komponent. Konfigurasjonen for Storybook ligger på rot i repoet.

## Utviklingsmiljø

For å kjøre opp prosjektet lokalt for utvikling må du kjøre opp både portalen (som inkluderer grensesnittet for CMSet) og Storybook dersom du vil se eksemplene i portalen. Husk å sette opp en `.env`-fil med verdier for variablene som er satt opp i [`.env.example`](./.env.example)

1. kjør `pnpm dev:portal` på rot i repoet for å starte Storybook og portalen

Alternativt:

1. kjør `pnpm dev` på rot i repoet for å starte Storybook
2. kjør `pnpm dev` i denne mappen for å starte portalen

Portalen vil være tilgjengelig på [`localhost:3333`](http://localhost:3333), og du kommer til grensesnittet for CMSet på [`localhost:3333/studio`](http://localhost:3333/studio)
Du kan også gå rett til Storybook på [`localhost:6007`](http://localhost:6007)

## Kodestruktur

Portalen er bygget med Next.js sin [App Router](https://nextjs.org/docs/app), og bruker [React Server Components](https://react.dev/reference/rsc/server-components) for å hente ut data fra CMSet.

Mappestrukturen i prosjektet er i stor grad diktert av konvensjonene fra Next.js, slik at navigasjonsstrukturen på siden er speilet i prosjektet under mappen [`src/app`](./src/app). Komponenter som er delt på tvers av applikasjonen ligger under [`src/components`](./src/components). Kode for å definere innholdsstruktur i Sanity CMS ligger under [`src/sanity`](./src/sanity).

### Uthenting av data

Uthenting av data fra CMSet og andre eksterne datakilder skjer i stor grad der dataene trengs, ved hjelp av Seact Server Components.
Hvis du skal hente data fra Sanity må du først definere en spørring under [`src/sanity/queries`](.src/sanity/queries). Denne querien kan du sende inn til Sanity-klienten i komponenten der du trenger dataene. Spørringene dedupliseres automatisk dersom de brukes flere steder.

## Test- og produksjonsmiljøer

Portalen publiseres som et Docker-image som inneholder både portalen og Storybook, samt en liten Express-server som ruter trafikk mellom dem.
Bygg og publisering til både test- og produksjonsmiljø skjer automatisk i et eget repo ved merge til `main`-branchen.
