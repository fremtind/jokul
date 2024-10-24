import type { WithChildren } from '@fremtind/jkl-core';
import { createContext, useContext, type FC } from 'react';
import React from 'react';
import { Analytics } from './analytics';

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
