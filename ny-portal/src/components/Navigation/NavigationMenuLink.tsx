"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useCallback, type FC, type HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";
import { Slug } from "@/sanity/types";

type NavigationMenuLinkProps = HTMLAttributes<HTMLAnchorElement> & {
    title: string | null;
    path: Slug | null;
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
    const href = parentPath
        ? `/${parentPath}/${path?.current}`
        : `/${path?.current}`;

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
