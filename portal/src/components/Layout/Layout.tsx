import React, { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useScreen } from "@fremtind/jkl-react-hooks";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
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

export const Layout: React.FC<Props> = ({ children, location, pathContext }) => {
    const { setLocation, isFrontPage, isCypress } = useLocation();
    useEffect(() => setLocation(location), [location, setLocation]);

    const screen = useScreen();
    const shouldShowSidebar = !isFrontPage && !(screen.isSmallDevice || screen.isMediumDevice);

    const PageTitle = `${
        pathContext?.frontmatter?.title ? `${pathContext.frontmatter.title} - ` : ""
    }Jøkul designsystem`;
    const wrapperRef = useRef<HTMLDivElement>(null);

    if (isCypress) {
        return (
            <div className="jkl">
                <FormatProvider>{children}</FormatProvider>
            </div>
        );
    }

    return (
        <div className="jkl jkl-portal" ref={wrapperRef}>
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
