---
"@fremtind/jokul": major
---

`FileInput` bruker nå alltid den kompakte (tidligere `small`) visningen. Propen `variant` er fjernet, og `data-track-variant` settes ikke lenger. Fjern `variant` fra bruk av `FileInput`.

I tillegg:

- Klassen `jkl-file-input--has-files` er fjernet.
- Tracking-attributtene (`data-track-*`) settes nå bare på filvelgeren, ikke lenger også på dropsonen.
- Filvelgeren dekker hele dropsonen og bruker nettleserens dra-og-slipp. `onChange` får derfor alltid en `ChangeEvent`, aldri en `DragEvent`, og typen `HandleFiles` er fjernet.
- `upload()` gir `null` når svaret ikke er gyldig JSON, og feil fra serveren gir en `Error` med HTTP-status i meldingen.

Se MIGRATION.md for detaljer.
