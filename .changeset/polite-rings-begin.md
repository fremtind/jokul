---
"@fremtind/jokul": major
---

**BREAKING CHANGE**:  
Menu-komponenten har byttet prop-navn fra `isOpen` til `open`.

- **Prop**: `isOpen` → `open`
- **Callback**: `onToggle` tar nå et argument kalt `open` (tidligere `isOpen`).

Gjør dette når du bruker menu-komponenten:

**Før:**

```tsx
<Menu isOpen={true} onToggle={(isOpen) => ...} />
```

**Etter:**

```tsx
<Menu open={true} onToggle={(open) => ...} />
```
