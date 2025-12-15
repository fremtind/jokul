---
"@fremtind/jokul": minor
---

**Støtte for Tailwind 4**

Denne oppdateringen legger til støtte for versjon 4 av Tailwind. For å ta i bruk Jøkul-verdier i ditt Tailwind 4-oppsett importerer du Jøkul-temaet rett etter importen av Tailwind i hovedstilarket ditt:

```diff
  @import "tailwindcss";
+ @import "@fremtind/jokul/tailwind/v4";
```

Versjon 3 er fortsatt støttet på samme måte som tidligere.
