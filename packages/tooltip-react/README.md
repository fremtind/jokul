# [`@fremtind/jkl-tooltip-react`](https://jokul.fremtind.no/komponenter/tooltip)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/tooltip).

## Installasjon

**Tips:** [stilpakken](../tooltip/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-tooltip-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Tooltip } from "@fremtind/jkl-tooltip-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-tooltip/tooltip.min.css";

// Du må også importere stilarket til ikonene for å vise komponenten riktig:
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-tooltip/tooltip";
@use "@fremtind/jkl-icons/icons";
```
