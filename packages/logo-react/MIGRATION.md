# Migrasjonsguide

## Til `jkl-logo-react@9.0.0`

-   Ingen endring i `<Logo>`
-   `<LogoStamp>` må nå bli gitt én av et utvalg tekster som `children`.
-   Alle tekst-komponentene har et `displayName` som kan brukes som `title` i `<LogoStamp>`. Hvis du ikke setter `title` brukes _"Forsikring levert av Fremtind"_.`

```diff
- import { LogoStamp } from "@fremtind/jkl-logo-react";
+ import { LogoStamp, FraSB1ogDNB } from "@fremtind/jkl-logo-react";

-   <LogoStamp animated />
+   <LogoStamp animated title={FraSB1ogDNB.displayName}>
+     <FraSB1ogDNB />
+   </LogoStamp>
```

Disse tekstene er tilgjengelige:

-   Fremtind, fra SpareBank 1 og DNB (det eneste alternativet som var tidligere)
-   Forsikring levert av Fremtind
-   Innovasjon fra Fremtind
-   Teknologi fra Fremtind
-   Vårt eget forsikringsselskap
-   Vårt forsikringsselskap, Fremtind
