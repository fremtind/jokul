# [`@fremtind/jkl-expand-button-react`](https://jokul.fremtind.no/komponenter/expandbutton)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/expandbutton).

## Installasjon

**Tips:** [stilpakken](../expand-button/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-expand-button-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { ExpandButton } from "@fremtind/jkl-expand-button-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-expand-button/expand-button.min.css";

// Ekspanderknappen bruker icons-pakka for å animere pila
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-expand-button/expand-button";
@use "@fremtind/jkl-icons/icons";
```
