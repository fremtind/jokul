---
"@fremtind/jokul": minor
---

Nytt inngangspunkt `@fremtind/jokul/theme` med fargegenerering, temafilformatet og konvertering til token-filer. Inngangspunktet kan trygt brukes i nettleseren. Bygging av temaer til CSS og SCSS gjøres med `jokul theme`-kommandoen.

```ts
import { generatePalette } from "@fremtind/jokul/theme";

const palette = generatePalette("#006F4E");
```
