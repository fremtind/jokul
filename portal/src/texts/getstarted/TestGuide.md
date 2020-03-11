---
title: Tester
path: /komigang/tester
order: 4
---

# Kom i gang med tester
Det er mange som er avhengige av at Jøkul virker, men vi har ikke ressurser til å teste manuelt for regresjon ved hver endring. Derfor trenger vi gode automatiske tester som øker tilliten til at Jøkul virker. Samtidig ønsker vi ikke å bruke tid på å skrive tester som ikke gir verdi, eller teste funksjonalitet som er godt testet andre steder i verdikjeden.

## Enhetstester
Enhetstester er det første nivået av tester, og det du trenger å forholde deg til når du skriver komponenter til Jøkul. De skal ligge sammen med komponenten, med filnavn på formen `<MinKomponent>.test.tsx` eller `<minFunksjon>.test.ts`.

> Enhetstestene skal sikre at nøkkelfunksjonaliteten til komponenten virker.

For eksempel kan testene for en knapp sjekke at den blir rendret til DOM, og at den kaller riktig funksjon når man klikker på den. Så langt det er fornuftig, bør man ha 100% branch coverage på komponenter, men bruk sunn fornuft. Skriver man støttefunksjoner, bør disse også ha 100% branch coverage, og dekke alle edge-verdier.

Designsystemteamet har ikke satt opp noen formelle testdekningskrav, men dette er noe vi ser på i forbindelse med pull requester. Vi bruker [Jest](https://jestjs.io/) som test runner og [React testing library](https://testing-library.com/docs/react-testing-library/intro) for å håndtere React-komponenter. Testene skal ligge sammen med koden og ha filendelsen `.test.ts(x)`.

Foreløpig er støtten for web components i testrammeverket ganske tynn, så komponenter som baserer seg på NRK Core Components er vanskelig å teste godt. Men disse komponentene er allerede godt testet fra NRKs side. Når støtten for web components i jsdom blir bedre, vil det bli enklere å teste disse komponentene selv.

Husk også å teste eventuelle støttefunksjoner og gjenbrukbar kode, for eksempel custom hooks.
