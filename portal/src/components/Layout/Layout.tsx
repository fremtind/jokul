import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Footer, Header, Menu } from "..";

import "./Layout.scss";

const getTheme = () => {
    if (typeof window !== `undefined`) {
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
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}

export const Layout = ({ children, title, header, isComponentPage = false, showFooter = true }: Props) => {
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
            document.body.classList.add("portal-dark");
        } else {
            window.localStorage.setItem("portal-theme", "light");
            document.body.classList.remove("portal-dark");
        }
    }, [theme]);

    /* eslint-disable */
    const H1 = (props: any) => <h1 className="jkl-h1" {...props} />;
    const H2 = (props: any) => <h1 className="jkl-h2" {...props} />;
    const H3 = (props: any) => <h1 className="jkl-h3" {...props} />;
    const H4 = (props: any) => <h1 className="jkl-h4" {...props} />;
    const H5 = (props: any) => <h1 className="jkl-h5" {...props} />;
    const P = (props: any) => <p className="jkl-p" {...props} />;
    const Ul = (props: any) => <ul className="jkl-list" {...props} />;
    const Li = (props: any) => <li className="jkl-list__item" {...props} />;
    /* eslint-enable */

    const components = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        p: P,
        ul: Ul,
        li: Li,
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header siteHeader={header} siteTitle={title} />
            <Menu />
            <main className={`portal-content ${isComponentPage ? "portal-content--component-page" : ""}`}>
                <MDXProvider components={components}>{children}</MDXProvider>
            </main>
            {showFooter && <Footer />}
        </ThemeContext.Provider>
    );
};

export default Layout;
