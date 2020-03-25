# [`@fremtind/jkl-icon-button-react`](https://fremtind.github.io/jokul/komponenter/iconbutton)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/iconbutton).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-icon-button-react` eller `npm i @fremtind/jkl-icon-button-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { IconButton } from "@fremtind/jkl-icon-button-react";
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

### Bruk

Komponentene tar følgende props:

-   `iconType`: Angir hvilken svg ikon skal vises (f.eks: search, calendar, clear). `string`
-   `buttonTitle`: Serverer som hjelpetekst. `string`
-   `onClick`: **Påkrevd**. Klikkhåndtering for knappen. Får en MouseEvent som første argument. `MouseEventHandler<HTMLButtonElement>`


En enkel bruk av knapper kan se slik ut:

```jsx
<IconButton iconType="calendar" onClick={onClick} buttonTitle="Vis kalendar" />
```

