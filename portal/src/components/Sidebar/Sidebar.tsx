import React, { useState, ChangeEvent } from "react";
import { Location } from "@reach/router";
import classNames from "classnames";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";

import { SidebarMenuItem } from "./SidebarMenuItem";
import "./Sidebar.scss";

export function Sidebar() {
    const { documentationPages, componentPages } = useNavigationLinks();
    const profileDocPages = documentationPages.filter((page: DocumentationPageInfo) => page.path.includes("profil"));
    const getStartedDocPages = documentationPages.filter((page: DocumentationPageInfo) =>
        page.path.includes("komigang"),
    );

    return (
        <Location>
            {({ location }) => {
                const path = location.pathname.split("/")[1];
                let lastPath: string | undefined = undefined;
                if (location.state) {
                    const state = location.state as { lastPath?: string };
                    lastPath = state.lastPath;
                }
                const pathHasChanged =
                    lastPath && lastPath !== path && lastPath.includes("react") !== path.includes("react");
                const sidebarClassName = classNames({
                    "jkl-portal-sidebar-menu": true,
                    "jkl-portal-sidebar-menu--animated": pathHasChanged,
                });
                if (path === "") {
                    return null;
                }
                let links: DocumentationPageInfo[];
                switch (true) {
                    case path === "profil":
                        links = profileDocPages;
                        break;
                    case path === "komigang":
                        links = getStartedDocPages;
                        break;
                    case path.includes("react"):
                        links = componentPages;
                        break;
                    default:
                        links = [];
                        break;
                }
                return (
                    <nav className={sidebarClassName}>
                        <SidebarMenu currentPath={path} links={links} />
                    </nav>
                );
            }}
        </Location>
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
