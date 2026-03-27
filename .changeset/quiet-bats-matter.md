---
"@fremtind/jokul": patch
---

Legger til et nytt oppsett for å måle bruk av Jøkul på tvers av repoer og team,
med daglige øyeblikksbilder sendt til Mixpanel uten behov for egen database.

Løsningen skanner GitHub-repoer for `package.json`-filer og relevant kildekode,
og rapporterer blant annet:

- pakkebruk
- prosjektbruk per pakke
- komponentbruk
- propbruk
- tokenbruk
- hook- og hjelpefunksjonsbruk
- temabruk
- bruk av foreldede API-er

Alle eventnavn og egendefinerte felter er på norsk for å gjøre rapportene
lettere å forstå og bruke i Mixpanel.

Prosjekteventene oppsummerer blant annet migreringsstatus, versjonsstatus,
antall stilfiler, antall komponenter, prop-er og tokens, og om et prosjekt bruker
tema, tokens eller Tailwind.

Tokenbruk er skilt ut i en egen rapport, slik at faktiske designtokens blir
lettere å analysere separat fra temaoppsett og stilimporter.
