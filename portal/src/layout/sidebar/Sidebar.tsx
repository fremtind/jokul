import cn from "classnames";
import React, { FC } from "react";
import { ContentLink } from "../header/ContentLink";
import {
    useNavigationLinks,
    DocumentationPageInfo,
} from "../header/useNavigationLinks";
import { useLocation } from "../locationContext";
import { SidebarMenu } from "./SidebarMenu";
import "./Sidebar.scss";

export interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const {
        profileDocPages,
        getStartedDocPages,
        componentDocPages,
        uuDocPages,
        guiderDocPages,
        blogPages,
        PageType,
        componentGroup,
    } = useNavigationLinks();

    const { currentSection } = useLocation();

    if (currentSection === "") {
        return null;
    }

    let links: DocumentationPageInfo[];
    switch (currentSection) {
        case PageType.PROFIL:
            links = profileDocPages;
            break;
        case PageType.KOMIGANG:
            links = getStartedDocPages;
            break;
        case PageType.KOMPONENTER:
            links = componentDocPages;
            break;
        case PageType.UU:
            links = uuDocPages;
            break;
        case PageType.GUIDER:
            links = guiderDocPages;
            break;
        case PageType.BLOG:
            links = blogPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav
            className={cn("jkl-portal-sidebar-menu", className)}
            aria-label="Sidemeny"
        >
            <ContentLink>Hopp over sidemeny til innhold</ContentLink>
            <SidebarMenu
                links={links}
                currentSection={currentSection}
                groups={componentGroup}
                showGroups={currentSection === PageType.KOMPONENTER}
            />
        </nav>
    );
};
