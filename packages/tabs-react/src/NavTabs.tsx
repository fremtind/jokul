import type { Density, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { CSSProperties, useEffect, useRef } from "react";
import { useTabIndicator } from "./useTabIndicator";

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
    const scrollRef = useRef<HTMLDivElement>(null);

    const { indicatorPosition, indicatorWidth, setActiveTabRect, tabContainer, tabIndicator } = useTabIndicator({
        density,
    });

    const path = typeof window !== "undefined" ? window?.location?.pathname : "";
    useEffect(() => {
        if (scrollRef.current) {
            const currentTab = scrollRef.current.querySelector(`[href="${path}"]`);
            if (currentTab) {
                setActiveTabRect(currentTab.getBoundingClientRect());
            }
        }
    }, [path, setActiveTabRect]);

    // Scroll fanelisten og posisjoner markøren i tilfelle direktelink eller refresh
    useEffect(() => {
        if (scrollRef.current) {
            let currentTab = scrollRef.current.querySelector(`[href="${path}"]`);
            if (currentTab) {
                const rect = currentTab.getBoundingClientRect();
                scrollRef.current.scrollTo(rect.x, 0);
                // Rekalkuler rect etter scroll
                setActiveTabRect(currentTab.getBoundingClientRect());
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div {...rest} data-layout-density={density} className={cn("jkl-tabs", className)} ref={scrollRef}>
            <div role="tablist" aria-label={ariaLabel} ref={tabContainer} className="jkl-tablist">
                {children}
                <span
                    ref={tabIndicator}
                    className="jkl-tablist__indicator"
                    style={
                        {
                            "--position": indicatorPosition,
                            "--width": indicatorWidth,
                        } as CSSProperties
                    }
                />
            </div>
        </div>
    );
};
