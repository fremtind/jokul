---
"@fremtind/jokul": minor
---

`Search` bygger nå på de samme stilene som de andre skjemafeltene, med `wrapper-styles` på wrapperen og `input-styles` på inputen. Det gir hover-tilstand, feiltilstand, dempet placeholder, transition og høykontrast-håndtering den manglet, og read-only tegnes nå med dempet ramme. Stilene er flyttet inn i `@layer jokul.components`, der resten av komponentene ligger.

Rammen tegnes med `box-shadow` i stedet for `border`, og to klassenavn følger nå navnekonvensjonen. Har du stylet disse selv må du oppdatere:

- `.input-wrapper` → `.jkl-search__wrapper`
- `.clear-button` → `.jkl-search__clear-button`

Submit-knappen fra `Search.Button` rendres nå inne i wrapperen, slik at den delte rammen omslutter både feltet og knappen.
