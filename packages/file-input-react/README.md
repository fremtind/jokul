# [`@fremtind/jkl-file-input-react`](https://jokul.fremtind.no/komponenter/fileinput)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/fileinput).

## Installasjon

**Tips:** [stilpakken](../file-input/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-file-input-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { FileInput } from "@fremtind/jkl-file-input-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-file-input/file-input.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
import "@fremtind/jkl-progress-bar/progress-bar.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-file-input/file-input";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-icon-button/icon-button";
@use "@fremtind/jkl-icons/icons";
@use "@fremtind/jkl-input-group/input-group";
@use "@fremtind/jkl-progress-bar/progress-bar";
```
