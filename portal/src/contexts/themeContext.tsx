import React, { useState, ReactNode, createContext } from "react";

export const THEMES = {
    THEME_DARK: "portal-theme_dark",
    THEME_LIGHT: "portal-theme_light",
};
export const themeContext = createContext({});

interface Props {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState(THEMES.THEME_LIGHT);
    const toggleTheme = () => setTheme(theme === THEMES.THEME_DARK ? THEMES.THEME_LIGHT : THEMES.THEME_DARK);

    return <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</themeContext.Provider>;
}
