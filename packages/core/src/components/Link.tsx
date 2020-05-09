import React, { AnchorHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

interface Props extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "rel" | "target" | "className" | "href"> {
    negative?: boolean;
    external?: boolean;
    children: ReactNode;
}

export const Link = ({ negative = false, external = false, children, className = "", ...rest }: Props) => (
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
