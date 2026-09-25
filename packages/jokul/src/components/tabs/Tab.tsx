import clsx from "clsx";
import React from "react";
import type { TabProps } from "./types.js";

/**
 * En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    (props, ref) => {
        const { className, tracking, ...rest } = props;
        const classes = clsx("jkl-tab", className);
        const isSelected =
            props["aria-selected"] === true ||
            props["aria-selected"] === "true";

        return (
            <button
                role="tab"
                type="button"
                ref={ref}
                {...rest}
                // Merker tab-knappen som sporbar for Mixpanels
                // `autocapture`. Attributtene er ellers helt inerte uten en
                // initialisert Mixpanel-instans.
                data-jkl-tracked="Tab"
                data-jkl-selected={isSelected || undefined}
                data-jkl-tracking={
                    tracking ? JSON.stringify(tracking) : undefined
                }
                className={classes}
            />
        );
    },
);

Tab.displayName = "Tab";
