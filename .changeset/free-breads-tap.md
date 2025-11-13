---
"@fremtind/jokul": major
---

TablePagination bruker nå den eksisterende Pagination-komponenten i stedet for egen paginering-logikk.

**Breaking Changes:**

- `activePage` prop endret fra 0-basert til 1-basert indeksering

**Migrering:**

```typescript
// Før
<TablePagination
  activePage={0}
/>

// Nå
<TablePagination
  activePage={1}
/>
```
