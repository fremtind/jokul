import React, { useState, ReactNode, createContext, useLayoutEffect, useContext } from "react";
import { getCookie, setCookie } from "../utils";

interface ThemeContext {
    theme?: string;
    toggleTheme: VoidFunction;
}
export const THEMES = {
    THEME_DARK: "dark",
    THEME_LIGHT: "light",
};
const themeContext = createContext<ThemeContext>({ toggleTheme: () => null });

export function useTheme() {
    return useContext(themeContext);
}

export const useDarkMode = () => {
    const { theme } = useTheme();
    return theme === THEMES.THEME_DARK;
};

interface Props {
    children: ReactNode;
}
export function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState(THEMES.THEME_LIGHT);

    useLayoutEffect(() => {
        if (document) {
            const newTheme = getCookie("theme") || theme;
            setTheme(newTheme);
            document && setCookie("theme", newTheme, 60 * 60 * 24 * 365);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === THEMES.THEME_DARK ? THEMES.THEME_LIGHT : THEMES.THEME_DARK;
        setTheme(newTheme);
        document && setCookie("theme", newTheme, 60 * 60 * 24 * 365);
    };

    return <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>;
}
