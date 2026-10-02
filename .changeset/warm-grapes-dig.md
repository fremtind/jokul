---
"@fremtind/jokul": minor
---

Legg til støtte for tokens som styres etter color-scheme men ikke er farger.

For farger bruker vi `light-dark()`, som kun støtter fargeverdier. For andre verdier, som prosenter, må vi fortsatt bruke den "gamle" varianten med `prefers-color-scheme` og `data-theme`. Denne endringen legger til støtte for det i Style Dictionary.
