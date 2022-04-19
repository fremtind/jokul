import React, { createContext } from "react";
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";

export const a11yContext = createContext<ReturnType<typeof useBrowserPreferences>>({
    prefersReducedMotion: false,
    prefersColorScheme: "light",
    forcedColors: false,
});

export const A11yContextProvider: React.FC = ({ children }) => {
    const { prefersColorScheme, prefersReducedMotion, forcedColors } = useBrowserPreferences();

    return (
        <a11yContext.Provider value={{ prefersReducedMotion, prefersColorScheme, forcedColors }}>
            {children}
        </a11yContext.Provider>
    );
};
