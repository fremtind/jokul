# [`@fremtind/jkl-tag-react`](https://jokul.fremtind.no/komponenter/tag)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/tag).

## Installasjon

**Tips:** [stilpakken](../tag/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-tag-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Tag } from "@fremtind/jkl-tag-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-tag/tag.min.css";

// Lukkbar Tag bruker IconButton internt, så du må også laste inn stilarket derfra.
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-tag/tag";
@use "@fremtind/jkl-icon-button/icon-button";
```
