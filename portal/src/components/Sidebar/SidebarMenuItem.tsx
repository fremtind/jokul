import React from "react";
import { Link } from "gatsby";
import { useLocation } from "../../contexts/locationContext";

interface SidebarMenuItemProps {
    path: string;
    title: string;
}
export function SidebarMenuItem({ path, title }: SidebarMenuItemProps) {
    const { currentSection } = useLocation();

    return (
        <Link
            activeClassName="jkl-portal-sidebar-menu-item__link--active"
            className="jkl-portal-sidebar-menu-item__link"
            to={path}
            state={{ lastPath: currentSection }}
            data-testid={`sidebar-link-${title.replace(/ /g, "-")}`}
        >
            {title}
        </Link>
    );
}
