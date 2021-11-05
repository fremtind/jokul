import React, { AnchorHTMLAttributes, FC } from "react";
import classnames from "classnames";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** @deprecated */
    negative?: boolean;
    external?: boolean;
}

export const Link: FC<LinkProps> = ({ negative = false, external = false, className = "", children, ...rest }) => (
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
