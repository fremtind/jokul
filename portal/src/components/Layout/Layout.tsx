import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
import { useTheme } from "../../contexts/themeContext";
import { useLocation } from "../../contexts/locationContext";

import "./Layout.scss";
import Helmet from "react-helmet";

interface Props {
    title?: string;
    isFrontpage?: boolean;
    location: Location;
}

export const Layout: React.FC<Props> = ({ children, title, location, isFrontpage }) => {
    const { setLocation } = useLocation();
    setLocation(location);
    const mainClassName = classNames({
        "jkl-portal__main": true,
        "jkl-portal__main--frontpage": isFrontpage,
    });

    const PageTitle = `${title ? `${title} - ` : ""}Jøkul designsystem`;
    const { theme } = useTheme();
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
            <Header className="jkl-portal__header" />
            <Sidebar />
            <main className={mainClassName}>
                <FormatProvider>{children}</FormatProvider>
            </main>
            <Footer className="jkl-portal__footer" />
        </div>
    );
};
