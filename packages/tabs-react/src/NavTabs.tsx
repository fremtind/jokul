import type { Density, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

export interface NavTabsProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
    density?: Density;
    id?: string;
}

export const NavTabs = ({
    "aria-label": ariaLabel,
    children,
    className,
    density = "comfortable",
    ...rest
}: NavTabsProps) => {
    const [tabsRect, setTabsRect] = useState<DOMRect>();
    const [activeRect, setActiveRect] = useState<DOMRect>();

    const scrollRef = useRef<HTMLDivElement>(null);
    const tablistRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (tablistRef.current) {
            setTabsRect(tablistRef.current.getBoundingClientRect());
        }
        if (activeRef.current) {
            setActiveRect(activeRef.current.getBoundingClientRect());
        }
    }, [density]);

    const path = typeof window !== "undefined" ? window?.location?.pathname : "";
    useEffect(() => {
        if (scrollRef.current) {
            const currentTab = scrollRef.current.querySelector(`[href="${path}"]`);
            if (currentTab) {
                setActiveRect(currentTab.getBoundingClientRect());
            }
        }
    }, [path]);

    // Scroll fanelisten og posisjoner markøren i tilfelle direktelink eller refresh
    useEffect(() => {
        if (scrollRef.current) {
            let currentTab = scrollRef.current.querySelector(`[href="${path}"]`);
            if (!currentTab) {
                // Fall tilbake til den første linken som forhåndsutfylt om ingenting matcher
                currentTab = scrollRef.current.querySelector("a");
            }
            if (currentTab) {
                const rect = currentTab.getBoundingClientRect();
                scrollRef.current.scrollTo(rect.x, 0);
                // Rekalkuler rect etter scroll
                setActiveRect(currentTab.getBoundingClientRect());
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div {...rest} data-layout-density={density} className={cn("jkl-tabs", className)} ref={scrollRef}>
            <div role="tablist" aria-label={ariaLabel} ref={tablistRef} className="jkl-tablist">
                {children}
                <span
                    className="jkl-tablist__indicator"
                    style={{
                        left: (activeRect?.left || 0) - (tabsRect?.left || 0) + (scrollRef.current?.scrollLeft || 0),
                        bottom: -1,
                        width: (activeRect?.width || 0) - (density === "compact" ? 32 : 38),
                    }}
                />
            </div>
        </div>
    );
};
