import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    dark?: boolean;
    showMenu: boolean;
}

export const Sidebar = ({ children, className, dark, showMenu }: Props) => {
    const componentClassName = "jkl-sidebar".concat(
        className ? ` ${className}` : "",
        dark ? " jkl-sidebar--dark" : "",
        showMenu ? " jkl-sidebar--open" : " jkl-sidebar--closed",
    );

    return <div className={componentClassName}>{children}</div>;
};
