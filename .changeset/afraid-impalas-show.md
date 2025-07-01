---
"@fremtind/jokul": major
"portal": patch
---

Import av komponenter fra roten av `@fremtind/jokul` er ikke lenger mulig.

For å fikse dette må alle importer oppdateres til å peke direkte på den spesifikke modulen:

**FØR:**

```typescript
import { Card } from "@fremtind/jokul";
```

**ETTER:**

```typescript
import { Card } from "@fremtind/jokul/card";
```

`ScreenReaderOnly`-komponenten er også flyttet og må nå importeres fra `@fremtind/jokul/screen-reader-only`.
