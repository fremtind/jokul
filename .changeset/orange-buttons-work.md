---
"@fremtind/jokul": minor
---

Bytt ut `date-fns` med `dayjs` for behandling av datoer i kalenderen.

For å gjøre oss klare for å droppe CommonJS i biblioteket bytter vi vekk fra `date-fns` for å håndtere datoer i kalenderen i `DatePicker`. Pakken har en del feil i genereringen av typer, som gjør at man kan få feil ved import/bygg avhengig av om man bruker CJS eller ESM.

Siden `date-fns` var en relativt stor pakke var den behandlet som en _optional dependency_, slik at du selv måtte installere den for å bruke `DatePicker`. `dayjs` er en så liten pakke at vi har bygget inn relevant kode i kalenderen. Dermed får du én avhengighet mindre av å bruke Jøkul 🎉
