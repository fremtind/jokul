# [`@fremtind/jkl-feedback`](https://jokul.fremtind.no/komponenter/feedback)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/feedback).

## Installasjon

**Tips:** om du bruker [React-pakken](../feedback-react/) trenger du ikke installere denne pakken direkte.

1. `yarn add @fremtind/jkl-feedback` eller `npm i @fremtind/jkl-feedback`.
2. Importér stil-pakken i prosjektet ditt.

```js
// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-feedback/feedback.min.css";

// Feedback bruker flere andre komponenter og trenger stilarkene deres for å fungere.
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-feedback/feedback";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-message-box/message-box";
@use "@fremtind/jkl-radio-button/radio-button";
@use "@fremtind/jkl-text-input/text-input";
```
