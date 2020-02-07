import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { LocationProvider } from "@reach/router";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { ComponentDocPage, staticLinks, mainMenu } from "./links";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import { ThemeContext } from "../Layout/Layout";
import { FilterField } from "./FilterField";
import { THEME_DARK, THEME_LIGHT } from "../Layout/useTheme";

//New compontents
import { Sidebar } from "../Sidebar";

import "./Menu.scss";

export function Menu() {
    const [showMenu, toggleShowMenu] = useState(false);

    const { allSitePage: componentDocumentationPage, allMarkdownRemark } = useStaticQuery(graphql`
        query getPages {
            allSitePage(
                filter: { path: { regex: "/(-react|react-hooks)/documentation/" } }
                sort: { order: ASC, fields: context___frontmatter___title }
            ) {
                edges {
                    node {
                        id
                        path
                        context {
                            frontmatter {
                                title
                                react
                            }
                        }
                    }
                }
            }
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            order
                        }
                    }
                }
            }
        }
    `);
    const menuRef = useRef(null);

    const toggleMenu = (show: boolean) => toggleShowMenu(show);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [menu, setMenu] = useState(mainMenu(allMarkdownRemark, componentDocumentationPage));
    const [filter, setFilter] = useState("");
    useEffect(() => {
        function filterComponents(filter: string) {
            return componentDocumentationPage.edges.filter((edge: ComponentDocPage) => {
                return edge.node.context.frontmatter.title.toLowerCase().includes(filter.toLowerCase());
            });
        }
        const filteredComponents = filterComponents(filter);
        setMenu(mainMenu(allMarkdownRemark, { edges: filteredComponents }));
    }, [filter]);

    return (
        <LocationProvider>
            {({ location }) => (
                <Sidebar
                    ref={menuRef}
                    className={`portal-menu ${showMenu ? " portal-menu--open" : "portal-menu--closed"}`}
                >
                    <div className="portal-menu__toggler">
                        <Hamburger
                            negative
                            onClick={toggleMenu}
                            enableClickOutside={showMenu}
                            onClickOutside={toggleMenu}
                            insideRef={menuRef}
                        />
                    </div>

                    <nav className="portal-menu__bar">
                        <Accordion>
                            {menu.map(({ sectionTitle, pages, matchingLocation }) => (
                                <AccordionItem
                                    key={sectionTitle}
                                    title={sectionTitle}
                                    startExpanded={matchingLocation(location)}
                                >
                                    {sectionTitle === "Komponenter" && (
                                        <FilterField filter={filter} setFilter={setFilter} />
                                    )}
                                    {pages.map(({ title, path }) => (
                                        <Link
                                            key={title}
                                            className="portal-menu__link"
                                            activeClassName="portal-menu__link--current"
                                            to={path}
                                            tabIndex={showMenu ? 0 : -1}
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <hr className="portal-menu-hr" />
                        {staticLinks.map(({ linkText, href, className }) => (
                            <a
                                className={`portal-menu__link jkl-body ${className}`}
                                href={href}
                                tabIndex={showMenu ? 0 : -1}
                                key={linkText}
                            >
                                {linkText}
                            </a>
                        ))}

                        <ToggleSwitch
                            inverted={theme === THEME_DARK}
                            className="jkl-spacing--top-2 jkl-spacing--bottom-3"
                            pressed={theme === THEME_DARK}
                            onClick={() => toggleTheme(theme === THEME_LIGHT)}
                        >
                            Dark(beta)
                        </ToggleSwitch>
                    </nav>
                </Sidebar>
            )}
        </LocationProvider>
    );
}
