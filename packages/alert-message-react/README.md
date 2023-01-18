# [`@fremtind/jkl-alert-message-react`](https://jokul.fremtind.no/komponenter/alertmessage)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/alertmessage).

## Installasjon

**Tips:** [stilpakken](../alert-message/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-alert-message-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { InfoAlertMessage } from "@fremtind/jkl-alert-message-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-alert-message/alert-message.min.css";
// AlertMessage bruker ikonpakken og må ha stilene dens
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-alert-message/alert-message";
// AlertMessage bruker ikonpakken og må ha stilene dens
@use "@fremtind/jkl-icons/icons";
```
