import { clsx } from "clsx";
import React, { AnchorHTMLAttributes, FC } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}

export const Link: FC<LinkProps> = ({ external = false, className = "", children, ...rest }) => (
    <a
        className={clsx("jkl-link", className, {
            "jkl-link--external": external,
        })}
        {...rest}
    >
        {children}
    </a>
);
