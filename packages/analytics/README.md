# `@fremtind/jkl-analytics`

Dette er en pakke som fungerer som et lag mellom din kode og SDKet til en analytics-løsning.

`Analytics` fungerer som grensesnittet mot én eller flere _backends_.

En _backend_ er en klasse som implementerer et delt interface. Klassen oversetter generelle metoder til SDK- eller API-spesifike. På den måten unngår du for tette koblinger mot en enkelt leverandør.

-   Se [`@fremtind/jkl-analytics-mixpanel`](../analytics-mixpanel/) for et eksempel på en backend.
-   Se [`@fremtind/jkl-analytics-react`](../analytics-react/) for en ferdig context, hook, og eksempler på bruk.

## Installasjon

1. `npm i @fremtind/jkl-analytics`.
2. Bruk `Analytics` sammen med en backend, for eksempel fra [`@fremtind/jkl-analytics-mixpanel`](../analytics-mixpanel/).

```js
import { Analytics } from "@fremtind/jkl-analytics";
import { MixpanelBackend } from "@fremtind/jkl-analytics-mixpanel";

const analytics = new Analytics();

const mixpanelBackend = new MixpanelBackend({
    trackingId: process.env.MIXPANEL_PROJECT_ID,
});

await analytics.init(mixpanelBackend);

await analytics.track({
    eventName: "Sidevisning",
    properties: {
        path: window.location.pathname,
    },
    callback: ({ backend, status, message }) => {
        if (backend === mixpanelBackend.name && status >= 400) {
            console.error(message);
        }
    },
});
```
