---
title: pull requests
path: /komigang/pullrequests
order: 5
---

# Pull requests

## Sende en pull request til Jøkul

Vi i kjerneteamet følger med på det som skjer på GitHub-repoet til Jøkul.
Når du sender inn en pull request, får du alltid tilbakemelding fra noen i kjerneteamet.
Da kan vi enten velge å merge pull requesten, eller gi deg en tilbakemelding på hva du må gjøre før vi kan ta inn endringene dine.

Hvis det gjelder større API-endringer, kan det ta litt tid før vi kan merge, fordi vi kanskje må teste det i noen interne applikasjoner først.

### Din første pull request

Flott at du vil bidra! Her er noen smarte tips før du setter i gang:

-   Sjekk i tråden på en oppgave at ingen andre har tatt den.
-   Sjekk med den personen som eventuelt har tatt oppgaven og legg igjen en kommentar om at du ser på den.
-   Kjerneteamet jobber etter en prioritert backlog, men vi er takknemlige for alle som vil ta tak i oppgaver som har lavere prioritet.
-   Følg gjerne med på andres pull requests og kom med kommentarer og tilbakemeldinger. Da plukker du kjapt opp hva som er viktig og ikke for Jøkul.

### Slik sender du en pull request

1. Lag en ny branch. Hvis du ikke har tilgang til prosjektet, må du forke det først.
2. Fra rot i prosjektet, kjører du `yarn` og `yarn build`.
3. Fiks feilen eller legg til ny funksjonalitet.
4. Lag eller oppdater eksempelet i `/documentation`
5. Legg til tester.
6. Sjekk at alle testene blir grønne når du tester med `yarn test` på rot.
7. Legg til endrede filer i stage med `git add`.
8. Commit med `yarn commit` fra rot, slik at du får hjelp til å lage en korrekt commit-melding. Hvis du kjenner til conventional commit style godt fra før, kan du utføre commit med Git som vanlig.
   Lint, prettier og typesjekk blir kjørt automatisk.
9. Push og opprett en pull request mot Jøkul.
10. Fyll ut malen som dukker opp i GitHub.
