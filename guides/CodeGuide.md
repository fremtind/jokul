# Kode i Jøkul

## Hvordan skrive kode til Jøkul

Jøkul er et design system, og dermed et bibliotek. Det gir litt andre utfordringer enn klient-utvikling. I denne guiden får du en liten innføring i hvordan vi jobber med Jøkul. Jøkul brukes av mange forskjellige klienter, med forskjellige behov og ønsker. Det er viktig å balansere funksjonalitet, brukervennlighet, pakkestørrelse og kompleksitet i hver enkelt komponent.

### Dette bruker vi

-   Språk: Typescript
-   JS-rammeverk: React
-   Byggverktøy: Rollup
-   Test runner: Jest
-   Test rammeverk:
-   CSS-preprosessor: Scss

### Pakke organisering

Alle komponentene er organisert under `/packages`. De som slutter på `-react` er react-pakker, de som ikke har en ending er stilpakker. Stilpakkene skal være generelle og kunne brukes uten noe javascript rammeverk. Hver enkelt pakke inneholder et eksempel som kan startes med `yarn dev` fra hver enkelt pakke. Enkelte stilpakker har ikke eksempel, da det kreves en del javascript for å få eksempelet til å kjøre, feks `Dropdown`.

### Hvordan lage en ny pakke

1. På rotnivå, kjør kommandoen `lerna create pakke-navn`.
2. Du får noen spørsmål om pakken. Fyll ut etter beste evne.
3. Når pakken er opprettet, finner du en pakke som er lik den du har laget og kopierer de script- og oppsettfilene du trenger, for eksempel tsconfig-for-declarations.json for React-pakker.

### Hvordan lenke pakker sammen

1. Fra hvor som helst i projektet kjør `lerna add pakke-som-skal-legges-til --scope=pakken-den-skal-inn-i`

### Legg til avhengighet

Det finnes avhengigheter på ulike nivå i Jøkul. De som gjelder globalt, feks til å kjøre bygg-jobben, ligger på rot-nivå. For å legge til en ny pakke her kjøres `yarn add pakke -W` evt `-DW` om det er for bare utvikling. Normalt legges avhengigheter på pakke-nivå, hvis det er en lokal avhengighet til en annen pakke, se "Hvordan lenke pakker sammen". Avhengigheter legges til som normalt her med `yarn add`, men tenk på om det skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React feks bør sannsynligvis være en `peerDependency` så ikke brukeren ender opp med flere utgaver av React i sin pakke.
