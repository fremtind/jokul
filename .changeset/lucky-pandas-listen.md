---
"@fremtind/jokul": minor
---

`data-track-*`-attributter satt direkte i JSX-en vinner nå over komponentens egne defaults. Tidligere ble de overskrevet – og i komponenter uten tekstkilde for label fjernet helt – fordi attributtene ble satt etter at props ble spredt ut. Det gjør at samme konvensjon gjelder enten komponenten kommer fra Jøkul eller ikke. Feltene i `tracking.extra` vinner nå på samme måte.
