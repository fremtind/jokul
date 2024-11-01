---
"@fremtind/jokul": major
"portal": patch
---

Oppdaterer `Flex`-komponenten med ny funksjonalitet for responsivitet og layout.

- De fleste flex-egenskaper er eksponert via props
- Mulighet for å styre hvordan komponenten vises ved hjelp av props
- Støtte for forskjellige verdier på forskjellige breakpoints
- Mulighet for å styre layout med kolonner
- Stilene til flex blir ikke lenger satt inline slik at de kan overstyres

**BREAKING**
Avstander i `Flex` baserer seg nå på våre nye, semantiske spacing-tokens. Man må derfor oppdatere vardiene for `gap` og lignende props.

```diff
- <Flex gap={16}>
+ <Flex gap="s">
```

For mer informasjon om bruk av komponenten, og det nye APIet, se portalen og eksemplene i Storybook.
