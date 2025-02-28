import { useCookieConsent } from "@fremtind/jkl-cookie-consent-react";
import type { WithChildren } from "@fremtind/jkl-core";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { usePreviousValue } from "@fremtind/jkl-react-hooks/src";
import { AnimatePresence } from "framer-motion";
import type { HeadProps } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { useAnalytics, EventName } from "../analytics";
import { Seo } from "../components/seo";
import { FormatProvider } from "./FormatProvider";
import { Header } from "./header";
import { KBar } from "./KBar";
import { useLocation } from "./locationContext";
import { PortalFooter } from "./portal-footer";
import { Sidebar } from "./sidebar";
import "./Layout.scss";

interface Props extends WithChildren {
    location: Location;
    pageContext: {
        title?: string;
    };
}

export const Head: React.FC<
    HeadProps<{ mdx: { frontmatter: { title: string } } }, { title: string }>
> = ({
    pageContext,
    data: {
        mdx: { frontmatter },
    },
}) => <Seo title={frontmatter.title || pageContext.title} />;

export const Layout: React.FC<Props> = ({
    children,
    location,
    pageContext,
}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
        const announcer = document.getElementById("gatsby-announcer");
        if (announcer) {
            // Denne snakker bare engelsk, og har feil timing for beregning av innhold (pga framer-motion). Vi lager vår egen.
            announcer.setAttribute("aria-hidden", "true");
        }
    }, []);

    const { setLocation, isFrontPage, currentSection } = useLocation();
    const screen = useScreen();

    useEffect(() => {
        setLocation(location);
    }, [location, setLocation]);

    const previous = usePreviousValue(location.pathname);
    const announcerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (previous && location.pathname !== previous) {
            const root = document.querySelector("html") as HTMLHtmlElement;
            const mousenavigation = root.dataset.mousenavigation;
            const touchnavigation = root.dataset.touchnavigation;
            if (!mousenavigation && !touchnavigation) {
                const skipLink = document.getElementById("content-skip-link");
                if (skipLink) {
                    skipLink.focus();
                } else {
                    document.body.focus();
                }
            }

            // Vent på at framer skal få animert ferdig før vi prøver å finne ny verdi
            setTimeout(() => {
                let pageName = `ny side på ${location.pathname}`;
                if (document.title) {
                    pageName = document.title;
                }
                const pageHeadings = document.querySelectorAll(
                    `#gatsby-focus-wrapper h1`,
                );
                if (
                    pageHeadings &&
                    pageHeadings.length &&
                    pageHeadings[0].textContent
                ) {
                    pageName = pageHeadings[0].textContent;
                }

                const newAnnouncement = `Navigerte til ${pageName}`;
                if (announcerRef.current) {
                    const oldAnnouncement = announcerRef.current.innerText;
                    if (oldAnnouncement !== newAnnouncement) {
                        announcerRef.current.innerText = newAnnouncement;
                    }
                }
            }, 400);
        }
    }, [hasMounted, previous, location.pathname]);

    const isGettingStarted = currentSection === "kom-i-gang"; // Disse sidene overstyrer tittel
    const shouldShowSidebar =
        !isFrontPage &&
        (pageContext.title || isGettingStarted) &&
        !(screen.isSmallDevice || screen.isMediumDevice);

    const consent = useCookieConsent();
    const analytics = useAnalytics();
    useEffect(() => {
        if (location.pathname !== previous) {
            // Vent på at framer skal få animert ferdig før vi prøver å finne ny verdi på tittel
            setTimeout(() => {
                analytics.track({
                    eventName: EventName.Sidevisning,
                    properties: {
                        tittel: document.title.split("|")[0].trim(),
                        side: location.pathname,
                        fra: previous,
                    },
                });
            }, 400);
        }
    }, [analytics, consent, location.pathname, previous]);

    const isTestMode =
        hasMounted && window.location.search === "?mode=e2e"
            ? "e2e"
            : undefined;

    return (
        <div className="jkl jkl-portal" data-test-mode={isTestMode}>
            <div
                ref={announcerRef}
                className="jkl-sr-only"
                aria-live="polite"
                aria-atomic="true"
            ></div>
            <div className="jkl-portal__theme-bg" />
            <Header className="jkl-portal__header" />
            <AnimatePresence>
                {shouldShowSidebar && (
                    <Sidebar className="jkl-portal__sidebar" />
                )}
            </AnimatePresence>
            {hasMounted && <KBar />}
            <FormatProvider>
                {hasMounted && (
                    <AnimatePresence mode="wait">{children}</AnimatePresence>
                )}
            </FormatProvider>
            {!isTestMode && hasMounted && (
                <PortalFooter className="jkl-portal__footer" />
            )}
        </div>
    );
};

export default Layout;
