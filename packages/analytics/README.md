# `@fremtind/jkl-analytics`

## Installasjon

**Tips:** [stilpakken](../analytics/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-analytics`.
2. Bruk `Analytics` sammen med en `backend`.

```js
import { Analytics } from "@fremtind/jkl-analytics";
import { MixpanelBackend } from "@fremtind/jkl-analytics/backends/mixpanel";

const analytics = new Analytics(
    new MixpanelBackend({
        projectId: process.env.MIXPANEL_PROJECT_ID,
    }),
);
```

### Bruk i React

1. Lag en [Context](https://reactjs.org/docs/context.html).
2. Bruk contextens `Provider` så langt opp i appen din som gir mening, men _under_ `CookieConsentProvider`.
3. Bruk contexten ute i komponentene for å få tilgang til `analytics`-objektet.
