---
"@fremtind/jokul": patch
---

Legg til fallback-font for ikonene.

Ettersom ikonfonten er stor, og kan ta litt tid å laste inn, har vi lagt til en fallback-font for ikonene der størrelsen er satt til 0%. Uten dette kan man risikere at navnet på ikonet vises som ren tekst før ikonfonten er lastet. Vi anbefaler uansett at man legger inn en <link rel="preload"> for ikonfonten i løsningen sin, slik at den lastes så raskt som mulig.
