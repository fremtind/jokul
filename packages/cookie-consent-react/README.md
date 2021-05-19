# [`@fremtind/jkl-cookie-consent-react`](https://fremtind.github.io/jokul/komponenter/cookie-consent)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/cokie-consent).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-cookie-consent-react` eller `npm i @fremtind/jkl-cookie-consent-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import {  } from "@fremtind/jkl-cookie-consent-react";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";
```

### Bruk

Komponentene tar følgende props:

-   `children`: **Påkrevd**. Innholdet i knappen. `ReactNode`
-   `onClick`: **Påkrevd**. Klikkhåndtering for knappen. Får en MouseEvent som første argument. `MouseEventHandler<HTMLButtonElement>`
-   `forceCompact`: Angir at knappen skal vises i liten versjon uavhengig av skjermstørrelse. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`

En enkel bruk av knapper kan se slik ut:

```jsx
<SecondaryButton onClick={showDetails}>Vis detaljer</SecondaryButton>
```

Knapper kan ha annet innhold enn ren tekst, for eksempel for å vise aktivitet knyttet til knappens handling:

```jsx
<PrimaryButton onClick={uploadFiles}>
  {
    isUploading
      ? <Loader inline negative textDescription="Laster opp filer">
      : "Last opp"
  }
</PrimaryButton>
```
