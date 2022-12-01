# `@fremtind/jkl-analytics-react`

## Installasjon

1. `npm i @fremtind/jkl-analytics-react`.
2. Bruk `Analytics` sammen med en backend, for eksempel `@fremtind/jkl-analytics-mixpanel`.

```js
import { Analytics } from "@fremtind/jkl-analytics";
import { MixpanelBackend } from "@fremtind/jkl-analytics-mixpanel";
import { AnalyticsContextProvider } from "@fremtind/jkl-analytics-react";
import { CookieConsentProvider } from "@fremtind/jkl-cookie-consent-react";

const analytics = new Analytics(
    new MixpanelBackend({
        projectId: process.env.MIXPANEL_PROJECT_ID,
    }),
);

export const Providers: FC<WithChildren> = ({ children }) => {
    return (
        <CookieConsentProvider statistics>
            <AnalyticsContextProvider>{children}</AnalyticsContextProvider>
        </CookieConsentProvider>
    );
};

// Meanwhile...

import { CookieConsent } from "@fremtind/jkl-cookie-consent-react";

export const Cookies: FC = () => {
    const analytics = useAnalytics();

    return (
        <CookieConsent
            blocking
            onAccept={async (consentValue) => {
                await analytics.init(mixpanel, {
                    appName: "my-app",
                    environment: "production",
                    version: "1.0.0",
                });

                const hasOptedIn = await analytics.hasOptedInTracking();

                if (consentValue.statistics === "accepted" && !hasOptedIn) {
                    await analytics.optInTracking();
                } else if (consentValue.statistics === "denied" && hasOptedIn) {
                    await analytics.optOutTracking();
                }
            }}
        />
    );
};
```
