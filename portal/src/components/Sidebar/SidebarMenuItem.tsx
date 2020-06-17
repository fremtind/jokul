import React, { CSSProperties } from "react";
import { Link } from "gatsby";
import { useLocation } from "../../contexts/locationContext";
import { DocumentationPageInfo } from "../Header/useNavigationLinks";

interface SidebarMenuItemProps extends DocumentationPageInfo {
    idx: number;
}
export function SidebarMenuItem({ idx, path, title }: SidebarMenuItemProps) {
    const { currentSection } = useLocation();
    const delayAnimation: CSSProperties = {
        animationDelay: `${idx * 20}ms`,
    };
    return (
        <li style={delayAnimation} className="jkl-portal-sidebar-menu-item">
            <Link
                activeClassName="jkl-portal-sidebar-menu-item__link--active"
                className="jkl-portal-sidebar-menu-item__link"
                style={delayAnimation}
                to={path}
                state={{ lastPath: currentSection }}
                data-testid={`sidebar-link-${title.replace(/ /g, "-")}`}
            >
                {title}
            </Link>
        </li>
    );
}
