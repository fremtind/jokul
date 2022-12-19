import { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { CSSProperties, useCallback } from "react";
import { useTabsContext } from "./tabsContext";
import { useTabIndicator } from "./useTabIndicator";

export interface TabListProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
}

export interface InjectedProps {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    tabIDs: string[];
    tabPanelIDs: string[];
}

/**
 * Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabList = ({ children, className, ...injected }: TabListProps) => {
    // props injected by Tabs
    const { activeIndex, setActiveIndex, tabIDs, tabPanelIDs, ...rest } = injected as TabListProps & InjectedProps;
    const { density } = useTabsContext();

    const { activeTab, indicatorPosition, indicatorWidth, tabContainer, tabIndicator } = useTabIndicator({
        activeIndex,
        density,
    });

    const keyDownHandler = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowLeft") {
            const current = event.currentTarget;
            const prev = event.currentTarget.previousSibling;

            if (prev) {
                (prev as HTMLElement).focus();
            } else {
                (current.parentElement?.lastChild?.previousSibling as HTMLElement).focus();
            }
        }

        if (event.key === "ArrowRight") {
            const current = event.currentTarget;
            const next = event.currentTarget.nextSibling;

            // skip the focus indicator element
            if (next && next.nodeName === "BUTTON") {
                (next as HTMLElement).focus();
            } else {
                (current.parentElement?.firstChild as HTMLElement).focus();
            }
        }
    }, []);

    return (
        <div role="tablist" ref={tabContainer} {...rest} className={cn("jkl-tablist", className)}>
            {React.Children.map(children, (tab, tabIndex) => {
                const isActive = activeIndex === tabIndex;

                return React.isValidElement(tab)
                    ? React.cloneElement<any>(tab, {
                          onKeyDown: keyDownHandler,
                          tabIndex: isActive ? undefined : -1,
                          ref: isActive ? activeTab : undefined,
                          onClick: () => setActiveIndex(tabIndex),
                          "aria-selected": isActive,
                          "aria-controls": tabPanelIDs[tabIndex],
                          id: tabIDs[tabIndex],
                      })
                    : null;
            })}

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
    );
};
