---
title: kodestil
path: /komigang/kodestil
order: 3 
---

# Slik skriver du kode til Jøkul

Jøkul er et designsystem, et bibliotek med komponenter. Det gir litt andre utfordringer enn når du driver med klientutvikling. Her får du en liten innføring i hvordan vi jobber med Jøkul. Jøkul brukes av mange forskjellige klienter, med forskjellige behov og ønsker. Det er viktig at vi balanserer funksjonalitet, brukervennlighet, pakkestørrelse og kompleksitet i hver enkelt komponent.

## Dette bruker vi

-   Språk: [Typescript](https://www.typescriptlang.org/docs/home.html)
-   JS-rammeverk: [React](https://reactjs.org/)
-   Byggverktøy: [Rollup](https://rollupjs.org/guide/en/) og [Gulp](https://gulpjs.com/)
-   Test runner: [Jest](https://jestjs.io/)
-   Testrammeverk: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-   CSS-preprosessor: [Sass](https://sass-lang.com/)

## Slik setter du opp utviklingsmiljøet på din egen maskin

1. Klon eller fork [Jøkul-biblioteket](https://github.com/fremtind/jokul) fra GitHub
2. Lag en ny branch og gi den et fornuftig navn etter hva du skal lage
3. Bygg prosjektet med kommandoene `yarn` og `yarn build` fra rot i prosjektet

## Slik har vi organisert pakkene

Alle komponentene er organisert under `/packages`. De som slutter på `-react` er react-pakker. De som ikke har en endelse er stilpakker. Stilpakkene skal være generelle og du kan bruke dem uten noe javascript-rammeverk. Hver enkelt pakke inneholder et eksempel, som du kan kan starte med `yarn dev` fra hver enkelt pakke. Noen av stilpakkene mangler eksempler, fordi det kreves en del javascript for å få eksempelet til å kjøre. `Select` og `Datepicker` er eksempler på dette.

## Slik lager du en ny pakke

1. Gå til rot og kjør kommandoen `lerna create <pakke-navn>`.
2. Du får noen spørsmål om pakken. Fyll ut så godt du kan. Husk at navnet på pakken skal starte med `@fremtind/jkl-`.
3. Når pakken er opprettet, finner du en pakke av typen du skal lage (stil eller React). Kopier de script- og oppsettfilene du trenger, for eksempel `tsconfig-for-declarations.json` for React-pakker eller `gulpfile.js` for stilpakker.

## Slik lenker du pakker sammen

Hvis du vil legge til en pakke i en annen, kan du fra hvor som helst i prosjektet kjøre `lerna add <pakke-som-skal-legges-til> --scope=<pakken-den-skal-inn-i>`. For eksempel vil `lerna add @fremtind/jkl-core scope=@fremtind/jkl-button` legge til `jkl-core` som en avhengighet i `jkl-button`-pakken. Når du legger til avhengigheter på denne måten kan Lerna bruke den lokale versjonen av `jkl-core` i stedet for å laste ned fra NPM, slik at du kan utvikle raskere. Det fungerer kun for andre pakker i Jøkul.

## Slik legger du til en avhengighet

Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen `yarn add pakke -W`. For å legge til som en utviklingsavhengighet bruker du `-DW`.

Lokale avhengigheter, som trengs for en pakkes funksjonalitet i bruk, legger vi vanligvis på pakkenivå slik det er beskrevet i "Slik lenker du pakker sammen". Bruk kommandoen `yarn add` for å legge til pakker som ikke er en del av Jøkul. Før du gjør det, er det lurt å tenke på om de skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en `peerDependency`, slik at brukeren ikke ender opp med flere utgaver av React i sin pakke.
