# [`@fremtind/jkl-cookie-consent-react`](https://jokul.fremtind.no/komponenter/cookieconsent)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/cookieconsent).

## Installasjon

**Tips:** [stilpakken](../cookie-consent/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-cookie-consent-react` eller `npm i @fremtind/jkl-cookie-consent-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "@fremtind/jkl-cookie-consent-react";

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
