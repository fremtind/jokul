# [`@fremtind/jkl-expandable-react`](https://jokul.fremtind.no/komponenter/expandable)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/expandable).

## Installasjon

**Tips:** [stilpakken](../expandable/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-expandable-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Expandable, Expander } from "@fremtind/jkl-expandable-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-expandable/expandable.min.css";

// Ekspanderknappen bruker icons-pakka for å animere pila
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-expandable/expandable";
@use "@fremtind/jkl-icons/icons";
```
