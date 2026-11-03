---
"@fremtind/jokul": minor
---

Legg til `jokul theme generate|build|validate` for å lage, bygge og validere temaer fra kommandolinjen.

- `build` bygger hver temafil til `<out>/<navn>/`, og kopierer `*.woff2` fra en `fonts/`-mappe ved siden av temafilen. `--css` kompilerer `theme.css`, `--index` skriver `_index.scss`, `manifest.json` og `all.css`, og `--types` skriver `brands.d.ts`.
- Temafiler kan nå ha `title`, `fonts.mono` og `fonts.faces`.
- `data-brand` kan utvides med egne temaer via `JokulBrands` i `@fremtind/jokul/utilities`.
- `sass` er lagt til som valgfri peer dependency, og trengs bare for `--css`.
