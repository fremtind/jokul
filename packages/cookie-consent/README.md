# [`@fremtind/jkl-cookie-consent`](https://jokul.fremtind.no/komponenter/cookieconsent)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/cookieconsent).

## Installasjon

**Tips:** om du bruker [React-pakken](../cookie-consent-react/) trenger du ikke installere denne pakken direkte.

1. `npm i @fremtind/jkl-cookie-consent`.
2. Importér stil-pakken i prosjektet ditt.

```js
// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";

// CookieConsent bruker flere andre komponenter og trenger stilarkene deres for å fungere.
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-list/list.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-cookie-consent/cookie-consent";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-list/list";
```
