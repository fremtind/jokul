---
"@fremtind/jokul": major
---

Skriver om `DatePicker` til å bygge på det native `<input type="date">`-elementet og bytter navn til `DateInput`.

- `DateInput` bruker nå ISO-datoformat (`yyyy-mm-dd`) for `value`, `defaultValue`, `min` og `max`.

BREAKING CHANGE: API-et til `DateInput` er endret. Se migrasjonsguiden for detaljer.

- `disableBeforeDate`/`disableAfterDate` er erstattet av `min`/`max` (ISO-strenger).
- `onChange` gir nå et vanlig React change-event; les datoen fra `event.target.value` (ISO-streng) i stedet for `(event, date, { error, value })`.
- Datoformatet er endret fra `dd.mm.yyyy` til `yyyy-mm-dd`.
- Kompakt inntasting (`11112022`) og automatisk punktum-formatering er fjernet – inntasting håndteres nå av nettleseren.
- `defaultShow` og den interne hjelpefunksjonen `formatInput` er fjernet (bruk `toValidInputValue`).
