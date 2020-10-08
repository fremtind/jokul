# Bidragsguide

## Bidra til Jøkul

Vi er avhengige av at folk vil bidra til Jøkul. Der er «så mye å gjøre og så lite tid å gjøre det på», når man skal betjene en hel organisasjon i den digitale tidsalderen. Fremtind har mange ulike fagsystemer og kundeløsninger som ikke bare skal over i Fremtind-drakt, men som også skal forbedres og forenkles i tråd med Fremtinds visjon om å være et forsikringsselskap for morgendagens behov.

### Vi utvikler på GitHub

Du finner all koden, feilrapportene og backlogen til designsystemet i GitHub. Alt er åpent, og du har mulighet til å påvirke ved å bidra i samtalen på GitHub.

### Dette trenger du

-   Node v.12.0.0 eller nyere
-   Yarn
-   Git 2.0.0 eller nyere

Vi bruker Yarn i stedet for npm, siden Yarn har bedre integrasjon mot monorepo-verktøyet Lerna, som brukes i Jøkul.

### Slik håndterer vi brancher og versjoner

-   Vi bruker monorepo med Lerna for å holde kontroll på de individuelle pakkene i repositoriet.
-   Hver enkelt pakke følger semantisk versjonering.
-   Nye versjoner blir automatisk generert fra commit-loggen, derfor er det satt regler for hvordan en commit skal se ut.

### Slik organiserer vi branchene

Vi gjør vårt beste for å holde main ren og pen og sørger for at den alltid virker. Master er grunnlaget for pakkene som vi publiserer i npm-registeret. Vi sender normalt pull requester mot main.
