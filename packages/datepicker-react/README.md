# [`@fremtind/jkl-datepicker-react`](https://fremtind.github.io/jokul/komponenter/datepicker)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/datepicker).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-datepicker-react` eller `npm i @fremtind/jkl-datepicker-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

### Bruk

Helt grunnleggende bruk av datovelgeren ser slik ut:

```jsx
<DatePicker />
```

Datovelgeren kan ta inn prop-en `label` (standardverdi "Velg dato") for å sette tittel.

Om du ønsker andre navn på ukedager og/eller måneder, f.eks for andre språk enn norsk, kan dette sendes inn som `string`-arrayer til prop-ene `days` og `months`.

```jsx
const englishMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const englishDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

<DatePicker months={englishMonths} days={englishDays} />;
```

Er det behov for å velge en dato langt frem eller tilbake i tid benyttes prop-en `extended` slik at år og måned kan settes via en nedtrekksliste. Etikettene på disse nedtrekkslistene settes med prop-ene `monthLabel` og `yearLabel` ("Måned" og "År" er standardverdier).

Du kan sette en forhåndsvalgt dato med `initialDate`. Dersom ingen dato er valgt vises teksten fra prop-en `placeholder` (standardverdi er "dd.mm.åååå").

```jsx
<DatePicker initialDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))} />
```
