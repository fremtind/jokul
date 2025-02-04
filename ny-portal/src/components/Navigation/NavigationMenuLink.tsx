"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useCallback, type FC, type HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";

type NavigationMenuLinkProps = HTMLAttributes<HTMLAnchorElement> & {
    label: string;
    path: string;
    parentPath?: string;
};

export const NavigationMenuLink: FC<NavigationMenuLinkProps> = ({
    className,
    path,
    parentPath,
    label,
    onClick,
    ...restProps
}) => {
    const href = parentPath ? `/${parentPath}/${path}` : `/${path}`;

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            onClick?.(e);
        },
        [onClick],
    );

    return (
        <Link
            href={href}
            className={clsx(styles["navigation-menu-item"], className)}
            onClick={handleClick}
            {...restProps}
        >
            {label}
        </Link>
    );
};
