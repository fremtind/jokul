import type { WithOptionalChildren } from "@fremtind/jkl-core";
import { NavTab, NavTabs } from "@fremtind/jkl-tabs-react";
import type { Component, Pattern } from "@org/cms";
import { NavLink, type NavLinkProps, useLocation } from "@remix-run/react";
import React, { type FC, useEffect, useRef, useState } from "react";
import { AnimatedPageWrapper } from "../AnimatedPageWrapper";
import { TopicTab } from "./TopicTab";
import { useCollapsibleHeader } from "./useCollapsibleHeader";
import { useHeadingHeight } from "./useHeadingHeight";
import { RichText } from "~/components/rich-text/RichText";
import { TableOfContents } from "~/components/table-of-contents";
import { useFadingContent } from "~/hooks";
import { camelShyte } from "~/utils";
import { invlerp } from "~/utils/function";

type PageState = { isCollapsed?: boolean };

export interface TopicPageProps extends WithOptionalChildren {
    path: string;
    heading: string;
    ingress?: (Component | Pattern)["ingress"];
    tabs: (Component | Pattern)["tabs"];
    packages?: {
        react?: string;
        css?: string;
    };
}

const scrollToFirstHeaderOfLevel = (level: "h1" | "h2" | "h3" = "h2") => {
    if (typeof document !== "undefined") {
        const header = document.querySelector(level);
        header?.scrollIntoView({ block: "start" });
    }
};

export const TopicPageTemplate: FC<TopicPageProps> = ({
    children,
    heading,
    ingress,
    tabs,
    path,
    packages,
    ...rest
}) => {
    const { pathname, state } = useLocation();
    const { headingRef, headingHeight } = useHeadingHeight();
    const pageRef = useRef<HTMLDivElement>(null);
    const ingressRef = useRef<HTMLParagraphElement>(null);

    const selectedTab = tabs.every((tab) => !pathname.endsWith(tab.slug))
        ? tabs[0]
        : tabs.find((tab) => pathname.endsWith(tab.slug));
    const pagePath = tabs.every((tab) => !pathname.endsWith(tab.slug))
        ? path
        : path.split("/").slice(0, -1).join("/");

    const [isCollapsed, setCollapsed] = useState(
        (state as PageState)?.isCollapsed || false,
    );
    useCollapsibleHeader(setCollapsed);

    // Kollaps headeren (ved å hoppe til første overskrift) hvis vi
    // kommer fra en underside med allerede kollapset header
    useEffect(() => {
        if ((state as PageState)?.isCollapsed) {
            scrollToFirstHeaderOfLevel("h2");
        } else {
            setCollapsed(false);
        }
    }, [state, pathname]);

    // Kollaps heading, og sørg for at variablene for høyden stemmer,
    // når isCollapsed endrer seg etter scroll-trigger
    useEffect(() => {
        if (!headingRef.current || !pageRef.current || headingHeight === null) {
            return;
        }

        const heading = headingRef.current;
        const page = pageRef.current;

        page.style.setProperty(
            "--heading-height-for-ingress",
            `${headingHeight.expanded}px`,
        );
        page.style.setProperty(
            "--heading-height",
            `${
                isCollapsed ? headingHeight.collapsed : headingHeight.expanded
            }px`,
        );

        // Sett riktig høyde på overskriften og sørg for at den animeres
        requestAnimationFrame(() => {
            heading.dataset.animate = "true";
            heading.dataset.collapsed = String(isCollapsed);
        });
    }, [isCollapsed, headingHeight, headingRef]);

    useEffect(() => {
        const setIngressOpacity = () => {
            if (
                typeof window !== "undefined" &&
                ingressRef.current &&
                headingHeight !== null
            ) {
                const { scrollY } = window;

                const ingressHeight =
                    ingressRef.current.getBoundingClientRect().height;
                const opacity = invlerp(
                    64 + headingHeight.collapsed + ingressHeight * 0.75,
                    64 + headingHeight.collapsed,
                    scrollY,
                );

                ingressRef.current?.style.setProperty(
                    "--opacity",
                    `${opacity}`,
                );
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", setIngressOpacity);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", setIngressOpacity);
            }
        };
    }, [headingHeight]);

    // TODO: fiks noe som funker på mobil
    useFadingContent({
        rootMargin: `-10% 0px -5% 0px`,
    });

    return (
        <AnimatedPageWrapper
            key={heading} // ikke animer mellom undersider
            ref={pageRef}
            className="topic-page"
            {...rest}
        >
            <div className="topic-page__heading-container">
                <div className="topic-page__heading-container-toc">
                    <TableOfContents />
                </div>
                <h1 ref={headingRef} className="topic-page__heading">
                    {camelShyte(heading)}
                </h1>
            </div>
            <div
                ref={ingressRef}
                className="topic-page__ingress"
                data-collapsed={isCollapsed}
            >
                <RichText content={ingress} />
            </div>
            {tabs.length <= 1 ? null : (
                <div className="topic-page__tab-list">
                    <NavTabs>
                        {tabs.map((tab, idx) => (
                            <NavTab
                                key={tab.slug}
                                aria-selected={
                                    idx === 0
                                        ? tabs.every(
                                              (page) =>
                                                  !pathname.endsWith(page.slug),
                                          )
                                        : pathname.endsWith(tab.slug)
                                }
                                component={NavLink}
                                componentProps={
                                    {
                                        to:
                                            idx === 0
                                                ? `/${pagePath}`
                                                : `/${pagePath}/${tab.slug}`,
                                        prefetch: "intent",
                                        replace: true,
                                        preventScrollReset: isCollapsed,
                                        state: { isCollapsed },
                                        end: true,
                                    } as Partial<NavLinkProps>
                                }
                            >
                                {tab.title}
                            </NavTab>
                        ))}
                    </NavTabs>
                </div>
            )}
            <div className="topic-page__tab-content">
                <TableOfContents />
                <div role="tabpanel">
                    {selectedTab && (
                        <TopicTab
                            tabContent={selectedTab}
                            packages={packages}
                        />
                    )}
                </div>
            </div>
        </AnimatedPageWrapper>
    );
};
