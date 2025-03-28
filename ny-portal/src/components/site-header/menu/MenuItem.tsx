"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import styles from "../SiteHeader.module.scss";

const getLinkUrl = (href: LinkProps["href"], as?: LinkProps["as"]): string => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    if (as) return as.toString();
    return href.toString();
};

// Lagd etter next.js sitt eksempel på active link: https://github.com/vercel/next.js/tree/canary/examples/active-class-name
export const MenuItem = ({
    children,
    ...props
}: PropsWithChildren<LinkProps>) => {
    const pathname = usePathname();

    if (pathname === getLinkUrl(props.href, props.as)) {
        return (
            <Link
                className={clsx("jkl-link", styles.pageLink, styles.active)}
                aria-current="page"
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <Link className={clsx("jkl-link", styles.pageLink)} {...props}>
            {children}
        </Link>
    );
};
