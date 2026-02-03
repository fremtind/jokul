---
"@fremtind/jokul": minor
---

Legger til støtte for både statiske og dynamiske gap-verdier i `Flex`,
inkludert responsive varianter og mulighet for å kombinere statiske og
dynamiske verdier på tvers av breakpoints.

```tsx
// Statisk spacing (tall)
<Flex gap="16 32" />

// Semantisk spacing
<Flex gap="s m" />

// Responsive, med blanding av statisk og semantisk på tvers av breakpoints
<Flex
  gap={{
    small: "none s",
    medium: "8 16",
    large: "m xl",
  }}
/>
```
