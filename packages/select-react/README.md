# [`@fremtind/jkl-select-react`](https://jokul.fremtind.no/komponenter/select)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/select).

## Installasjon

**Tips:** [stilpakken](../select/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-select-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Select } from "@fremtind/jkl-select-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-select/select";
@use "@fremtind/jkl-icons/icons";
```
