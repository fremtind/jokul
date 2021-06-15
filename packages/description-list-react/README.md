# `@fremtind/jkl-description-list-react`

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/detailslist).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-description-list-react` eller `npm i @fremtind/jkl-description-list-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer React-pakken (velg komponenten(e) du trenger):

```js
import { DescriptionList } from "@fremtind/jkl-description-list-react";
```


### Bruk

Komponenten tar følgende props:

-   `items`: **Påkrevd** En liste med objekter bestående av feltene 'term' og tilhørende 'details'. Disse brukes henholdsvis til å lage de semantiske elementene `<dt>` og `<dd>`. Hver "term" (`<dt>`) har en tilhørende liste med "details" (`<dd>`). Se eksempelet under.

-   `className`: Om man ønsker å gjøre noen visuelle justeringer, kan man sende inn en className. Vær obs på å bruke denne da det er meninga at man skal bruke komponenten slik som den er.

En enkel bruk av denne lista kan se slik ut:

```jsx
const items = [
    {
        term: `Forsikringer`,
        details: [
            "SAGA Dødsrisiko Grunndekning Hovedforsikret",
            "SAGA Dødsrisiko Tilleggsdekning Hovedforsikret",
            "SAGA Dødsrisiko Utvidet dekning Hovedforsikret",
        ],
    },
    {
        term: "Mat",
        details: ["Sushi", "Carbonara"],
    },
];

<DescriptionList items={items} />
```

