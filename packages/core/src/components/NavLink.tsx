import React, { AnchorHTMLAttributes, FC } from "react";
import classnames from "classnames";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** @deprecated */
    inverted?: boolean;
    active?: boolean;
    back?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
    inverted = false,
    active = false,
    back = false,
    className = "",
    children,
    ...rest
}) => (
    <a
        className={classnames(
            "jkl-nav-link",
            {
                "jkl-nav-link--inverted": inverted,
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
