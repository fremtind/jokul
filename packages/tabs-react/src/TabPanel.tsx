import React from "react";
import cx from "classnames";
import { WithChildren } from "@fremtind/jkl-core";

export interface TabPanelProps extends WithChildren {
    className?: string;
}

/**
 * Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabPanel = ({ children, ...props }: TabPanelProps) => {
    const classes = cx("jkl-tabpanel", props.className);

    return (
        <div role="tabpanel" {...props} className={classes}>
            {children}
        </div>
    );
};
