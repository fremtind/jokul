"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

const getLinkUrl = (href: LinkProps["href"], as?: LinkProps["as"]): string => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    if (as) return as.toString();
    return href.toString();
};

// Lagd etter next.js sitt eksempel på active link: https://github.com/vercel/next.js/tree/canary/examples/active-class-name
const NavigationMenuLink = ({
    children,
    ...props
}: PropsWithChildren<LinkProps>) => {
    const pathname = usePathname();

    if (pathname === getLinkUrl(props.href, props.as)) {
        return (
            <Link
                className="global-menu-list-link global-menu-list-link--active"
                aria-current="page"
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <Link className="global-menu-list-link" {...props}>
            {children}
        </Link>
    );
};

export default NavigationMenuLink;
