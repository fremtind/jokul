# [`@fremtind/jkl-text-input-react`](https://jokul.fremtind.no/komponenter/textinput)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/textinput).

## Installasjon

**Tips:** [stilpakken](../text-input/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-text-input-react`.
2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { TextInput, TextAera } from "@fremtind/jkl-text-input-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-text-input/text-input.min.css";

// For handlingsknapper må du også ha denne CSSen importert.
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-text-input/text-input";
@use "@fremtind/jkl-icon-button/icon-button";
```
