import { type MenuItem } from "@org/cms";
import { NavLink } from "@remix-run/react";
import cn from "classnames";
import React, { useCallback, type FC, type HTMLAttributes } from "react";
import { useNavigationMenu } from "./navigationMenuContext";

type NavigationMenuLinkProps = MenuItem["link"] & {
    parentSlug?: string;
    linkSlug?: string;
    label: string;
};

export const NavigationMenuLink: FC<NavigationMenuLinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
    label,
    url,
    type,
    newTab,
    parentSlug,
    linkSlug,
    className,
    onClick,
    ...rest
}) => {
    const { setOpen } = useNavigationMenu();
    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            setOpen(false);
            onClick?.(e);
        },
        [onClick, setOpen],
    );

    if (type === "reference" && linkSlug) {
        const to = [parentSlug, linkSlug].filter(Boolean).join("/");
        const { style, ...navLinkProps } = rest; // Remix NavLink liker ikke CSSProperties 🤷‍♂️

        return (
            <NavLink
                className={cn("jkl-portal-navigation-menu-item", className)}
                to={`/${to}`}
                onClick={handleClick}
                state={{
                    isCollapsed: false,
                }}
                {...navLinkProps}
            >
                {label}
            </NavLink>
        );
    } else if (type === "custom" && url) {
        return (
            <a
                className={cn("jkl-portal-navigation-menu-item", className)}
                href={url}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noreferrer noopener" : undefined}
                onClick={handleClick}
                {...rest}
            >
                {label}
            </a>
        );
    } else {
        return null;
    }
};
