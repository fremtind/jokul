---
"@fremtind/jokul": patch
---

`disabled` og `readOnly` på skjemafeltene er nå dokumentert som forbeholdt interne verktøy. Hover over propen i editoren forklarer hvorfor tilstandene er dårlige i kundeflyter, og peker på alternativene.

Dokumentasjonen ligger i de nye typene `WithDisabled` og `WithReadOnly`, som er eksportert for bruk i egne komponenter. Feltene henter `disabled`/`readOnly` derfra i stedet for fra Reacts DOM-typer. Typene er ellers uendret.
