import { Link } from "gatsby";
import React, { FC } from "react";
import { useLocation } from "../locationContext";

interface SidebarMenuItemProps {
    path: string;
    title: string;
}
export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ path, title }) => {
    const { currentSection } = useLocation();

    return (
        <Link
            className="jkl-nav-link jkl-portal-sidebar-menu-item__link"
            activeClassName="jkl-nav-link--active"
            to={path}
            state={{ lastPath: currentSection }}
            data-testid={`sidebar-link-${title.replace(/ /g, "-")}`}
        >
            {title}
        </Link>
    );
};
