"use client";

import { MenuItem } from "@fremtind/jokul/menu";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import styles from "./hamburger.module.scss";

type MenuItemProps = PropsWithChildren<
    LinkProps & {
        className?: string;
    }
>;

const getLinkUrl = (href: LinkProps["href"], as?: LinkProps["as"]): string => {
    if (as) return as.toString();
    return href.toString();
};

export const HamburgerMenuItem = ({
    children,
    className,
    ...props
}: MenuItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === getLinkUrl(props.href, props.as);

    const { as: linkAs, ...restProps } = props;

    return (
        <MenuItem
            as={Link}
            className={styles.hamburgerItem}
            {...(isActive && { "aria-current": "page" })}
            {...restProps}
        >
            {children}
        </MenuItem>
    );
};
