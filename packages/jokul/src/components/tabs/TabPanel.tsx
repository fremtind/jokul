import clsx from "clsx";
import React from "react";
import { WithChildren } from "../../core/types.js";

export interface TabPanelProps extends WithChildren {
    className?: string;
}

/**
 * Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabPanel = ({ children, ...props }: TabPanelProps) => {
    const classes = clsx("jkl-tabpanel", props.className);

    return (
        <div role="tabpanel" {...props} className={classes}>
            {children}
        </div>
    );
};
