---
"@fremtind/jokul": major
---

Refaktorering: TablePagination bruker nå Pagination-komponenten

TablePagination bruker nå den eksisterende Pagination-komponenten i stedet for egen paginering-logikk.

**Breaking Changes:**

- `activePage` prop endret fra 0-basert til 1-basert indeksering
- `onChange` callback inkluderer nå event som første parameter: `(e, toPage, fromPage) => void`

**Migrering:**

```typescript
// Før
<TablePagination
  activePage={0}
  onChange={(toPage, fromPage) => {}}
/>

// Nå
<TablePagination
  activePage={1}
  onChange={(e, toPage, fromPage) => {}}
/>
```
