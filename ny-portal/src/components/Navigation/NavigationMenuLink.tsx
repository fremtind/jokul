"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useCallback, type FC, type HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";

type NavigationMenuLinkProps = HTMLAttributes<HTMLAnchorElement> & {
    title: string;
    path: string;
    parentPath?: string;
};

export const NavigationMenuLink: FC<NavigationMenuLinkProps> = ({
    className,
    path,
    parentPath,
    title,
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
        <li>
            <Link
                href={href}
                className={clsx(styles["navigation-menu-item"], className)}
                onClick={handleClick}
                {...restProps}
            >
                {title}
            </Link>
        </li>
    );
};
