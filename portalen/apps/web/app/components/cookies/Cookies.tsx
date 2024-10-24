import {
    CookieConsent,
    useCookieConsent,
} from '@fremtind/jkl-cookie-consent-react';
import { type WithChildren } from '@fremtind/jkl-core';
import React, { type FC, Suspense, useState, useEffect } from 'react';
import { useAnalytics, MixpanelBackend } from '~/analytics';
import { userPreferencesCookie } from '~/cookies';

export const Cookies: FC<WithChildren> = ({ children }) => {
    const { openConsentModalWithSettings } = useCookieConsent();
    const analytics = useAnalytics();

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <Suspense>
            <button
                type="button"
                className="jkl-portal-cookie-consent jkl-link"
                onClick={openConsentModalWithSettings}
            >
                {children}
            </button>
            <CookieConsent
                blocking
                onAccept={async (consentValue) => {
                    if (
                        consentValue.functional === 'denied' &&
                        userPreferencesCookie.exists()
                    ) {
                        userPreferencesCookie.clear();
                    }

                    if (!(window as any)?.ENV?.MIXPANEL_PROJECT_ID) {
                        return;
                    }
                    await analytics.init(
                        new MixpanelBackend({
                            trackingId: (window as any).ENV.MIXPANEL_PROJECT_ID,
                        })
                    );
                    const hasOptedIn = await analytics.hasOptedInTracking();
                    if (consentValue.statistics === 'accepted' && !hasOptedIn) {
                        analytics.optInTracking();
                    } else if (
                        consentValue.statistics === 'denied' &&
                        hasOptedIn
                    ) {
                        analytics.optOutTracking();
                    }
                }}
            />
        </Suspense>
    );
};
