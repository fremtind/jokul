# Koden i Jøkul

Jøkul er et designsystem, et bibliotek med komponenter. Det gir litt andre utfordringer enn når du driver med klientutvikling. Her får du en liten innføring i hvordan vi jobber med Jøkul. Jøkul brukes av mange forskjellige klienter, med forskjellige behov og ønsker. Det er viktig at vi balanserer funksjonalitet, brukervennlighet, pakkestørrelse og kompleksitet i hver enkelt komponent.

## Dette bruker vi

-   Språk: Typescript
-   JS-rammeverk: React
-   Byggverktøy: Rollup
-   Test runner: Jest
-   Test rammeverk:
-   CSS-preprosessor: Scss

## Slik har vi organisert pakkene

Alle komponentene er organisert under `/packages`. De som slutter på `-react` er react-pakker. De som ikke har en endelse er stilpakker. Stilpakkene skal være generelle og du kan bruke dem uten noe javascript-rammeverk. Hver enkelt pakke inneholder et eksempel, som du kan kan starte med `yarn dev` fra hver enkelt pakke. Noen av stilpakkene mangler eksempler, fordi det kreves en del javascript for å få eksempelet til å kjøre. `Dropdown` er et slikt tilfelle.

## Slik lager du en ny pakke

1. Gå til rot og kjør kommandoen `lerna create pakke-navn`.
2. Du får noen spørsmål om pakken. Fyll ut så godt du kan.
3. Når pakken er opprettet, finner du en pakke som er lik den du har laget. Kopier de script- og oppsettfilene du trenger, for eksempel tsconfig-for-declarations.json for React-pakker.

## Slik lenker du pakker sammen

Hvis du vil legge til en pakke i en annen, kan du fra hvor som helst i prosjektet kjøre `lerna add pakke-som-skal-legges-til --scope=pakken-den-skal-inn-i`

## Slik legger du til en avhengighet

Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen `yarn add pakke -W`. Hvis du bare skal utvikle, bruker du `-DW`. 

Hvis avhengigheten er lokal, legger vi dem vanligvis på pakkenivå, slik det er beskrevet i "Slik lenker du pakker sammen". Bruk kommandoen `yarn add` for å legge til som normalt her. Før du gjør det, er det lurt å tenke på om den skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en `peerDependency`, slik at brukeren ikke ender opp med flere utgaver av React i sin pakke.
