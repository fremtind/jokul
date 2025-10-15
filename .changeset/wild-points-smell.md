---
"@fremtind/jokul": major
---

**BREAKING**: Cookie Consent krever nå en
`aboutPage`-prop. Dette er en lenke til siden brukerne kan gå for å få informasjon om cookiene som settes i løsningen. Eksempelvis https://www.fremtind.no/informasjonskapsler.

Dersom du mangler en sånn side må den lages for løsnignen, **det er ikke tilstrekkelig å sende brukeren til
Fremtind.no-siden**.

**BREAKING**: Cookie Consent tar ikke lenger inn
`marketing` som en gyldig prop. Dette er fordi vi ikke bruker cookies til markedsføring. Den dagen vi begynner med det krever det et eget samtykke.

**Minor changes**:

- ModalenAction viser nå knappene i `row-reverse` istedenfor
  `row` for å støtte under høyrestilling av knappene på en bedre måte.
