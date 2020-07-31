import React, { useState, ChangeEvent } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";
import { useLocation } from "../../contexts/locationContext";
import { useTheme } from "../../contexts/themeContext";

import { SidebarMenuItem } from "./SidebarMenuItem";
import "./Sidebar.scss";
import { Link } from "@fremtind/jkl-core";

export function Sidebar() {
    const { profileDocPages, getStartedDocPages, componentDocPages, blogPages, PageType } = useNavigationLinks();

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
        case PageType.BLOG:
            links = blogPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav className="jkl-portal-sidebar-menu" aria-label="Sidemeny">
            <SidebarMenu links={links} currentSection={currentSection} />
        </nav>
    );
}

function SidebarMenu({ links, currentSection }: { links: DocumentationPageInfo[]; currentSection: string }) {
    const { theme } = useTheme();
    const [filter, setFilter] = useState("");

    const controls = useAnimation();

    React.useEffect(() => {
        (async () => {
            await controls.start({ x: 0, opacity: 0, transition: { duration: 0 } });
            await controls.start({ x: -10, opacity: 0, transition: { duration: 0.2 } });
            await controls.start({ x: 0, opacity: 1, transition: { duration: 0.2 } });
        })();
    }, [currentSection, controls]);

    function filterLinks(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }
    const filteredLinks = links.filter((link) => link.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key="sidebar-menu"
        >
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
            <motion.ul animate={controls} className="jkl-portal-sidebar-menu__items">
                <AnimatePresence>
                    {filteredLinks.length === 0 ? (
                        <motion.li
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                            exit={{ y: -40, opacity: 0, transition: { duration: 0.2 } }}
                            className="jkl-portal-sidebar-menu-item"
                            key={`li-none`}
                        >
                            <p className="jkl-small">
                                {filter && (
                                    <>
                                        <span style={{ fontWeight: "bold" }}>{filter} </span>er ikke i biblioteket{" "}
                                        <br />
                                        <br />
                                    </>
                                )}
                                <Link
                                    external
                                    href={`https://github.com/fremtind/jokul/issues?q=is%3Aissue+is%3Aopen+${filter}`}
                                >
                                    Sjekk åpne issues på github
                                </Link>
                            </p>
                        </motion.li>
                    ) : (
                        filteredLinks.map((item: DocumentationPageInfo) => (
                            <motion.li
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
                                exit={{ x: 5, opacity: 0, transition: { duration: 0.2 } }}
                                className="jkl-portal-sidebar-menu-item"
                                key={`li-${item.title}`}
                            >
                                <SidebarMenuItem key={item.title} path={item.path} title={item.title} />
                            </motion.li>
                        ))
                    )}
                </AnimatePresence>
            </motion.ul>
        </motion.div>
    );
}
