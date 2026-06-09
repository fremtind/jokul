---
"@fremtind/jokul": minor
---

Legg til `center` og `subdued` props på Text og Title komponenter for enklere styling av vanlige layoutbehov.

- `center`: Sentrerer teksten horisontalt (`text-align: center`)
- `subdued`: Bruker dempet tekstfarge (`--jkl-color-text-subdued`)

Begge props er tilgjengelige på både Text og Title komponenter.

Oppdater også `tsconfig.json` med `@testing-library/jest-dom` og `vitest/globals` typer for å fikse TypeScript-feil i test-filer.

