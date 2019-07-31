# Tests

## Kom i gang med tester

Det er mange som er avhengig av at Jøkul virker. Men vi har ikke mange manuelle testere som kan gå igjennom all komponentene å teste for regressjon ved hver endring, så vi trenger et godt nivå av automatiske tester som øker tilliten til at Jøkul virker. Samtidig ønsker vi ikke bruke veldig mye tid på å skrive tester som ikke gir noe særlig verdi, eller teste funksjonalitet som er godt testet andre steder i verdikjeden. Vi har tre nivåer med tester, unit, integrasjon og visuell regresjonstester. De første to typene kjøres automatisk på bygg-serveren vår. Visuelle regresjonstester kjøres manuelt i forkant av en ny utgivelse.

### Unit test

> `.test.ts(x)`
> Disse testene skal sikre at nøkkelfunksjonaliteten til komponenten virker.

For en knapp så vil det kunne være at den blir rendret i DOMet og når man trykker på den, så blir funksjonen man har sendt inn kjørt. Så langt det er fornuftig bør man ha 100% branch dekning på komponenter, men bruk sunn fornuft. Skriver man støttefunksjoner bør disse også ha 100% branch coverage, og dekke alle edge-verdier. Kjerneteamet har ikke satt opp noen testdekningskrav, men dette er noe vi ser på i forbindelse med pull requester. Vi bruker `Jest` som test runner og `React testing library` for å håntere React komponenter. Testene skal ligge sammen med koden, og unit testene har postfix `.test.ts(x)`.

Per nå er støtten for web components i testrammeverket ganske tynn, så komponentene som basere seg på NRK Core Components er vanskelig å teste godt. Dog er komponentene godt testet fra NRK sin side. Men dette bør forbedres når web components støtten i jsdom forbedres.

### Integrasjons test

> `*-consumer-example`
> Disse er lagt for å kunne plukke opp alvorlige feil i byggprosessen.

Dette er miniprosjekter som bruker komponentene fra Jøkul i et webpack- og et parcel-basert prosjekt. Disse sjekker at det er mulig å installere og bruke pakkene våre, men sjekker ikke innholdet i de.

### Visuell regresjons test

> `.spec.ts`
> Disse testene er ment til å oppdage utilsiktede endringer fra en komponent inn i en annen.

For å unngå å bruke masse tid på å lete etter regresjon i Jøkul ved hver utgivelse, så har vi laget en test for hver komponent som tar et bilde av komponenten i bruk i portalen, og sammenligner det med forrige versjon. Feks, en utvikler endrer stilen til knapp-komponenten, men det viser seg at det er en ukjent avhengighet mellom knappen og hamburgermenykomponenten, så den har også endre seg. Da vil disse testene vise den visuelle differansen. Testene skal ligge sammen med koden, og visuelle regresjons testene har postfix `.spec.ts(x)`. Test resultatene ligger under `__image_snapshots__`.
