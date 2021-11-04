import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabPanel = ({ children, ...props }: Props) => {
    const classes = cx("jkl-tabpanel", props.className);

    return (
        <div role="tabpanel" {...props} className={classes}>
            {children}
        </div>
    );
};
