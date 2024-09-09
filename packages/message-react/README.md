# [`@fremtind/jkl-message-react`](https://jokul.fremtind.no/komponenter/message)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/message).

## Installasjon

**Tips:** [stilpakken](../message/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-message-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InfoMessage } from "@fremtind/jkl-message-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-message/message.min.css";
// Komponenten trenger stilarket til ikonpakka for å vises riktig
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-message/message";
// Komponenten trenger stilarket til ikonpakka for å vises riktig
@use "@fremtind/jkl-icons/icons";
```
