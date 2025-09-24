---
"portal": minor
---

Refaktorerer komponentoversikten og tilhørende innstillinger.

- Bruker context og funksjoner fra `cookies-next` for lagring av innstillinger
- Flytter filtrering av komponenter til rot av komponentoversiktssiden for å få mer rendret på server
- Flytter noen komponenter ut av sidestrukturen så de lettere kan brukes andre steder (`ComponentCard`, `ComponentGrid` og `PreferencesMenu`)
