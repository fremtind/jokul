# portal

## 1.4.15

### Patch Changes

- Updated dependencies [17bbfc8]
- Updated dependencies [a2df805]
  - @fremtind/jokul@1.7.6

## 1.4.14

### Patch Changes

- Updated dependencies [de03873]
  - @fremtind/jokul@1.7.5

## 1.4.13

### Patch Changes

- Updated dependencies [5d91fb6]
  - @fremtind/jokul@1.7.4

## 1.4.12

### Patch Changes

- Updated dependencies [ddf8429]
  - @fremtind/jokul@1.7.3

## 1.4.11

### Patch Changes

- Updated dependencies [8dcb832]
  - @fremtind/jokul@1.7.2

## 1.4.10

### Patch Changes

- Updated dependencies [1927c63]
  - @fremtind/jokul@1.7.1

## 1.4.9

### Patch Changes

- Updated dependencies [2383cb9]
  - @fremtind/jokul@1.7.0

## 1.4.8

### Patch Changes

- Updated dependencies [62c9069]
  - @fremtind/jokul@1.6.2

## 1.4.7

### Patch Changes

- Updated dependencies [1c5a1df]
  - @fremtind/jokul@1.6.1

## 1.4.6

### Patch Changes

- Updated dependencies [98bdec6]
- Updated dependencies [4598e1e]
  - @fremtind/jokul@1.6.0

## 1.4.5

### Patch Changes

