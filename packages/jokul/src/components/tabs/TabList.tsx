import clsx from "clsx";
import React, { useCallback, useRef } from "react";
import type { TabListProps } from "./types.js";

export interface InjectedProps {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    tabIDs: string[];
    tabPanelIDs: string[];
}

/**
 * Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.
 */
export const TabList = ({
    children,
    className,
    direction = "horizontal",
    ...injected
}: TabListProps) => {
    // props injected by Tabs
    const { activeIndex, setActiveIndex, tabIDs, tabPanelIDs, ...rest } =
        injected as TabListProps & InjectedProps;

    const tabsRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLButtonElement>(null);

    const keyDownHandler = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.key === "ArrowLeft") {
                const current = event.currentTarget;
                const prev = event.currentTarget.previousSibling;

                if (prev) {
                    (prev as HTMLElement).focus();
                } else {
                    (
                        current.parentElement?.lastChild
                            ?.previousSibling as HTMLElement
                    ).focus();
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
        },
        [],
    );

    return (
        <div
            role="tablist"
            ref={tabsRef}
            {...rest}
            data-direction={direction}
            className={clsx("jkl-tablist", className)}
        >
            {React.Children.map(children, (tab, tabIndex) => {
                const isActive = activeIndex === tabIndex;

                return React.isValidElement(tab)
                    ? React.cloneElement<any>(tab, {
                          onKeyDown: keyDownHandler,
                          tabIndex: isActive ? undefined : -1,
                          ref: isActive ? activeRef : undefined,
                          onClick: () => setActiveIndex(tabIndex),
                          "aria-selected": isActive,
                          "aria-controls": tabPanelIDs[tabIndex],
                          id: tabIDs[tabIndex],
                      })
                    : null;
            })}
        </div>
    );
};
