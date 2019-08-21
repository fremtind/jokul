import React, { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "rel" | "target" | "className" | "href"> {
    negative?: boolean;
    children: ReactNode;
}

export const Link = ({ negative = false, children, className = "", ...rest }: Props) => (
    <a className={`jkl-link  ${negative ? "jkl-link--negative" : ""} ${className}`} {...rest}>
        {children}
    </a>
);
