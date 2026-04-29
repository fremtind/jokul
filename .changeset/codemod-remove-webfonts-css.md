---
"@fremtind/jokul": patch
---

Codemoden fjerner nå overflødige `@fremtind/jokul/styles/fonts/webfonts.css`- og `webfonts.min.css`-imports. I Jøkul 5 er `@font-face`-definisjonene flyttet inn i `styles/base.css`, og den frittstående webfonts-CSS-fila finnes ikke lenger i pakken – så uten denne opprydningen ville bygget feile etter migrering for konsumenter som bruker ren CSS.

Codemoden gir også en advarsel hvis import-fjerningen skjer i en fil som ikke har en `base.css`/`components.css`-import fra før, slik at man får beskjed om å legge til `base.css` for å beholde fontene.
