import clsx from "clsx";
import React from "react";
import { WithChildren } from "../../core/types.js";

export interface TabProps extends WithChildren {
    className?: string;
}

/**
 * En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    (props, ref) => {
        const classes = clsx("jkl-tab", props.className);

        return (
            <button
                role="tab"
                type="button"
                ref={ref}
                {...props}
                className={classes}
            />
        );
    },
);

Tab.displayName = "Tab";
