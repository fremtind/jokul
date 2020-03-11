import React, { ReactNode, useContext, useLayoutEffect, useRef } from "react";
import classNames from "classnames";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
import { themeContext } from "../../contexts/themeContext";
import { useLocation } from "../../contexts/locationContext";

import "./Layout.scss";
import Helmet from "react-helmet";

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    isFrontpage?: boolean;
    showFooter?: boolean;
    location: Location;
}

export const Layout = ({ children, title, isFrontpage, location }: Props) => {
    const { setLocation } = useLocation();
    setLocation(location);

    const PageTitle = `${title ? `${title} - ` : ""}Jøkul designsystem`;
    const mainClassName = classNames({
        "jkl-portal__main": true,
        "jkl-portal__main--frontpage": isFrontpage,
    });
    const { theme } = useContext(themeContext);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        wrapperRef.current?.setAttribute("data-theme", theme || "");
    }, [theme, wrapperRef]);
    return (
        <div className="jkl-portal" data-theme={theme} ref={wrapperRef}>
            <Helmet>
                <html lang="no-nb" />
                <title>{PageTitle}</title>
            </Helmet>
            <ThemeBG />
            <Header />
            <Sidebar location={location} />
            <main className={mainClassName}>
                <FormatProvider>{children}</FormatProvider>
            </main>
            <Footer className="jkl-portal__footer" />
        </div>
    );
};
