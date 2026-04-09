---
"@fremtind/jokul": patch
---

La til støtte for brand-spesifikke fonter via tokens, slik at fontvalg kan styres med `data-brand` på samme måte som brand-farger.

Brand-fontstiler genereres nå fra tokens (inkludert `@font-face` og `--jkl-font-family-*`), og typografi-oppsettet bruker disse CSS-variablene slik at riktig brand-font faktisk slår inn i komponentene.
