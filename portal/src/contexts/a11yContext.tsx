import React, { createContext } from "react";
import { useReducedMotion } from "framer-motion";

interface ThemeContext {
    prefersReducedMotion: boolean;
}

export const a11yContext = createContext<ThemeContext>({ prefersReducedMotion: false });

export const A11yContextProvider: React.FC = ({ children }) => {
    const prefersReducedMotion = useReducedMotion();

    return <a11yContext.Provider value={{ prefersReducedMotion }}>{children}</a11yContext.Provider>;
};
