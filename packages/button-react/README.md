# [`@fremtind/jkl-button-react`](https://jokul.fremtind.no/komponenter/button)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/button).

## Installasjon

**Tips:** [stilpakken](../button/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-button-react` eller `npm i @fremtind/jkl-button-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { PrimaryButton } from "@fremtind/jkl-button-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-button/button.min.css";

// Button bruker loader internt for å vise lasteindikator i knappen.
import "@fremtind/jkl-loader/loader.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-loader/loader";
```
