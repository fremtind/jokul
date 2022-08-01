# [`@fremtind/jkl-table-react`](https://jokul.fremtind.no/komponenter/table)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/table).

## Installasjon

**Tips:** [stilpakken](../table/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-table-react` eller `npm i @fremtind/jkl-table-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Table } from "@fremtind/jkl-table-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-table/table.min.css";

// For ekspanderbare rader må du også ha denne CSSen importert.
import "@fremtind/jkl-content-toggle/content-toggle.min.css";
import "@fremtind/jkl-expand-button/expand-button.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-table/table";
@use "@fremtind/jkl-content-toggle/content-toggle";
@use "@fremtind/jkl-expand-button/expand-button";
```
