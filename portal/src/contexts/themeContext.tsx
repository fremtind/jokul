import React, { useState, ReactNode, createContext } from "react";

interface ThemeContext {
    theme?: string;
    toggleTheme: VoidFunction;
}
export const THEMES = {
    THEME_DARK: "dark",
    THEME_LIGHT: "light",
};
export const themeContext = createContext<ThemeContext>({ toggleTheme: () => null });

interface Props {
    children: ReactNode;
}
export function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState(THEMES.THEME_LIGHT);
    const toggleTheme = () => setTheme(theme === THEMES.THEME_DARK ? THEMES.THEME_LIGHT : THEMES.THEME_DARK);

    return <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>;
}
