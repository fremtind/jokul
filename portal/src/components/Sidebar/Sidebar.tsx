import React, { VFC } from "react";
import cn from "classnames";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";
import { useLocation } from "../../contexts/locationContext";
import { SidebarMenu } from "./SidebarMenu";
import { ContentLink } from "../ContentLink/ContentLink";
import "./Sidebar.scss";

export interface SidebarProps {
    className?: string;
}

export const Sidebar: VFC<SidebarProps> = ({ className }) => {
    const {
        profileDocPages,
        getStartedDocPages,
        componentDocPages,
        uuDocPages,
        endreDocPages,
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
        case PageType.ENDRE:
            links = endreDocPages;
            break;
        case PageType.BLOG:
            links = blogPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav className={cn("jkl-portal-sidebar-menu", className)} aria-label="Sidemeny">
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
