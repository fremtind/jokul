import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";

import { useScreen } from "@fremtind/jkl-react-hooks";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
import { useTheme } from "../../contexts/themeContext";
import { useLocation } from "../../contexts/locationContext";

import "./Layout.scss";
import Helmet from "react-helmet";

interface Props {
    title?: string;
    location: Location;
}

export const Layout: React.FC<Props> = ({ children, title, location }) => {
    const { setLocation, isFrontPage } = useLocation();
    setLocation(location);
    const mainClassName = classNames({
        "jkl-portal__main": true,
        "jkl-portal__main--frontpage": isFrontPage,
        "jkl-portal__main--no-margin": location.pathname === "/profil/bildebruk",
    });

    const screen = useScreen();
    const shouldShowSidebar = !(screen.isSmallDevice || screen.isMediumDevice);

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
            {shouldShowSidebar && <Sidebar className="jkl-portal__sidebar" />}
            <main id="innhold" className={mainClassName}>
                <FormatProvider>{children}</FormatProvider>
            </main>
            <Footer className="jkl-portal__footer" />
        </div>
    );
};

export default Layout;
