import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const THEME_DARK = "portal-theme-dark";
export const THEME_LIGHT = "portal-theme-light";

export const THEMES = {
    THEME_DARK,
    THEME_LIGHT,
};

const getTheme = () => {
    if (typeof window !== `undefined`) {
        return window.localStorage.getItem("portal-theme") || THEME_LIGHT;
    }

    return THEME_LIGHT;
};

export const useTheme = (): [string, Dispatch<SetStateAction<string>>] => {
    const [theme, setTheme] = useState<string>(getTheme());

    useEffect(() => {
        window.localStorage.setItem("portal-theme", theme);
        document.body.classList.forEach((c) => {
            if (Object.values(THEMES).includes(c)) {
                document.body.classList.remove(c);
            }
        });
        document.body.classList.add(theme);
    }, [theme]);

    return [theme, setTheme];
};

export default useTheme;
