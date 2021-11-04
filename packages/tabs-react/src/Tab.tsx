import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
    children: string;
}

/**
 * En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
    const classes = cx("jkl-tab", props.className);

    return <button role="tab" type="button" ref={ref} {...props} className={classes} />;
});

Tab.displayName = "Tab";
