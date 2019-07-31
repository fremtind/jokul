/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { Menu } from "../Menu/Menu";

import "./Layout.scss";

const getTheme = () => {
    if (typeof window !== undefined) {
        return window.localStorage.getItem("portal-theme") || "light";
    }
    return "light";
};

interface ContextProps {
    theme: string;
    toggleTheme: (checked: boolean) => void;
}

export const ThemeContext = React.createContext<ContextProps>({ theme: "light", toggleTheme: () => {} });

interface Props {
    children: ReactNode;
    isComponent?: boolean;
}

export const Layout = ({ children, isComponent = false }: Props) => {
    const [theme, toggleDarkMode] = React.useState(getTheme());

    const toggleTheme = (showDark: boolean) => {
        if (showDark) {
            return toggleDarkMode("dark");
        }
        return toggleDarkMode("light");
    };

    React.useEffect(() => {
        if (theme === "dark") {
            window.localStorage.setItem("portal-theme", "dark");
            document.body.className = "portal-dark";
        } else {
            window.localStorage.setItem("portal-theme", "light");
            document.body.className = "";
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header siteTitle="Jøkul" />
            <Menu />
            <main className={`portal-content ${isComponent ? "portal-content--component" : ""}`}>{children}</main>
        </ThemeContext.Provider>
    );
};

export default Layout;
