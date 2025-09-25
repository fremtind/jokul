---
"portal": patch
---

Det viser seg at `useReactiveGetCookies` ikke var så smart som jeg trodde, så for å unngå et flash av standardinnstillinger når siden lastes inn henter vi nå brukerinnstillingene på server og sender inn til komponentene _i tillegg til_ å hente dem "live" under bruk av siden.
