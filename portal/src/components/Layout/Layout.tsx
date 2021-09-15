import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useScreen } from "@fremtind/jkl-react-hooks";

import { FormatProvider } from "../Typography";
import { Header, Sidebar, Footer } from "..";
import { ThemeBG } from "./components";
import { useLocation } from "../../contexts/locationContext";

import "./Layout.scss";

interface Props {
    location: Location;
    pageContext: {
        frontmatter?: {
            title?: string;
        };
    };
}

export const Layout: React.FC<Props> = ({ children, location, pageContext }) => {
    const { setLocation, isFrontPage, isCypress } = useLocation();
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

    if (isCypress) {
        return (
            <div className="jkl">
                <FormatProvider>{children}</FormatProvider>
            </div>
        );
    }

    const shouldShowSidebar = !isFrontPage && !(screen.isSmallDevice || screen.isMediumDevice);

    const metaDescription = site.siteMetadata.description;
    const siteTitle = site.siteMetadata.title;
    const pageTitle = pageContext.frontmatter?.title;

    return (
        <div className="jkl jkl-portal">
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
            <AnimatePresence>{shouldShowSidebar && <Sidebar />}</AnimatePresence>
            <FormatProvider>
                <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
            </FormatProvider>
            <Footer className="jkl-portal__footer" />
        </div>
    );
};

export default Layout;
