# [`@fremtind/jkl-scaffold-react`](https://jokul.fremtind.no/komponenter/scaffold)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/scaffold).

## Installasjon

**Tips:** [stilpakken](../scaffold/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-scaffold-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Scaffold } from "@fremtind/jkl-scaffold-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-scaffold/scaffold.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-scaffold/scaffold";
```
