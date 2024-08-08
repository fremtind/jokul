import clsx from "clsx";
import React, { AnchorHTMLAttributes, FC } from "react";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    back?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ active = false, back = false, className, children, ...rest }) => (
    <a
        className={clsx(
            "jkl-nav-link",
            {
                "jkl-nav-link--active": active,
                "jkl-nav-link--back": back,
            },
            className,
        )}
        {...rest}
    >
        {children}
    </a>
);
