---
"@fremtind/jokul": minor
---

`upload()` tar imot en `AbortSignal` som femte argument, slik at opplastingen kan avbrytes. Feil fra serveren gir nå en `Error` med HTTP-status, og svaret tolkes med `responseType = "json"`.
