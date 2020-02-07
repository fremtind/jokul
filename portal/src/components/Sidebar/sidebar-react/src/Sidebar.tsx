import React, { ReactNode } from "react";
import classNames from "classnames";
import "../../sidebar/Sidebar.scss";

interface Props {
    children?: ReactNode;
    className?: string;
}

export const Sidebar = ({ children, className }: Props) => {
    const componentClassName = classNames("portal-sidebar", className);

    return <aside className={componentClassName}>{children}</aside>;
};
