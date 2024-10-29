import type { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext, type FC } from "react";
import { Analytics } from "./analytics";

const analytics = new Analytics();

const analyticsContext = createContext<Analytics>(analytics);

export const useAnalytics = (): Analytics => useContext(analyticsContext);

export const AnalyticsContextProvider: FC<WithChildren> = ({ children }) => {
    return (
        <analyticsContext.Provider value={analytics}>
            {children}
        </analyticsContext.Provider>
    );
};
