import { Footer } from "@fremtind/jkl-footer-react";
import { Outlet, useLocation } from "@remix-run/react";
import React, { type FC, type CSSProperties, useEffect } from "react";
import { Cookies } from "../../components/cookies";
import { Navigation } from "~/components/navigation";
import { useScrollbarWidth } from "~/page-templates/topic-page/useScrollbarWidth";
import { slugify } from "~/utils";

export const RootTemplate: FC = () => {
    const { pathname } = useLocation();
    const scrollbarWidth = useScrollbarWidth();

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        const headings = document
            .querySelector("main")
            ?.querySelectorAll("h2,h3,h4");

        if (!headings) {
            return;
        }

        headings.forEach((heading) => {
            heading.id = heading.id || slugify(heading.textContent || "");
        });
    }, [pathname]);

    return (
        <div className="jkl-portal-layout">
            <Navigation />
            <main
                className="jkl-portal-layout__content"
                style={
                    {
                        backgroundColor: "var(--jkl-bg-color)",
                        "--scrollbar-width": `${scrollbarWidth}px`,
                    } as CSSProperties
                }
            >
                <Outlet />
            </main>
            <div className="jkl-portal-layout__footer">
                <Footer
                    heading="Jøkul er designsystemet til Fremtind Forsikring"
                    links={[
                        {
                            external: false,
                            component: Cookies,
                            title: "Bruk av informasjonskapsler",
                        },
                        {
                            external: true,
                            href: "https://www.fremtind.no/personvern/",
                            title: "Personvernserklæring",
                        },
                        {
                            external: true,
                            href: "https://github.com/fremtind/jokul",
                            title: "Jøkul på GitHub",
                        },
                        {
                            external: true,
                            href: "https://fremtind.no/karriere/",
                            title: "Jobb i Fremtind",
                        },
                    ]}
                />
            </div>
        </div>
    );
};
