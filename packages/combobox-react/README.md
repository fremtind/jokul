# [`@fremtind/jkl-combobox-react`](https://jokul.fremtind.no/komponenter/combobox)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/combobox).

## Installasjon

**Tips:** [stilpakken](../combobox/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-combobox-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Combobox } from "@fremtind/jkl-combobox-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-combobox/combobox.min.css";
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
import "@fremtind/jkl-tag/tag.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-combobox/combobox";
@use "@fremtind/jkl-icons/icons";
@use "@fremtind/jkl-input-group/input-group";
@use "@fremtind/jkl-tag/tag";
@use "@fremtind/jkl-icon-button/icon-button";
```
