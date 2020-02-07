import React, { ReactNode } from "react";
import { Link } from "@fremtind/jkl-typography-react";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";

import { PageTitle, HeadingLarge, HeadingMedium, HeadingSmall, HeadingXS, Paragraph } from "../Typography";
import { Header, Menu } from "..";
import "./Layout.scss";
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

<<<<<<< HEAD
/* eslint-disable */
const h1 = PageTitle;
const h2 = HeadingLarge;
const h3 = HeadingMedium;
const h4 = HeadingSmall;
const h5 = HeadingXS;
const p = Paragraph;
const ul = (props: any) => <UnorderedList {...props} />;
const li = (props: any) => <ListItem {...props} />;
const ol = (props: any) => <OrderedList {...props} />;
const a = (props: any) => <Link {...props} />;
/* eslint-enable */

const components = {
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    li,
    ol,
    a,
};

export const Layout = ({ children, isComponentPage = false, showFooter = false }: Props) => {
    const [theme, toggleDarkMode] = React.useState(getTheme());

    const toggleTheme = (showDark: boolean) => {
        if (showDark) {
            return toggleDarkMode("dark");
        }
        return toggleDarkMode("light");
    };
=======
export const ThemeContext = React.createContext<ContextProps>({ theme: THEME_LIGHT, toggleTheme: () => "" });
>>>>>>> fix(portal): convert layout to use css grid

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
