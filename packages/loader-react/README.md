# [`@fremtind/jkl-loader-react`](https://jokul.fremtind.no/komponenter/loader)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/loader).

## Installasjon

**Tips:** [stilpakken](../loader/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-loader-react` eller `npm i @fremtind/jkl-loader-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Loader } from "@fremtind/jkl-loader-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-loader/loader.min.css";
import "@fremtind/jkl-loader/skeleton-loader.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-loader/loader";
@use "@fremtind/jkl-loader/skeleton-loader";
```
