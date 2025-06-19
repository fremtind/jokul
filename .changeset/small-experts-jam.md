---
"@fremtind/jokul": patch
---

Hooks: For å sørge for bedre kompatibilitet med React 19 har vi oppdatert typene for alle hooks og komponenter som tar inn en `ref` til en komponent. Du vil nå ikke lenger få feilmelding om at `RefObject<HTMLElement | null> is not assignable to RefObject<HTMLElement>`.
