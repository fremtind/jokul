---
"@fremtind/jokul": minor
---

Legger til `data-track-*`-attributter på alle komponenter, som metadata team kan bruke til å støtte sporing av brukerne. Hver komponent får et `name`- og `label`-attributt som ikke kan endres, og en `tracking`-prop med `id` (overskrivbar) og `extra` (helt åpen, for prosjektspesifikke detaljer).

`CookieConsent` får to nye valgfrie props, `appName` og `team`, for å skille sporingsdata mellom apper og team. Disse blir påkrevd fra Jøkul 7 når `statistics`-samtykke er satt.

Alt er valgfritt og bakoverkompatibelt. Ingenting er påkrevd i denne versjonen. Se `TRACKING.md` for hvordan du setter opp sporing mot GTM eller Mixpanel, eller leser attributtene med egen kode.
