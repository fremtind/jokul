# [`@fremtind/jkl-card-react`](https://jokul.fremtind.no/komponenter/card)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/card).

## Installasjon

**Tips:** [stilpakken](../card/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-card-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { NavCard } from "@fremtind/jkl-card-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-card/card.min.css";

// Kortene bruker flere andre komponenter avhengig av konfigurasjon. Du må også laste inn disse stilarkene.
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-image/image.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-tag/tag.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-card/card";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-checkbox/checkbox";
@use "@fremtind/jkl-image/image";
@use "@fremtind/jkl-select/select";
@use "@fremtind/jkl-tag/tag";
```
