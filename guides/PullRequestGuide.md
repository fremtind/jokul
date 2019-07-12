# Pull requests

Kjerneteamet følger med på det som skjer på GitHub-repoet til Jøkul.
Når du sender inn en pull request, får du alltid tilbakemelding fra noen i kjerneteamet.
Da kan pull requested bli merget eller du vil kunne få tilbakemelding på hva som skal til for at den kan merges.

Hvis det gjelder større API-endringer, kan det ta litt tid før vi kan merge, fordi vi må kanskje må teste i noen interne applikasjoner først.

## Din første pull request

Flott at du vil bidra! Her er noen smarte tips før du setter i gang:

-   Sjekk i tråden på en oppgave at ingen andre har tatt den.
-   Sjekk med den personen som eventuelt har tatt oppgaven og legg igjen en kommentar om at du ser på den.
-   Kjerneteamet jobber etter en prioritert backlog, men vi er takknemlige for alle som vil ta tak i oppgaver som har lavere prioritet.
-   Følg gjerne med på andres pull requests og kom med kommentarer og tilbakemeldinger. Da plukker du kjapt opp hva som er viktig og ikke for Jøkul.

## Slik sender du en pull request

1. Fork prosjektet og lag en ny branch. ( Om du har tilgang til prosjektet trenger du ikke lage en fork)
2. Kjør `yarn` og `yarn build` på rot i prosjektet.
3. Løs feilen eller legg til ny funksjonalitet og legg til tester.
4. Pass på at alle tester blir grønne når du tester med `yarn test` på rot.
5. Legg til endrede filer i stage med `git add`.
6. Commit med `yarn commit` fra rot, for å få hjelp til å lage en korrekt commit-melding. Hvis du kjenner godt til conventional commit style, kan du utføre commit med Git som vanlig. Lint, prettier og typesjekk kjøres automatisk.
7. Push og opprett pull request mot Jøkul. Fyll ut malen som dukker opp i GitHub.
