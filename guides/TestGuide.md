# Tests

## Kom i gang med tester

Det er mange som er avhengige av at Jøkul virker, men vi har ikke ressurser til å teste manuelt for regresjon ved hver endring. Derfor trenger vi gode automatiske tester som øker tilliten til at Jøkul virker. Samtidig ønsker vi ikke å bruke tid på å skrive tester som ikke gir verdi, eller teste funksjonalitet som er godt testet andre steder i verdikjeden.

Vi har tre nivåer med tester: Enhetstester, integrasjonstester og visuelle regresjonstester. De første to typene kjøres automatisk på bygg-serveren vår, mens de visuelle regresjonstestene kjøres manuelt i forkant av en ny utgivelse.

### Enhetstester

> `.test.ts(x)`
>
> Disse testene skal sikre at nøkkelfunksjonaliteten til komponenten virker.

Eksempelvis kan testene for en knapp sjekke at den blir rendret til DOM, og at den kaller riktig funksjon ved klikk. Så langt det er fornuftig bør man ha 100% branch coverage på komponenter, men bruk sunn fornuft. Skriver man støttefunksjoner bør disse også ha 100% branch coverage, og dekke alle edge-verdier.

Kjerneteamet har ikke satt opp noen formelle testdekningskrav, men dette er noe vi ser på i forbindelse med pull requester. Vi bruker `Jest` som test runner og `React testing library` for å håntere React-komponenter. Testene skal ligge sammen med koden, og enhetstestene har postfikset `.test.ts(x)`.

Per nå er støtten for web components i testrammeverket ganske tynn, så komponentene som baserer seg på NRK Core Components er vanskelig å teste godt. Dog er komponentene godt testet fra NRK sin side. Når støtten for web components i jsdom blir bedre, vil det bli enklere å teste disse komponentene selv.

### Integrasjonstester

> `*-consumer-example`
>
> Disse er lagt for å kunne plukke opp alvorlige feil i byggprosessen.

Dette er miniprosjekter som bruker komponentene fra Jøkul i webpack- og et parcel-baserte prosjekter. Disse sjekker at det er mulig å installere og bruke pakkene våre, men sjekker ikke innholdet i dem.

### Visuelle regresjonstester

> `.spec.ts`
>
> Disse testene er ment til å oppdage utilsiktede endringer fra en komponent inn i en annen.

For å unngå å bruke masse tid på å lete etter regresjon i Jøkul ved hver utgivelse, har vi laget en automatisk test for hver komponent. Disse testene tar et bilde av komponenten i bruk i portalen, og sammenligner det med forrige versjon.

Dersom en utvikler eksempelvis endrer stilen til knapp-komponenten, og det viser seg at det er en ukjent avhengighet mellom knappen og hamburgermenykomponenten, vil sistnevnte også endre seg. Da vil disse testene vise den visuelle differansen.

Testene skal ligge sammen med koden, og de visuelle regresjonstestene har postfikset `.spec.ts(x)`. Testresultatene ligger under `__image_snapshots__`.
