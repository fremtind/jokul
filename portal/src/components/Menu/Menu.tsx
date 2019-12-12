import React, { useState, useRef, useContext } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { LocationProvider } from "@reach/router";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { coreLinks, developerLinks, designerLinks, profileLinks, exampleLinks } from "./links";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { ThemeContext } from "../Layout/Layout";

import "./Menu.scss";

export function Menu() {
    const [showMenu, toggleShowMenu] = useState(false);

    const { allSitePage } = useStaticQuery(graphql`
        query getPages {
            allSitePage(filter: { path: { regex: "-react/documentation/" } }) {
                edges {
                    node {
                        id
                        path
                        context {
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        }
    `);
    const menuRef = useRef(null);

    const toggleMenu = (show: boolean) => toggleShowMenu(show);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [components, setComponents] = useState(allSitePage.edges);

    return (
        <LocationProvider>
            {({ location }) => (
                <div ref={menuRef} className={`portal-menu ${showMenu ? " portal-menu--open" : "portal-menu--closed"}`}>
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
                            <AccordionItem
                                title="Grunnleggende"
                                startExpanded={!!location.pathname.match(/(core|jokul)/) || location.pathname === "/"}
                            >
                                {coreLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                        tabIndex={showMenu ? 0 : -1}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>

                            <AccordionItem
                                title="Profilelementer"
                                startExpanded={location.pathname.includes("profile")}
                            >
                                {profileLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                        tabIndex={showMenu ? 0 : -1}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                            <AccordionItem title="For designere" startExpanded={location.pathname.includes("designer")}>
                                {designerLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                        tabIndex={showMenu ? 0 : -1}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                            <AccordionItem
                                title="For utviklere"
                                startExpanded={location.pathname.includes("developer")}
                            >
                                {developerLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                        tabIndex={showMenu ? 0 : -1}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                            <AccordionItem
                                title="Komponenter"
                                startExpanded={location.pathname.includes("documentation")}
                            >
                                <>
                                    <ActionTextField
                                        action={{ icon: "search", label: "Filtrer komponenter", onClick: () => {} }}
                                        label="Søk"
                                        type="text"
                                        className="portal-menu__search jkl-spacing--top-1 jkl-spacing--bottom-1"
                                        forceCompact
                                        onChange={(e) =>
                                            setComponents(
                                                allSitePage.edges.filter((edge: any) => {
                                                    return edge.node.context.frontmatter.title
                                                        .toLowerCase()
                                                        .includes(e.target.value.toLowerCase());
                                                }),
                                            )
                                        }
                                    />
                                    {components.map((edge: any) => (
                                        <Link
                                            key={edge.node.context.frontmatter.title}
                                            className="portal-menu__link"
                                            to={edge.node.path}
                                            tabIndex={showMenu ? 0 : -1}
                                        >
                                            {edge.node.context.frontmatter.title}
                                        </Link>
                                    ))}
                                </>
                            </AccordionItem>
                            <AccordionItem title="Eksempel" startExpanded={location.pathname.includes("patterns")}>
                                {exampleLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                        tabIndex={showMenu ? 0 : -1}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                        </Accordion>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul"
                            tabIndex={showMenu ? 0 : -1}
                        >
                            Kode på Github
                        </a>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title="
                            tabIndex={showMenu ? 0 : -1}
                        >
                            Rapporter feil
                        </a>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title="
                            tabIndex={showMenu ? 0 : -1}
                        >
                            Forslag ny funksjon
                        </a>
                        <a
                            className="portal-menu__link portal-menu__link--figma jkl-p"
                            href="https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components"
                            tabIndex={showMenu ? 0 : -1}
                        >
                            Designbibliotek
                        </a>
                        <ToggleSwitch
                            className="jkl-spacing--top-2 jkl-spacing--bottom-3"
                            checked={theme === "dark"}
                            onChange={(e) => toggleTheme(e.target.checked)}
                        >
                            Dark(beta)
                        </ToggleSwitch>
                    </nav>
                </div>
            )}
        </LocationProvider>
    );
}
