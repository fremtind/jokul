import React, { AnchorHTMLAttributes, FC } from "react";
import classnames from "classnames";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** @deprecated */
    negative?: boolean;
    external?: boolean;
}

export const Link: FC<Props> = ({ negative = false, external = false, className = "", children, ...rest }) => (
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
