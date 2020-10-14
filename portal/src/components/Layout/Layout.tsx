import React, { useLayoutEffect, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useScreen } from "@fremtind/jkl-react-hooks";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
import { useTheme } from "../../contexts/themeContext";
import { useLocation } from "../../contexts/locationContext";

import "./Layout.scss";

interface Props {
    location: Location;
    pathContext?: {
        frontmatter?: {
            title?: string;
        };
    };
}

export const Layout: React.FC<Props> = ({ children, location, pathContext, ...rest }) => {
    const { setLocation, isFrontPage, isCypress } = useLocation();
    useEffect(() => setLocation(location), [location, setLocation]);

    const screen = useScreen();
    const shouldShowSidebar = !isFrontPage && !(screen.isSmallDevice || screen.isMediumDevice);

    const PageTitle = `${
        pathContext?.frontmatter?.title ? `${pathContext.frontmatter.title} - ` : ""
    }Jøkul designsystem`;
    const { theme } = useTheme();
    const wrapperRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        wrapperRef.current?.setAttribute("data-theme", theme || "");
    }, [theme, wrapperRef]);

    if (isCypress) {
        return <FormatProvider>{children}</FormatProvider>;
    }

    return (
        <div className="jkl-portal" data-theme={theme} ref={wrapperRef}>
            <Helmet>
                <html lang="no" />
                <title>{PageTitle}</title>
            </Helmet>
            <ThemeBG />
            <Header className="jkl-portal__header" />
            <AnimatePresence>{shouldShowSidebar && <Sidebar />}</AnimatePresence>
            <FormatProvider>
                <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
            </FormatProvider>
            <Footer className="jkl-portal__footer" />
        </div>
    );
};

export default Layout;
