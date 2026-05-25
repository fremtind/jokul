---
"@fremtind/jokul": patch
---

Fikser en feil der moduser som `data-size` ble satt på uventet sted i komponenter som bruker InputPanel. `data-size` og `data-theme` vil nå gjelde _hele_ komponenten i `RadioPanel` og `CheckboxPanel`, ikke bare selve inputfeltet.
