---
"@fremtind/jokul": major
---

Strammet inn polymorfisme i `Link`:

- `as` tillater nå kun HTML-elementet `"a"` som string.
- `as` støtter fortsatt React-komponenter som `NextLink`.
- For ugyldige string-verdier i as (relevant for JavaScript-prosjekter) faller Link tilbake til <a> i runtime.
