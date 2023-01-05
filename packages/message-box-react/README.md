# [`@fremtind/jkl-message-box-react`](https://jokul.fremtind.no/komponenter/messagebox)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/messagebox).

## Installasjon

**Tips:** [stilpakken](../message-box/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-message-box-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InfoMessageBox } from "@fremtind/jkl-message-box-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-message-box/message-box.min.css";
// Komponenten trenger stilarket til ikonpakka for å vises riktig
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-message-box/message-box";
// Komponenten trenger stilarket til ikonpakka for å vises riktig
@use "@fremtind/jkl-icons/icons.min.css";
```
