# [`@fremtind/jkl-input-group-react`](https://jokul.fremtind.no/komponenter/input-group)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/input-group).

## Installasjon

**Tips:** [stilpakken](../input-group/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-input-group-react` eller `npm i @fremtind/jkl-input-group-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InputGroup } from "@fremtind/jkl-input-group-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-input-group/input-group.min.css";

// For enkelte features må du også ha denne CSSen importert.
import "@fremtind/jkl-tooltip/tooltip.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-input-group/input-group";
```
