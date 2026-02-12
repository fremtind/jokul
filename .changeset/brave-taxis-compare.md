---
"@fremtind/jokul": major
---

- Gjør `Label` polymorf via `as`- prop. `Label` rendres nå som `<label>` by default, og kan rendres som `<span>` eller `<legend>` ved å sette `as`-prop.

Breaking changes:

- `standAlone` er fjernet. `<Label>` er nå `<label>` by default.
