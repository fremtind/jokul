# [`@fremtind/jkl-icons-react`](https://jokul.fremtind.no/komponenter/icons)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/icons).

## Installasjon

**Tips:** [stilpakken](../icons/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-icons-react` eller `npm i @fremtind/jkl-icons-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { ArrowDown, ArrowHorizontalAnimated } from "@fremtind/jkl-icons-react";

// Importer stilark via JavaScript med CSS-loader.
// CSS for uanimerte ikoner ligger i core.
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-icons/animated-icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-core/core";
@use "@fremtind/jkl-icons/animated-icons";
```
