---
"@fremtind/jokul": minor
---

Forenkler `TextArea`. Høyden styres nå av CSS-variabelen `--rows`, og fokus-state og JavaScript-måling av høyde er fjernet fra `BaseTextArea`. Klassene `jkl-text-area__text-area--N-rows` er fjernet.

`autoExpand` bruker nå `field-sizing: content` og er en progressiv forbedring. I nettlesere uten støtte for `field-sizing` utvides ikke feltet automatisk. Det beholder høyden fra `rows`, og lang tekst kan scrolles som i et vanlig tekstfelt.
