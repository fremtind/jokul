---
"@fremtind/jokul": patch
---

- Gjør `Image`-komponenten om til en `forwardRef` for å støtte `refs` fra `parent`-komponenter.
- Setter `img` i `Card` til `object-fit: cover` som standard, slik at bilder dekker kortet uten å forvrenge proporsjonene.
