import React, { AnchorHTMLAttributes, FC } from "react";
import cn from "classnames";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}

export const Link: FC<LinkProps> = ({ external = false, className = "", children, ...rest }) => (
    <a
        className={cn("jkl-link", className, {
            "jkl-link--external": external,
        })}
        {...rest}
    >
        {children}
    </a>
);
