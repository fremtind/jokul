import React, { ReactNode } from "react";

interface Props {
    href: string;
    inline?: boolean;
    negative?: boolean;
    children: ReactNode;
    className?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    rel?: string;
}

export const Link = ({ href, inline = false, negative = false, children, className = "", ...rest }: Props) => (
    <a
        className={`jkl-link ${!inline ? "jkl-link--block" : ""} ${inline ? "jkl-link--negative" : ""} ${className}`}
        href={href}
        {...rest}
    >
        {children}
    </a>
);
