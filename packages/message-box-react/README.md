# [`@fremtind/jkl-message-box-react`](https://jokul.fremtind.no/komponenter/messagebox)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/messagebox).

## Installasjon

**Tips:** [stilpakken](../message-box/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-message-box-react` eller `npm i @fremtind/jkl-message-box-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InfoMessageBox } from "@fremtind/jkl-message-box-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-message-box/message-box.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-message-box/message-box";
```
