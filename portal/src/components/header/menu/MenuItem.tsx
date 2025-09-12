"use client";

import type { PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./menu.module.scss";

type MenuItemProps = PropsWithChildren<
    LinkProps & {
        className?: string;
    }
>;

const getLinkUrl = (href: LinkProps["href"], as?: LinkProps["as"]): string => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    if (as) return as.toString();
    return href.toString();
};

// Lagd etter next.js sitt eksempel på active link: https://github.com/vercel/next.js/tree/canary/examples/active-class-name
export const MenuItem = ({ children, className, ...props }: MenuItemProps) => {
    const pathname = usePathname();

    if (pathname === getLinkUrl(props.href, props.as)) {
        return (
            <Link
                aria-current="page"
                {...props}
                className={clsx("jkl-link", styles.active)}
            >
                {children}
            </Link>
        );
    }

    return (
        <Link className="jkl-link" {...props}>
            {children}
        </Link>
    );
};
