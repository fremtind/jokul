import React, { ReactNode } from "react";
import { Header } from "../Header/header-react/src";
import "./Layout.scss";
import { Menu } from "..";
import useTheme, { THEME_DARK, THEME_LIGHT } from "./useTheme";

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}
interface ContextProps {
    theme: string;
    toggleTheme: (checked: boolean) => void;
}

export const ThemeContext = React.createContext<ContextProps>({ theme: THEME_LIGHT, toggleTheme: () => "" });

export const Layout = ({ children }: Props) => {
    const [theme, setTheme] = useTheme();
    const toggleTheme = (isDarkTheme: boolean) => setTheme(isDarkTheme ? THEME_DARK : THEME_LIGHT);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="portal-content">
                <header className="portal-content__header">
                    <Header brand="Jøkul" title="Designsystem" />
                </header>
                <aside className="portal-content__sidebar">
                    <Menu />
                </aside>
                <main className="portal-content__main">{children}</main>
            </div>
        </ThemeContext.Provider>
    );
};

export default Layout;
