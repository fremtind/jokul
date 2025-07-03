---
"@fremtind/jokul": patch
---

Rettet en feil med type-resolution for brukere av `pnpm` workspaces.

Brukere i `pnpm` workspaces, spesielt de som håndterer flere React-versjoner (f.eks. v18 og v19), opplevde at props for Jøkul-komponenter ble feilaktig resolvet til `any`.

For å løse dette har vi lagt til `@types/react` i vår `peerDependencies`. Dette følger den offisielle anbefalingen fra [pnpm-dokumentasjonen](https://pnpm.io/typescript#workspace-usage).
