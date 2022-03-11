import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { Footer } from "@fremtind/jkl-footer-react";
import { Feedback } from "@fremtind/jkl-feedback-react";
import { LogoStamp } from "@fremtind/jkl-logo-react";
import { FormatProvider } from "../Typography";
import { Header, Sidebar } from "..";
import { ThemeBG } from "./components";
import { useLocation } from "../../contexts/locationContext";
import "./Layout.scss";

interface Props {
    location: Location;
    pageContext: {
        title?: string;
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

    const metaDescription = site.siteMetadata.description;
    const siteTitle = site.siteMetadata.title;
    const pageTitle = pageContext.title;
    const shouldShowSidebar = !isFrontPage && pageTitle && !(screen.isSmallDevice || screen.isMediumDevice);

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
            <div className="jkl-portal-footer">
                <div className="jkl-portal-footer__feedback">
                    <Feedback
                        type="radio"
                        label="Fant du det du lette etter?"
                        options={[
                            {
                                label: "Ja",
                                value: "ja",
                                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
                            },
                            {
                                label: "Nei",
                                value: "nei",
                                textAreaLabel:
                                    "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
                            },
                        ]}
                        addOnQuestion={{
                            label: "Vil du legge til noe mer?",
                            helpLabel:
                                "Når du trykker på send vil en e-post genereres for deg. Ikke del personlige opplysninger. Vi behandler dine data i henhold til vår personvernserklæring.",
                        }}
                        successMessage={{
                            title: "Takk! Jøkul blir enda bedre med dine tilbakemeldinger.",
                            children: (
                                <>
                                    <p className="jkl-spacing-s--bottom">
                                        Spill gjerne inn på GitHub, eller delta på forum (hver tirsdag{" "}
                                        <time dateTime="14:00">kl. 14</time>)!
                                    </p>
                                    <a
                                        href="https://github.com/fremtind/jokul/discussions"
                                        className="jkl-button jkl-button--secondary"
                                    >
                                        Diskuter på GitHub
                                    </a>
                                </>
                            ),
                        }}
                        onSubmit={(feedback) => {
                            const message = `${feedback.message}
Fant du det du trengte? ${feedback.feedbackValue}
Side: ${window.location.href}`;
                            const to = "fremtind.designsystem";
                            const domain = "fremtind";
                            const mailto = `mailto:${to}@${domain}.no?subject=Tilbakemelding%20fra%20portalen&body=${encodeURIComponent(
                                message,
                            )}`;
                            window.location.href = mailto;
                        }}
                    />
                    <LogoStamp className="jkl-portal-footer__stamp" animated />
                </div>
                <Footer
                    links={[
                        { external: true, href: "https://github.com/fremtind/jokul", title: "Jøkul på GitHub" },
                        { external: true, href: "https://www.fremtind.no/personvern/", title: "Personvernserklæring" },
                        { external: true, href: "https://jobb.fremtind.no", title: "Jobb i Fremtind" },
                    ]}
                />
            </div>
        </div>
    );
};

export default Layout;
