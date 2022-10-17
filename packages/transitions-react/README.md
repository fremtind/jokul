# [`@fremtind/jkl-transitions-react`](https://jokul.fremtind.no/komponenter/transitions)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/transitions).

## Installasjon

**Tips:** [stilpakken](../transitions/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-transitions-react` eller `npm i @fremtind/jkl-transitions-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Transitions } from "@fremtind/jkl-transitions-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-transitions/transitions.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-transitions/transitions";
```
