# [`@fremtind/jkl-logo-react`](https://jokul.fremtind.no/komponenter/logo)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/logo).

## Installasjon

**Tips:** [stilpakken](../logo/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-logo-react` eller `npm i @fremtind/jkl-logo-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Logo } from "@fremtind/jkl-logo-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-logo/logo.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-logo/logo";
```
