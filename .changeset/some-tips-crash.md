---
"@fremtind/jokul": major
---

Bytt til `tsdown` for bygg av Jøkul, og dropp CJS

**BREAKING CHANGE**
Jøkul-pakken bygges nå _kun_ som ESM-moduler, med `browser` som mål. Dette betyr at prosjektet ditt å være satt opp med en moderne stack for å kunne bruke Jøkul. I de aller fleste tilfeller vil dette ikke berøre deg hvis du allerede bygger en frontend-applikasjon. Hvis du er usikker på hva dette innebærer kan de lese Sindre Sørhus' [guide til rene ESM-pakker](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

Alle andre endringer i denne committen skal være rent interne, og ikke påvirke hvordan du bruker Jøkul. Gi oss beskjed hvis noe ikke funker som det skal.
