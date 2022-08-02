import { WithChildren } from "@fremtind/jkl-core";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { AnimatePresence } from "framer-motion";
import { HeadProps } from "gatsby";
import React, { useEffect, useState } from "react";
import { Header, Sidebar } from "..";
import { useLocation } from "../../contexts/locationContext";
import { PortalFooter } from "../portal-footer";
import { Seo } from "../seo";
import { FormatProvider } from "../Typography";
import { ThemeBG } from "./components";
import "./Layout.scss";

interface Props extends WithChildren {
    location: Location;
    pageContext: {
        title?: string;
    };
}

export const Head: React.FC<HeadProps<{ mdx: { frontmatter: { title: string } } }, { title: string }>> = ({
    pageContext,
    data: {
        mdx: { frontmatter },
    },
}) => <Seo title={frontmatter.title || pageContext.title} />;

export const Layout: React.FC<Props> = ({ children, location, pageContext }) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { setLocation, isFrontPage, currentSection } = useLocation();
    const screen = useScreen();

    useEffect(() => setLocation(location), [location, setLocation]);

    const pageTitle = pageContext.title;
    const isGettingStarted = currentSection === "kom-i-gang"; // Disse sidene overstyrer tittel
    const shouldShowSidebar =
        !isFrontPage && (pageTitle || isGettingStarted) && !(screen.isSmallDevice || screen.isMediumDevice);

    return (
        <div
            className="jkl jkl-portal"
            data-test-mode={hasMounted && window.location.search === "?mode=e2e" ? "e2e" : undefined}
        >
            <ThemeBG />
            <Header className="jkl-portal__header" />
            <AnimatePresence>{shouldShowSidebar && <Sidebar className="jkl-portal__sidebar" />}</AnimatePresence>
            <FormatProvider>
                <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
            </FormatProvider>
            <PortalFooter className="jkl-portal__footer" />
        </div>
    );
};

export default Layout;
