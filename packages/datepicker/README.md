# [`@fremtind/jkl-datepicker`](https://jokul.fremtind.no/komponenter/datepicker)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/datepicker).

## Installasjon

**Tips:** om du bruker [React-pakken](../datepicker-react/) trenger du ikke installere denne pakken direkte.

1. `yarn add @fremtind/jkl-datepicker` eller `npm i @fremtind/jkl-datepicker`.
2. Importér stil-pakken i prosjektet ditt.

```js
// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-datepicker/datepicker.min.css";

// DatePicker bruker flere komponenter internt, avhengig av konfigurasjon. Select blir bare brukt i utvidet velger.
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-datepicker/datepicker";
@use "@fremtind/jkl-icon-button/icon-button";
@use "@fremtind/jkl-select/select";
@use "@fremtind/jkl-text-input/text-input";
```
