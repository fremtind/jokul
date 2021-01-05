import React, { AnchorHTMLAttributes, FC } from "react";
import classnames from "classnames";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    inverted?: boolean;
    active?: boolean;
}

export const NavLink: FC<Props> = ({ inverted = false, active = false, className = "", children, ...rest }) => (
    <a
        className={classnames(
            "jkl-nav-link",
            {
                "jkl-nav-link--inverted": inverted,
                "jkl-nav-link--active": active,
            },
            className,
        )}
        {...rest}
    >
        {children}
    </a>
);
