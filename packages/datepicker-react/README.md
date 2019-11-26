# [`@fremtind/jkl-datepicker-react`](https://fremtind.github.io/jokul/components/datepicker/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/datepicker/) er beskrevet i `@fremtind/jkl-datepicker` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-datepicker-react` eller `npm i @fremtind/jkl-datepicker-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
```

### Bruk

Helt grunnleggende bruk av datovelgeren ser slik ut:

```jsx
<DatePicker />
```

Datovelgeren kan ta inn prop-en `title` (standardverdi "Velg dato") for å sette tittel. Det samme gjelder `monthLabel` ("Måned"), `yearLabel` ("År"), `months` og `days`. De to sistnevnte er av typen `string[]` og brukes eksempelvis slik dersom det skal være språktilpasset:

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

Er det behov for å velge en dato langt frem eller tilbake i tid benyttes prop-en `extended` slik at år og måned kan settes via en nedtrekksliste.

Teksten i tekstfeltet kan enten settes som en placeholder ved prop-en `placeholder` (standardverdi "dd.mm.åååå") eller ferdig utfylt ved `initialDate`.

```jsx
<DatePicker initialDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))} />
```
