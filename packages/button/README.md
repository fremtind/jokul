# [`@fremtind/jkl-button`](https://jokul.fremtind.no/komponenter/buttons)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/buttons).

## Installasjon

**Tips:** om du bruker [React-pakken](../button-react/) trenger du ikke installere denne pakken direkte.

1. `npm i @fremtind/jkl-button`.
2. Importér stil-pakken i prosjektet ditt.

```js
// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-button/button.min.css";

// Button bruker loader internt for å vise lasteindikator i knappen.
import "@fremtind/jkl-loader/loader.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-loader/loader";
```
