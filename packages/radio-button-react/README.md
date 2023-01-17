# [`@fremtind/jkl-radio-button-react`](https://jokul.fremtind.no/komponenter/radiobutton)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/radiobutton).

## Installasjon

**Tips:** [stilpakken](../radio-button/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-radio-button-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { RadioButton } from "@fremtind/jkl-radio-button-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-field-group/input-group.min.css";

// For enkelte features må du også ha denne CSSen importert.
import "@fremtind/jkl-tooltip/tooltip.min.css";
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-radio-button/radio-button";
@use "@fremtind/jkl-field-group/input-group";

@use "@fremtind/jkl-tooltip/tooltip";
@use "@fremtind/jkl-icons/icons";
```
