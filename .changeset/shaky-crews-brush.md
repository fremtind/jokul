---
"@fremtind/jokul": minor
---

Core-stilarket `@fremtind/jokul/styles/core.css` er refaktorert for å sørge for at CSS-lagene alltid opptrer i riktig rekkefølge. For å opprettholde dette i din egen kodebase bør du importere `core`-stilarket _før_ du importerer komponentstilarkene du bruker.
