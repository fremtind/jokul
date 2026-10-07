---
"@fremtind/jokul": minor
---

Legger til hjelpefunksjon for å sette bakgrunnsfarge på et element ved hover, basert på `contrast`-fargen som standard, og med mulighet for å overstyre til en annen farge.

Funksjonen fungerer ved å blande en fokusfarge med bakgrunnsfargen. Som standard ser den etter variablene `--background-color` og `--hover-accent-color`. Hvis noen av disse ikke er satt faller den tilbake til henholdsvis `transparent` og `--jkl-color-backgorund-contrast`.
