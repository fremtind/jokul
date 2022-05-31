# [`@fremtind/jkl-datepicker-react`](https://jokul.fremtind.no/komponenter/datepicker)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/datepicker).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

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

Input og output fra `DatePicker` er først og fremst en `string`, det underliggende skjemafeltet er et tekstfelt. Formatet er `dd.mm.yyyy`. Komponenten gir også et ferdig `Date`-objekt dersom `value` er riktig formatert.

`onChange` får i tillegg et `meta`-objekt med verdiene `error: "WRONG_FORMAT" | "OUTSIDE_LOWER_BOUND" | "OUTSIDE_UPPER_BOUND"` og `value: string`. Du kan bruke `error` til å velge hvilken feilmeldingstekst du viser til brukeren og `value` om du ønsker å bruke inputfeltets verdi i feilmeldingen. Denne er lik `event.target.value`.

```tsx
<DatePicker
    value={value}
    onChange={(e, date, meta) => {
        setValue(e.target.value);

        console.log("onChange", {
            event: e,
            date,
            meta,
        });
    }}
/>
```

Komponenten er laget for å støtte `react-hook-form`. Et eksempel på bruk med `register` og validering ser du under. Du kan velge å ha komponenten i en [`Controller`](https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents) hvis du vil bruke `meta`-objektet i stedet.

```tsx
import {
    DatePicker,
    formatInput,
    isCorrectFormat,
    isWithinUpperBound,
    isWithinLowerBound,
    parseDateString
} from "@fremtind/jkl-datepicker-react";
import { formatDate } from "@fremtind/jkl-formatters-util";

<DatePicker
    label="Fødselsdato"
    errorLabel={formState.errors.fodselsdato?.message}
    disableBefore="01.01.1970"
    disableAfter={formatInput(new Date())}
    {...register("fodselsdato", {
        required: "Du må fylle ut fødselsdato",
        validate: {
            isCorrectFormat: (v) =>
                isCorrectFormat(v) ||
                `Datoen må være skrevet i formen ${formatDate(new Date())} eller kortformat`,
            withinLowerBound: (v) =>
                isWithinLowerBound(v, parseDateString("01.01.1970") || "Datoen må være før 01.01.1970"",
            withinUpperBound: (v) =>
                isWithinUpperBound(v, new Date()) || `Datoen må være før ${formatDate(new Date())}`,
        },
    })}
/>
```
