import { Link } from "@fremtind/jkl-core";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import {
    RadioButton,
    RadioButtonGroup,
} from "@fremtind/jkl-radio-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useContext, useState, ChangeEvent } from "react";
import { a11yContext } from "../../a11yContext";
import {
    DocumentationPageInfo,
    pageNames,
    PageType,
} from "../header/useNavigationLinks";
import { SidebarMenuItem } from "./SidebarMenuItem";

interface Props {
    links: DocumentationPageInfo[];
    currentSection: string;
    groups: string[];
    showGroups: boolean;
}

const allComponents = "alle";

export const SidebarMenu: React.FC<Props> = ({
    links,
    currentSection,
    groups,
    showGroups,
}) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const [filter, setFilter] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(allComponents);

    const controls = useAnimation();

    const listItemInitial = { x: prefersReducedMotion ? 0 : -5, opacity: 0 };
    const listItemAnimate = {
        x: prefersReducedMotion ? 0 : 0,
        opacity: 1,
        transition: { duration: 0.2 },
    };
    const listItemExit = {
        x: prefersReducedMotion ? 0 : 5,
        opacity: 0,
        transition: { duration: 0.2 },
    };

    React.useEffect(() => {
        (async () => {
            await controls.start({
                x: prefersReducedMotion ? 0 : 0,
                opacity: 0,
                transition: { duration: 0 },
            });
            await controls.start({
                x: prefersReducedMotion ? 0 : -10,
                opacity: 0,
                transition: { duration: 0.2 },
            });
            await controls.start({
                x: prefersReducedMotion ? 0 : 0,
                opacity: 1,
                transition: { duration: 0.2 },
            });
        })();
    }, [currentSection, controls, prefersReducedMotion]);

    function filterLinks(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }
    const filteredLinks = links.filter((link) =>
        link.title.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
        <motion.div
            initial={{ y: prefersReducedMotion ? 0 : -400, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key="sidebar-menu"
        >
            <TextInput
                label="Filtrér"
                labelProps={{ variant: "small" }}
                value={filter}
                density="compact"
                onChange={filterLinks}
                action={
                    filter
                        ? {
                              icon: <CloseIcon />,
                              label: "Nullstill filter",
                              onClick: () => setFilter(""),
                          }
                        : undefined
                }
                className="jkl-portal-sidebar-menu__filter"
                data-testid="sidebar-filter"
            />
            {showGroups && (
                <RadioButtonGroup
                    className="jkl-portal-sidebar-menu__meta"
                    legend="Vis"
                    density="compact"
                    name="filter-radio"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    labelProps={{ variant: "small" }}
                    inline
                >
                    {[allComponents, ...groups].map((value) => (
                        <RadioButton key={value} label={value} value={value} />
                    ))}
                </RadioButtonGroup>
            )}
            <motion.ul
                animate={controls}
                className="jkl-portal-sidebar-menu__items"
            >
                {filteredLinks.length === 0 ? (
                    <motion.li
                        initial={{
                            y: prefersReducedMotion ? 0 : 40,
                            opacity: 0,
                        }}
                        animate={{
                            y: prefersReducedMotion ? 0 : 0,
                            opacity: 1,
                            transition: { duration: 0.2, delay: 0.3 },
                        }}
                        exit={{
                            y: prefersReducedMotion ? 0 : -40,
                            opacity: 0,
                            transition: { duration: 0.2 },
                        }}
                        className="jkl-portal-sidebar-menu-item"
                        key={`li-none`}
                    >
                        <p className="small">
                            {filter && (
                                <>
                                    Fant ingen{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        {filter}{" "}
                                    </span>{" "}
                                    i {pageNames[currentSection as PageType]}
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
                    <AnimatePresence>
                        {filteredLinks.map((item: DocumentationPageInfo) => {
                            if (
                                !showGroups ||
                                selectedGroup === allComponents ||
                                selectedGroup === item.group
                            ) {
                                return (
                                    <motion.li
                                        initial={listItemInitial}
                                        animate={listItemAnimate}
                                        exit={listItemExit}
                                        className="jkl-portal-sidebar-menu-item"
                                        key={`li-${item.title}`}
                                    >
                                        <SidebarMenuItem
                                            key={item.title}
                                            path={item.path}
                                            title={item.title}
                                        />
                                    </motion.li>
                                );
                            }
                            return null;
                        })}
                    </AnimatePresence>
                )}
            </motion.ul>
        </motion.div>
    );
};
