import { CookieConsent, useCookieConsent } from "@fremtind/jkl-cookie-consent-react";
import { WithChildren } from "@fremtind/jkl-core";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, Suspense } from "react";
import { MixpanelBackend, useAnalytics } from "../../analytics";

export const Cookies: FC<WithChildren> = ({ children }) => {
    const { openConsentModalWithSettings } = useCookieConsent();
    const analytics = useAnalytics();

    const data = useStaticQuery<{ package: { version: string } }>(graphql`
        query {
            package {
                version
            }
        }
    `);

    return (
        <Suspense>
            <button type="button" className="jkl-portal-cookie-consent jkl-link" onClick={openConsentModalWithSettings}>
                {children}
            </button>
            <CookieConsent
                blocking
                onAccept={async (consentValue) => {
                    if (!process.env.GATSBY_MIXPANEL_PROJECT_ID) {
                        return;
                    }

                    const mixpanel = new MixpanelBackend({
                        trackingId: process.env.GATSBY_MIXPANEL_PROJECT_ID,
                    });

                    await analytics.init(mixpanel, {
                        appName: "gatsby",
                        environment: process.env.PREVIEW_PATH ? "preview" : process.env.NODE_ENV,
                        version: data.package.version,
                    });

                    const hasOptedIn = await analytics.hasOptedInTracking();
                    if (consentValue.statistics === "accepted" && !hasOptedIn) {
                        await analytics.optInTracking();
                    } else if (consentValue.statistics === "denied" && hasOptedIn) {
                        await analytics.optOutTracking();
                    }
                }}
            />
        </Suspense>
    );
};
