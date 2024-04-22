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

    const selectedIndex = React.Children.toArray(children).findIndex((navTab) => {
        if (!React.isValidElement(navTab)) {
            return false;
        }
        return navTab.props["aria-selected"] === true;
    });

    useEffect(() => {
        if (tablistRef.current) {
            setTabsRect(tablistRef.current.getBoundingClientRect());
        }
        if (activeRef.current) {
            setActiveRect(activeRef.current.getBoundingClientRect());
        }
    }, [selectedIndex, density]);

    return (
        <div {...rest} data-layout-density={density} className={cn("jkl-tabs", className)} ref={scrollRef}>
            <div role="tablist" aria-label={ariaLabel} ref={tablistRef} className="jkl-tablist">
                {React.Children.map(children, (child, index) => {
                    return React.isValidElement(child)
                        ? React.cloneElement<any>(child, {
                              ref: selectedIndex === index ? activeRef : undefined,
                          })
                        : null;
                })}
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
