# Integrasjonstester med Cypress

Cypress blir ikke automatisk installert, så du må selv legge det til før du kan kjøre testene. Dette er fordi Cypress er en relativt stor dependency, og ihvertfall i denne testfasen ikke ønskelig at alle må vente på for å gjøre utvikling i Jøkul. Om du vil teste Cypress selv, følg oppskriften under.

## Kom i gang

1. Installer Cypress globalt med `yarn global add cypress`
1. Start portalen med `yarn start` fra rot i prosjektet.
1. Kjørt `yarn cypress:open` for å starte testrunneren
1. Bruk testrunneren til å kjøre testene du vil ha

Hvis ikke testene passerer lokalt hos deg, men passerer på serveren, er det ikke unormalt. Dette har med forskjeller i rendering mellom ulike platformer. Det er CI serveren som skal sitte med fasiten, så alltid la CI serveren generere snapshotene som lagres i prosjektet. Lokalt vil snapshots bli ignorert av git, dette fordi bare serveren skal få legge til nye screenshots.

## Utestående oppgaver

-   Robuste tester av alle komponenter
-   Integrasjonstest av portalen
-   Bytte fra JS til TS
