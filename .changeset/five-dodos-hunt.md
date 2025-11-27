---
"@fremtind/jokul": minor
---

`System Message` tar nå inn variant, istedenfor å måtte bruke flere typer System Messages. Markert egendefinerte System Messages som deprecated.

```typescript jsx
// Før
<ErrorSystemMessage>...</ErrorSystemMessage>

// Etter
<SystemMessage variant="error">...</SystemMessage>
```
