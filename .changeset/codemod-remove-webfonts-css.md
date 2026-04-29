---
"@fremtind/jokul": patch
---

Codemoden fjerner nå overflødige `@fremtind/jokul/styles/fonts/webfonts.css`- og `webfonts.min.css`-imports. I Jøkul 5 er `@font-face`-definisjonene flyttet inn i `styles/base.css`, og den frittstående webfonts-CSS-fila finnes ikke lenger i pakken – så uten denne opprydningen ville bygget feile etter migrering for konsumenter som bruker ren CSS.

Codemoden gir også en advarsel hvis import-fjerningen skjer i en fil som ikke har en `base.css`/`components.css`-import fra før, slik at man får beskjed om å legge til `base.css` for å beholde fontene.

I tillegg flagger codemoden tre vanlige 4 → 5-mønstre som ikke kan auto-erstattes, men som krever manuell migrering:

- Bruk av fjernede Sass-fargevariabler (`jkl.$color-granitt`, `jkl.$color-varde` osv.) — bytt til semantiske CSS-variabler.
- `@include jkl.light-mode-variables { … }` og `jkl.dark-mode-variables` — disse mixinene er fjernet.
- `text-style("body")` / `text-style("small")` — bytt til `paragraph-*`- eller `text-*`-varianter.
