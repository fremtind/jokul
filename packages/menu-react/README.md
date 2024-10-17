# [`@fremtind/jkl-menu-react`](https://jokul.fremtind.no/komponenter/menu)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/menu).

## Installasjon

**Tips:** [stilpakken](../menu/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-menu-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Menu } from "@fremtind/jkl-menu-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-menu/menu.min.css";
import "@fremtind/jkl-icons/icons.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-menu/menu";
@use "@fremtind/jkl-icons/icons";
```
