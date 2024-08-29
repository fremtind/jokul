# [`@fremtind/jkl-system-message-react`](https://jokul.fremtind.no/komponenter/systemmessage)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/systemmessage).

## Installasjon

**Tips:** [stilpakken](../system-message/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-system-message-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InfoSystemMessage } from "@fremtind/jkl-system-message-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-system-message/system-message.min.css";
// SystemMessage bruker ikonpakken og må ha stilene dens
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-system-message/system-message";
// SystemMessage bruker ikonpakken og må ha stilene dens
@use "@fremtind/jkl-icons/icons";
```
