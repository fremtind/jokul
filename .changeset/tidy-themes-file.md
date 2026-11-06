---
"@fremtind/jokul": minor
---

`@fremtind/jokul/theme` har fått et filformat for temaer, `JokulThemeFile`. En temafil er JSON med navn, visningsnavn, farger for lyst og mørkt tema og eventuelt fonter, inkludert egne fontfiler. Formatet er grunnlaget for å bygge temaer fra temabyggeren.

- `validateThemeFile` sjekker en temafil og returnerer enten temaet eller en liste med lesbare feilmeldinger, f.eks. `colorTokens.text.default: mangler.`
- `parseThemeFile` returnerer temaet, eller `undefined` hvis fila er ugyldig.
- `THEME_FILE_VERSION` er gjeldende versjon av formatet.
- Hjelpefunksjonene `isHex`, `normalizeHex` og `isThemeName` er også eksportert.
