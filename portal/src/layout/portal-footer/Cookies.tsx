import { CookieConsent, useCookieConsent } from "@fremtind/jkl-cookie-consent-react";
import { WithChildren } from "@fremtind/jkl-core";
import React, { FC, Suspense } from "react";
import { useAnalytics } from "../../analytics";

export const Cookies: FC<WithChildren> = ({ children }) => {
    const { openConsentModalWithSettings } = useCookieConsent();
    const analytics = useAnalytics();

    return (
        <Suspense>
            <button type="button" className="jkl-portal-cookie-consent jkl-link" onClick={openConsentModalWithSettings}>
                {children}
            </button>
            <CookieConsent
                blocking
                onAccept={(consentValue) => {
                    analytics.init();
                    if (consentValue.statistics === "accepted" && !analytics.hasOptedInTracking()) {
                        analytics.optInTracking();
                    } else if (!analytics.hasOptedOutTracking()) {
                        analytics.optOutTracking();
                    }
                }}
            />
        </Suspense>
    );
};
