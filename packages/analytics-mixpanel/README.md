# `@fremtind/jkl-analytics-mixpanel`

## Installasjon

1. `npm i @fremtind/jkl-analytics-mixpanel`.
2. Bruk `Mixpanel` som backend for `Analytics` fra `@fremtind/jkl-analytics`.

```js
import { Analytics } from "@fremtind/jkl-analytics";
import { Mixpanel } from "@fremtind/jkl-analytics-mixpanel";

const analytics = new Analytics(
    new MixpanelBackend({
        projectId: process.env.MIXPANEL_PROJECT_ID,
    }),
);
```
