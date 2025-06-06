---
"@fremtind/jokul": minor
---

Vi har oppdatert typescript internt til versjon 5.8 for å kunne håndheve at typene våre skal kunne fjernes uten å måtte konvertere kode. Dette gjør det enklere å kompilere koden, og gjøre det teoretisk mulig å kjøre koden direkte i node uten transpilering til ren javascript.

Dette skal ikke føre til breaking changes for deg som bruker Jøkul, men gi oss gjerne beskjed dersom det er forskjeller i hvordan typescript 5.8 håndterer typer og hvordan din versjon gjør det.
