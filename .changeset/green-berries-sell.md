---
"@fremtind/jokul": minor
---

DatePicker støtter nå kompakt datoformat uten skilletegn, som `11112022`,
og formatterer det automatisk til `11.11.2022`.

Dette utvider hvilke inputverdier som godtas, men endrer ikke API-et som
forbrukere mottar fra komponenten. `meta.value` er fortsatt lik
`event.target.value`, og kontrollert bruk med `setValue(e.target.value)`
oppfører seg som før.

Eksempler:

- Å skrive `11112022` viser `11.11.2022` i feltet og emitterer `11.11.2022`
- Å velge `11.11.2022` i kalenderen emitterer fortsatt `11.11.2022`
- Å skrive `11.11.2022` oppfører seg uendret
