# portal

## 1.4.11

### Patch Changes

- Updated dependencies [474d28f]
- Updated dependencies [28ba168]
- Updated dependencies [0858502]
- Updated dependencies [1391356]
  - @fremtind/jokul@3.2.0

## 1.4.10

### Patch Changes

- 4134008: Sortering av komponenter baserer seg nå på kategorier istedenfor stikkord

## 1.4.9

### Patch Changes

- Updated dependencies [d2d539e]
- Updated dependencies [8713b86]
  - @fremtind/jokul@3.1.0

## 1.4.8

### Patch Changes

- def9c2f: Oppdaterer `Flex`-komponenten med ny funksjonalitet for responsivitet og layout.

  - De fleste flex-egenskaper er eksponert via props
  - Mulighet for å styre hvordan komponenten vises ved hjelp av props
  - Støtte for forskjellige verdier på forskjellige breakpoints
  - Mulighet for å styre layout med kolonner
  - Stilene til flex blir ikke lenger satt inline slik at de kan overstyres

  **BREAKING**
  Avstander i `Flex` baserer seg nå på våre nye, semantiske spacing-tokens. Man må derfor oppdatere vardiene for `gap` og lignende props.

  ```diff
  - <Flex gap={16}>
  + <Flex gap="s">
  ```

  For mer informasjon om bruk av komponenten, og det nye APIet, se portalen og eksemplene i Storybook.

- Updated dependencies [bc3e9f1]
- Updated dependencies [def9c2f]
- Updated dependencies [676f44e]
- Updated dependencies [23152ee]
  - @fremtind/jokul@3.0.0

## 1.4.7

### Patch Changes

- Updated dependencies [fcfa2c6]
  - @fremtind/jokul@2.0.0

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
