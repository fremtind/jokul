# [`@fremtind/jkl-datepicker-react`](https://jokul.fremtind.no/komponenter/datepicker)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/datepicker).

## Installasjon

**Tips:** [stilpakken](../datepicker/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-datepicker-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { DatePicker } from "@fremtind/jkl-datepicker-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
import "@fremtind/jkl-popover/popover.min.css";

// For enkelte features må du også ha denne CSSen importert.
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-datepicker/datepicker";
@use "@fremtind/jkl-icon-button/icon-button";
@use "@fremtind/jkl-icons/icons";
@use "@fremtind/jkl-input-group/input-group";
@use "@fremtind/jkl-popover/popover";

@use "@fremtind/jkl-select/select";
@use "@fremtind/jkl-text-input/text-input";
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
