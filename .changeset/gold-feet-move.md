---
"@fremtind/jokul": patch
---

Retter opp stiler for `Card` rendret som knapp

- Fjerner standard `border` og `outline` så de ikke krasjer med stilene til `Card`
- Setter automatisk `clickable`-stiler på `Card` rendret som knapper eller lenker
- Markerer `clickable` som deprecated, siden stilene settes automatisk
