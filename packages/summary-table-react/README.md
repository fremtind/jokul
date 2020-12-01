# `@fremtind/jkl-summary-table-react`


## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/summarytable).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-summary-table-react` eller `npm i @fremtind/jkl-summary-table-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer React-pakken (velg komponenten(e) du trenger):

```js
import { SummaryTable } from "@fremtind/jkl-summary-table-react";
```

### Bruk

Komponentene tar følgende props:

-   `columnDescriptions`: **Påkrevd** Brukes for skjermleser, disse beskriver henholdsvis hva de to kolonenne inneholder. Eksempel: `['Produkter', 'Pris']`
-   `items`: **Påkrevd**. Et sett med elementer som har en `label` og `value` Eksempelvis `{label:'Vaskemaskin', value:'5000 NOK'}`
-   `footer`: Angir siste raden i tabellen og kan f.eks brukes til å angi totalpris for alle produkter i tabellen. Eksempel: `{label: 'Total sum', value:'6000 NOK'}`
-   `className`: Om man ønsker å gjøre noen visuelle justeringer, kan man sende inn en className. Vær obs på å bruke denne da det er meninga at man skal bruke komponenten slik som den er.

En enkel bruk av denne tabellen kan se slik ut:

```jsx
<SummaryTable
    columnDescriptions={["Produkter","Pris"]}
    items={[
        {label:'Vaskemaskin', value;'5000 NOK'},
        {label:'Playstation 2', value;'1000 NOK'}
    ]}
    footer={{label:'Total sum', value;'6000 NOK'}}
    className="jkl-random-classname"
/>
```
