# [`@fremtind/jkl-field-group-react`](https://jokul.fremtind.no/komponenter/fieldgroup)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/fieldgroup).

## Installasjon

**Tips:** [stilpakken](../field-group/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-field-group-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { FieldGroup } from "@fremtind/jkl-field-group-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";

// For enkelte features må du også ha denne CSSen importert.
import "@fremtind/jkl-tooltip/tooltip.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-field-group/field-group";
@use "@fremtind/jkl-input-group/input-group";
```
