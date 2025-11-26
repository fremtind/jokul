---
"@fremtind/jokul": minor
---

`Message` tar nå inn variant, istedenfor å måtte bruke flere typer meldinger. Markert egendefinerte messages som deprecated.

```typescript jsx
// Før
<ErrorMessage>...</ErrorMessage>

// Etter
<Message variant="error">...</Message>
```
