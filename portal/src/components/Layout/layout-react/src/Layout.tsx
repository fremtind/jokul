import React, { ReactNode } from "react";
import { Header } from "../../../Header/header-react/src";
import useTheme, { THEME_DARK, THEME_LIGHT } from "../../useTheme";
import { Sidebar } from "../../../Sidebar/sidebar-react/src";
import { Menu } from "../../..";
import "../../layout/Layout.scss";

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
                <Header />
                <Sidebar className="portal-content__sidebar">
                    <Menu />
                </Sidebar>
                <main className="portal-content__main">{children}</main>
            </div>
        </ThemeContext.Provider>
    );
};
