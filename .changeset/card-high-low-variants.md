---
"@fremtind/jokul": major
---

Endrer API-et til `Card`: `variant` er fjernet, og kort med border styres nå med den nye boolean-propen `outlined`.

Dette betyr at tidligere outlined-kort må oppdateres fra:

```tsx
<Card variant="outlined">Innhold</Card>
```

til:

```tsx
<Card outlined>Innhold</Card>
```

`variant="high"` og `variant="low"` er også fjernet. Fjern prop-en for å bruke standard Card-flate:

```tsx
<Card>Innhold</Card>
```
