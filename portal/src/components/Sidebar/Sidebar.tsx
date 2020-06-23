import React, { useState, ChangeEvent } from "react";
import classNames from "classnames";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";
import { useLocation } from "../../contexts/locationContext";
import { useTheme } from "../../contexts/themeContext";

import { SidebarMenuItem } from "./SidebarMenuItem";
import "./Sidebar.scss";

export function Sidebar({ className }: { className?: string }) {
    const { profileDocPages, getStartedDocPages, componentDocPages, blogPages, PageType } = useNavigationLinks();

    const { currentSection, sectionHasChanged } = useLocation();
    const sidebarClassName = classNames(
        {
            "jkl-portal-sidebar-menu": true,
            "jkl-portal-sidebar-menu--animated": sectionHasChanged,
        },
        className,
    );
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
        case PageType.BLOG:
            links = blogPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav className={sidebarClassName} aria-label="Sidemeny">
            <SidebarMenu currentPath={currentSection} links={links} />
        </nav>
    );
}

function SidebarMenu({ links }: { links: DocumentationPageInfo[]; currentPath: string }) {
    const { theme } = useTheme();
    const [filter, setFilter] = useState("");
    function filterLinks(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }
    const filteredLinks = links.filter((link) => link.title.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            <TextInput
                variant="small"
                forceCompact
                label="Filtrér"
                value={filter}
                inverted={theme === "dark"}
                onChange={filterLinks}
                action={{ icon: "clear", label: "Nullstill filter", onClick: () => setFilter("") }}
                className="jkl-portal-sidebar-menu__filter"
                data-testid="sidebar-filter"
            />
            <ul className="jkl-portal-sidebar-menu__items">
                {filteredLinks.map((item: DocumentationPageInfo, i: number) => (
                    <SidebarMenuItem idx={i} key={item.title} {...item} />
                ))}
            </ul>
        </>
    );
}
