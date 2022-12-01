# `@fremtind/jkl-analytics-react`

Dette er React-wrapper rundt [`@fremtind/jkl-analytics`](../analytics/).

## Installasjon

1. `npm i @fremtind/jkl-analytics-react`.
2. Bruk sammen med en backend, for eksempel [`@fremtind/jkl-analytics-mixpanel`](../analytics-mixpanel/).

```jsx
import { AnalyticsContextProvider } from "@fremtind/jkl-analytics-react";
import { CookieConsentProvider } from "@fremtind/jkl-cookie-consent-react";

export const Providers: FC<WithChildren> = ({ children }) => {
    return (
        <CookieConsentProvider statistics>
            <AnalyticsContextProvider>{children}</AnalyticsContextProvider>
        </CookieConsentProvider>
    );
};
```

```jsx
import { MixpanelBackend } from "@fremtind/jkl-analytics-mixpanel";
import { useAnalytics } from "@fremtind/jkl-analytics-react";
import { CookieConsent } from "@fremtind/jkl-cookie-consent-react";

const mixpanel = new MixpanelBackend({
    projectId: process.env.MIXPANEL_PROJECT_ID,
});

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
