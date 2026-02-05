---
"@fremtind/jokul": minor
---

Utvider Flex med støtte for både statiske og semantiske gap-verdier.
Dette gjør det mulig å kombinere begge typer verdier, også responsivt på tvers av breakpoints.

```tsx
// Statiske gap-verdier
<Flex gap="16 32" />

// Semantiske gap-verdier
<Flex gap="s m" />

// Blanding av statiske og semantiske verdier på tvers av breakpoints
<Flex
  gap={{
    small: "none s",
    medium: "8 16",
    large: "m xl",
  }}
/>
```
