import React, { ReactNode } from "react";

interface Props {
    href: string;
    inline?: boolean;
    children: ReactNode;
    className?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    rel?: string;
}

export const Link = ({ href, inline = false, children, className = "", ...rest }: Props) => (
    <a className={`jkl-link ${inline ? "jkl-link--inline" : "jkl-link--block"} ${className}`} href={href} {...rest}>
        {children}
    </a>
);
