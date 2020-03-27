import React, { useState, ChangeEvent } from "react";
import classNames from "classnames";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";
import { useLocation } from "../../contexts/locationContext";

import { SidebarMenuItem } from "./SidebarMenuItem";
import "./Sidebar.scss";

export function Sidebar() {
    const { profileDocPages, getStartedDocPages, componentDocPages, PageType } = useNavigationLinks();

    const { currentSection, previousSection } = useLocation();
    const pathHasChanged = previousSection && previousSection !== currentSection;
    const sidebarClassName = classNames({
        "jkl-portal-sidebar-menu": true,
        "jkl-portal-sidebar-menu--animated": pathHasChanged,
    });
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
        default:
            links = [];
            break;
    }

    return (
        <nav className={sidebarClassName}>
            <SidebarMenu currentPath={currentSection} links={links} />
        </nav>
    );
}

function SidebarMenu({ links }: { links: DocumentationPageInfo[]; currentPath: string }) {
    const [filter, setFilter] = useState("");
    function filterLinks(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }
    const filteredLinks = links.filter((link) => link.title.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            <ActionTextField
                variant="small"
                forceCompact
                label="Filtrér"
                value={filter}
                onChange={filterLinks}
                action={{ icon: "clear", label: "Nullstill filter", onClick: () => setFilter("") }}
                className="jkl-portal-sidebar-menu__filter"
            />
            <ul className="jkl-portal-sidebar-menu__items">
                {filteredLinks.map((item: DocumentationPageInfo, i: number) => (
                    <SidebarMenuItem idx={i} key={item.title} path={item.path} title={item.title} />
                ))}
            </ul>
        </>
    );
}
