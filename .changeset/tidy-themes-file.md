---
"@fremtind/jokul": minor
---

`@fremtind/jokul/theme` har fått et filformat for temaer, `JokulThemeFile`. En temafil er JSON med navn, visningsnavn, farger for lyst og mørkt tema og eventuelt fonter, inkludert egne fontfiler. Formatet er grunnlaget for å bygge temaer fra temabyggeren.

- `validateThemeFile` sjekker en temafil og returnerer enten temaet eller en liste med lesbare feilmeldinger, f.eks. `colorTokens.text.default: mangler.`
- `parseThemeFile` returnerer temaet, eller `undefined` hvis fila er ugyldig.
- `THEME_FILE_VERSION` er gjeldende versjon av formatet.
- Hjelpefunksjonene `isHex`, `normalizeHex` og `isThemeName` er også eksportert.
- Formatet finnes som JSON Schema, slik at temafiler kan redigeres for hånd med autofullføring og validering i editoren. Skjemaet ligger på `https://jokul.fremtind.no/schemas/theme-file/v1.json` (eksportert som `THEME_FILE_SCHEMA_URL`) og i pakken som `@fremtind/jokul/theme/theme-file.v1.schema.json`.
- Ukjente felter i en temafil regnes som feil, slik at skrivefeil i feltnavn ikke blir oversett. Unntaket er `$schema`.
