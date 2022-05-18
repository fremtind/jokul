import { WithChildren } from "@fremtind/jkl-core";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { AnimatePresence } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Sidebar } from "..";
import { useLocation } from "../../contexts/locationContext";
import { PortalFooter } from "../portal-footer";
import { FormatProvider } from "../Typography";
import { ThemeBG } from "./components";
import "./Layout.scss";

interface Props extends WithChildren {
    location: Location;
    pageContext: {
        title?: string;
    };
}

export const Layout: React.FC<Props> = ({ children, location, pageContext }) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { setLocation, isFrontPage, currentSection } = useLocation();
    const screen = useScreen();

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );

    useEffect(() => setLocation(location), [location, setLocation]);

    const metaDescription = site.siteMetadata.description;
    const siteTitle = site.siteMetadata.title;
    const pageTitle = pageContext.title;
    const isGettingStarted = currentSection === "kom-i-gang"; // Disse sidene overstyrer tittel
    const shouldShowSidebar =
        !isFrontPage && (pageTitle || isGettingStarted) && !(screen.isSmallDevice || screen.isMediumDevice);

    return (
        <div
            className="jkl jkl-portal"
            data-test-mode={hasMounted && window.location.search === "?mode=e2e" ? "e2e" : undefined}
        >
            <Helmet
                htmlAttributes={{
                    lang: "no",
                }}
                title={pageTitle || siteTitle}
                titleTemplate={pageTitle && siteTitle ? `%s | ${siteTitle}` : undefined}
                meta={[
                    {
                        name: `description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:title`,
                        content: pageTitle,
                    },
                    {
                        property: `og:description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:title`,
                        content: pageTitle,
                    },
                    {
                        name: `twitter:description`,
                        content: metaDescription,
                    },
                ]}
            />
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
