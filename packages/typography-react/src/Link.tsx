import React, { AnchorHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

interface Props extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "rel" | "target" | "className" | "href"> {
    /** @deprecated */
    negative?: boolean;
    external?: boolean;
    children: ReactNode;
}

let warningHasBeenShown = false;

export const Link = ({ negative = false, external = false, children, className = "", ...rest }: Props) => {
    if (process.env.NODE_ENV !== "production" && !warningHasBeenShown) {
        console.warn(
            "WARNING: This version of the Link component is deprecated! Please use the Link component found in @fremtind/jkl-core instead",
        );
        warningHasBeenShown = true;
    }
    return (
        <a
            className={classnames("jkl-link", className, {
                "jkl-link--negative": negative,
                "jkl-link--external": external,
            })}
            {...rest}
        >
            {children}
        </a>
    );
};
