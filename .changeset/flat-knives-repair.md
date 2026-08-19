---
"portal": minor
---

Storybook-stories hentes nå fra den publiserte Storybook-en på GitHub Pages i stedet for en lokal fil. I Sanity Studio kan redaktører velge hvilken versjon av Jøkul de vil hente stories fra – enten siste stabile versjon, prereleases, eldre vedlikeholdte versjoner, eller en lokal Storybook-instans under utvikling. Stories-visningen i portalen er oppdatert til å bruke samme versjonsstyrte API.

Siden portalen ikke lenger bundler Storybook i Docker-bygget, er Dockerfile forenklet betraktelig: Express-proxyen, prosessmanageren og tilhørende avhengigheter er fjernet, og Next standalone-serveren eksponeres direkte.