- 2b9ffaa: - Rettet opp i importen av CSS-stiler for komponenter i [global.scss](<https://github.com/fremtind/jokul/blob/main/portal/src/app/(frontend)/global.scss#L5>).
  - Endret bakgrunnsfargen til body i portalen fra `--jkl-color-background-container-high` til `--jkl-color-background-page`.
- Updated dependencies [74e9d27]
- Updated dependencies [1a60d17]
- Updated dependencies [68b580f]
- Updated dependencies [9eba724]
  - @fremtind/jokul@1.5.1

## 1.4.4

### Patch Changes

- Updated dependencies [6c47b7a]
- Updated dependencies [d306833]
- Updated dependencies [ed30758]
- Updated dependencies [3b2293c]
- Updated dependencies [de25ed3]
- Updated dependencies [656db36]
- Updated dependencies [6852e3e]
- Updated dependencies [8705b2f]
- Updated dependencies [9f552db]
- Updated dependencies [f084272]
  - @fremtind/jokul@1.5.0

## 1.4.3

### Patch Changes

- 297b581: Bytter til å bruke `ComponentGrid` for å vise relaterte komponenter på komponentsiden, slik at visningsinnstillingene blir tatt hensyn til der også.
- Updated dependencies [2c289e8]
  - @fremtind/jokul@1.4.1

## 1.4.2

### Patch Changes

- Updated dependencies [48100dd]
  - @fremtind/jokul@1.4.0

## 1.4.1

### Patch Changes

- 5f1b652: Det viser seg at `useReactiveGetCookies` ikke var så smart som jeg trodde, så for å unngå et flash av standardinnstillinger når siden lastes inn henter vi nå brukerinnstillingene på server og sender inn til komponentene _i tillegg til_ å hente dem "live" under bruk av siden.

## 1.4.0

### Minor Changes

- 4390859: Refaktorerer komponentoversikten og tilhørende innstillinger.

  - Bruker context og funksjoner fra `cookies-next` for lagring av innstillinger
  - Flytter filtrering av komponenter til rot av komponentoversiktssiden for å få mer rendret på server
  - Flytter noen komponenter ut av sidestrukturen så de lettere kan brukes andre steder (`ComponentCard`, `ComponentGrid` og `PreferencesMenu`)

### Patch Changes

- Updated dependencies [eb9e319]
  - @fremtind/jokul@1.3.0

## 1.3.6

### Patch Changes

- Updated dependencies [5e23ffd]
  - @fremtind/jokul@1.2.4

## 1.3.5

### Patch Changes

- Updated dependencies [d3770c2]
  - @fremtind/jokul@1.2.3

## 1.3.4

### Patch Changes

- Updated dependencies [c4363f0]
  - @fremtind/jokul@1.2.2

## 1.3.3

### Patch Changes

- Updated dependencies [a726eca]
- Updated dependencies [fd147a1]
  - @fremtind/jokul@1.2.1

## 1.3.2

### Patch Changes

- Updated dependencies [f09834d]
- Updated dependencies [5d3dd20]
  - @fremtind/jokul@1.2.0

## 1.3.1

### Patch Changes

- Updated dependencies [5be6060]
- Updated dependencies [9a4f03d]
  - @fremtind/jokul@1.1.2

## 1.3.0

### Minor Changes

- 9a097de: Legger til serverside-logging i Jøkul-portalen for enklere overvåking av driften.
  Vi logger alle sidevisninger, pluss status for Express-serveren.

## 1.2.1

### Patch Changes

- Updated dependencies [7bcab64]
  - @fremtind/jokul@1.1.1

## 1.2.0

### Minor Changes

- d95bea7: Lagt til webhook-basert cache invalidation for umiddelbare bloggoppdateringer i produksjon

  Løser cache-problemer hvor nye Sanity-innlegg ikke viste seg umiddelbart på deployed miljøer ved å implementere automatisk cache revalidation via webhook-integrasjon.

### Patch Changes

- Updated dependencies [06804df]
- Updated dependencies [f62ee78]
- Updated dependencies [a7caf53]
- Updated dependencies [1563f3c]
  - @fremtind/jokul@1.1.0

## 1.1.5

### Patch Changes

- 3406c20: Import av komponenter fra roten av `@fremtind/jokul` er ikke lenger mulig.

  For å fikse dette må alle importer oppdateres til å peke direkte på den spesifikke modulen:

  **FØR:**

  ```typescript
  import { Card } from "@fremtind/jokul";
  ```

  **ETTER:**

  ```typescript
  import { Card } from "@fremtind/jokul/card";
  ```

  `ScreenReaderOnly`-komponenten er også flyttet og må nå importeres fra `@fremtind/jokul/screen-reader-only`.

- b5c52a6: Retter opp i et SSR-problem som forårsaker hydration mismatch og en visuell flimring i komponentgalleri-siden. Problemet stammer fra en konflikt mellom server- og klient-rendret HTML, ettersom serveren ikke har tilgang til `localStorage`.

  Endringene som er gjort løser konflikten ved å bytte fra `localStorage` til `cookies`:

  1.  **Bytter fra localStorage til cookies:**
      Bruker `cookies-next` biblioteket for å håndtere cookies på klient-siden, som eliminerer problemet med at serveren ikke har tilgang til `localStorage`.
  2.  **Server-side cookie-lesing:**
      Hovedsiden (`page.tsx`) leser cookies med Next.js `cookies()` funksjon og sender verdien som `mode` prop til `ComponentGallery`.
  3.  **klient-side cookie-håndtering:**
      `ComponentGallery` bruker `getCookie` og `setCookie` fra `cookies-next` for å lese og skrive brukerens valgte visningstype.

- Updated dependencies [3406c20]
- Updated dependencies [e37cecd]
- Updated dependencies [4ac8c73]
- Updated dependencies [01e2b18]
- Updated dependencies [c3bad0f]
- Updated dependencies [e4967c9]
- Updated dependencies [0fc189c]
- Updated dependencies [a726267]
- Updated dependencies [e6a6d55]
- Updated dependencies [2610a20]
- Updated dependencies [73f2e61]
  - @fremtind/jokul@1.0.0

## 1.1.4

### Patch Changes

- Updated dependencies [fb54ec3]
  - @fremtind/jokul@0.71.2

## 1.1.3

### Patch Changes

- 6f5d3da: Artiklene i portalen (under punktet "Artikler") vises nå uten omriss, og med litt bedre kontroll over størrelse og avstand mellom hver artikkel i listen.

## 1.1.2

### Patch Changes

- Updated dependencies [79c94c3]
  - @fremtind/jokul@0.71.1

## 1.1.1

### Patch Changes

- 43ae6d8: Oppgradert/slettet avhengigheter i monorepo
- Updated dependencies [8a9434b]
- Updated dependencies [43ae6d8]
- Updated dependencies [04d9540]
  - @fremtind/jokul@0.71.0

## 1.1.0

### Minor Changes

- 9c6aeb9: Vi har implementert Live Preview for Sanity i Jøkul-portalen. Det vil si at du kan forhåndsvise endringene dine mens du gjør dem, rett i Studio!

  Velg "Presentation" helt øverst i skjermbildet i Sanity Studio, naviger deg til siden du vil redigere i forhåndsvisningen, og klikk på innholdet du vil endre. I panelet på høyre side vil du komme rett til feltet der innholdet er definert, og kan fortsette å redigere siden mens du ser forhåndsvisningen oppdatere seg til venstre ✨

### Patch Changes

- 0dd1b41: Portal: Bruk serverside-variabler for Sanity datasett slik at vi kan styre det fra miljø i stedet for i bygg
- Updated dependencies [60470d5]
  - @fremtind/jokul@0.70.0

## 1.0.2

### Patch Changes

- Updated dependencies [c89ebef]
  - @fremtind/jokul@0.69.2

## 1.0.1

### Patch Changes

- Updated dependencies [27b0912]
  - @fremtind/jokul@0.69.1
