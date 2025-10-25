---
"@fremtind/jokul": major
---

- Fikset en bug hvor multiple=false fortsatt akkumulerte filer
- Flyttet filakkumulering-logikk til komponenten når multiple=true

**BREAKING**: Eksisterende konsumenter som manuelt håndterte filakkumulering må oppdatere sine `onChange`-handlere.

```tsx
<FileInput
  multiple
  onChange={(_e, newFiles) => {
    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
  }}
/>
```

```tsx
<FileInput
  multiple
  onChange={(_e, updatedFiles) => {
    setFiles(updatedFiles);
  }}
/>
```
