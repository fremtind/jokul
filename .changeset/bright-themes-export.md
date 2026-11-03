---
"@fremtind/jokul": minor
---

Ny inngang `@fremtind/jokul/theme` for temagenerering. Den gir tilgang til fargegeneratoren som brukes i temabyggeren, og kan brukes både i nettleser og på Node:

```ts
import { generatePalette } from "@fremtind/jokul/theme";

const palette = generatePalette("#006F4E");
```

Inngangen eksporterer `generatePalette`, `generateContrastColor`, `getLightnessFromHex`, `getLuminanceFromLightness` og `COLOR_SCHEMES`, samt typene for paletter og farger (`HexColor`, `Palette`, `LightDarkPalette`, `EditableLightDarkPalette` med flere). Inngangen vil bli utvidet med flere verktøy for å lage temaer.
