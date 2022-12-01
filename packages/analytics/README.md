# `@fremtind/jkl-analytics`

## Installasjon

1. `npm i @fremtind/jkl-analytics`.
2. Bruk `Analytics` sammen med en backend, for eksempel fra `@fremtind/jkl-analytics-mixpanel`.

```js
import { Analytics } from "@fremtind/jkl-analytics";
import { MixpanelBackend } from "@fremtind/jkl-analytics-mixpanel";

const analytics = new Analytics(
    new MixpanelBackend({
        projectId: process.env.MIXPANEL_PROJECT_ID,
    }),
);
```
