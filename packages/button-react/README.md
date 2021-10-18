# [`@fremtind/jkl-button-react`](https://jokul.fremtind.no/komponenter/buttons)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/buttons).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-button-react` eller `npm i @fremtind/jkl-button-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-loader/loader.min.css"; // stil for å bruke loader i knappen
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
<PrimaryButton
    onClick={uploadFiles}
    loader={{
        showLoading: isUploading,
        textDescription: "Laster opp filer",
    }}
>
    Last opp
</PrimaryButton>
```
