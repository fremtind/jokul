import React from "react";
import { Link } from "gatsby";

interface SidebarMenuItemProps {
    idx: number;
    path: string;
    title: string;
}
export function SidebarMenuItem({ idx, path, title }: SidebarMenuItemProps) {
    return (
        <li
            style={{
                animationDelay: `${idx * 20}ms`,
            }}
            className="jkl-portal-sidebar-menu-item"
        >
            <Link
                activeClassName="jkl-portal-sidebar-menu-item__link--active"
                className="jkl-portal-sidebar-menu-item__link"
                style={{
                    animationDelay: `${idx * 20}ms`,
                }}
                to={path}
            >
                {title}
            </Link>
        </li>
    );
}
