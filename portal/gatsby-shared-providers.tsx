import { CookieConsentProvider } from "@fremtind/jkl-cookie-consent-react";
import { WithChildren } from "@fremtind/jkl-core";
import { KBarProvider } from "kbar";
import React, { FC } from "react";
import { A11yContextProvider } from "./src/a11yContext";
import { AnalyticsContextProvider } from "./src/analytics";
import { FSMenuContextProvider } from "./src/fullscreenMenuContext";
import { LocationContextProvider } from "./src/layout/locationContext";

export const SharedProviders: FC<WithChildren> = ({ children }) => {
    return (
        <CookieConsentProvider statistics>
            <AnalyticsContextProvider>
                <KBarProvider actions={[]}>
                    <A11yContextProvider>
                        <LocationContextProvider>
                            <FSMenuContextProvider>
                                {children}
                            </FSMenuContextProvider>
                        </LocationContextProvider>
                    </A11yContextProvider>
                </KBarProvider>
            </AnalyticsContextProvider>
        </CookieConsentProvider>
    );
};
