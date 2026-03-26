---
"@fremtind/jokul": minor
---

Sørg for at style-entrypoints for Menu og Message alltid inkluderer core theme-stiler, slik at spacing-tokens (som `--jkl-unit-10`) er tilgjengelige ved direkte import av komponentstiler.

Dette fikser manglende padding/gap i komponenter som er avhengige av spacing-tokens, uten at det trengs fallback-verdier i komponentstilene.
