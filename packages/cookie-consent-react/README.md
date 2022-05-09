# [`@forbrukerradet/jkl-cookie-consent-react`](https://jokul.fremtind.no/komponenter/cookie-consent)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/cokie-consent).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-cookie-consent-react` eller `npm i @forbrukerradet/jkl-cookie-consent-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { CookieConsentProvider, CookieConsent, useCookieConsent } from "@forbrukerradet/jkl-cookie-consent-react";
import "@forbrukerradet/jkl-cookie-consent/cookie-consent.min.css";
import "@forbrukerradet/jkl-button/button.min.css";
import "@forbrukerradet/jkl-list/list.min.css";
```

### Bruk

Komponentene tar følgende props:

`CookieConsentProvider`:

-   `marketing`: Krav om cookies for markedsføring
-   `functional`: Krav om funksjonelle cookies
-   `statistics`: Krav om cookies for statistikk
-   `cookieAdapter`: En funksjon som gjør oppslag mot cookies, for å lete etter andre cookies som kan bestemme et consent

`CookieConsent`:

-   `blocking`: Betegner en blokkerende modal, som krever en aktiv handling
-   `onAccept`: Callback når et consent er håndtert. Første argument er consentet.

Enkel bruk kan se slik ut:

```jsx
<CookieConsentProvider functional marketing statistics>
    <Content />
    <CookieConsent blocking />
</CookieConsentProvider>
```
