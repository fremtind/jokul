---
"@fremtind/jokul": minor
---

**Breaking for TypeScript:** action-knappene i `TextInput` avviser nå `disabled`, slik de alltid var tenkt å gjøre. Typen brukte `Exclude` der `Omit` var ment, og `Exclude` på en objekttype er en no-op.
