# portal

## 1.2.0

### Minor Changes

- d95bea7: Lagt til webhook-basert cache invalidation for umiddelbare bloggoppdateringer i produksjon

  Løser cache-problemer hvor nye Sanity-innlegg ikke viste seg umiddelbart på deployed miljøer ved å implementere automatisk cache revalidation via webhook-integrasjon.

### Patch Changes

- Updated dependencies [06804df]
  - @fremtind/jokul@1.0.1

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
