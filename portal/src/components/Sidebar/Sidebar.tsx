import React, { useState, ChangeEvent } from "react";
import classNames from "classnames";
import { withPrefix } from "gatsby";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";

import { SidebarMenuItem } from "./SidebarMenuItem";
import "./Sidebar.scss";

type GatsbyLocation = Location & { state?: Record<string, string> };
interface Props {
    location: GatsbyLocation;
}

export function Sidebar({ location }: Props) {
    const { documentationPages, componentPages } = useNavigationLinks();
    const profileDocPages = documentationPages.filter((page: DocumentationPageInfo) => page.path.includes("profil"));
    const getStartedDocPages = documentationPages.filter((page: DocumentationPageInfo) =>
        page.path.includes("komigang"),
    );

    const trimmedPath = location.pathname.substr(withPrefix("").length);
    const relativePath = trimmedPath.split("/")[0];
    const lastPath = location.state && location.state?.lastPath;
    const pathHasChanged = lastPath && lastPath !== relativePath;
    const sidebarClassName = classNames({
        "jkl-portal-sidebar-menu": true,
        "jkl-portal-sidebar-menu--animated": pathHasChanged,
    });
    if (relativePath === "") {
        return null;
    }
    let links: DocumentationPageInfo[];
    switch (true) {
        case relativePath === "profil":
            links = profileDocPages;
            break;
        case relativePath === "komigang":
            links = getStartedDocPages;
            break;
        case relativePath === "komponenter":
            links = componentPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav className={sidebarClassName}>
            <SidebarMenu currentPath={relativePath} links={links} />
        </nav>
    );
}

function SidebarMenu({ links, currentPath }: { links: DocumentationPageInfo[]; currentPath: string }) {
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
                    <SidebarMenuItem
                        idx={i}
                        key={item.title}
                        currentPath={currentPath}
                        path={item.path}
                        title={item.title}
                    />
                ))}
            </ul>
        </>
    );
}
