import React, { useState, useRef, useContext, useEffect } from "react";
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
import { MenuLink } from "./MenuLink";

import "./Menu.scss";

interface DocumentationPage {
    node: {
        id: string;
        path: string;
        context: {
            frontmatter: {
                title: string;
            };
        };
    };
}

export function Menu() {
    const [showMenu, toggleShowMenu] = useState(false);

    const { allSitePage: componentDocumentationPage } = useStaticQuery(graphql`
        query getComponentDocumentation {
            allSitePage(
                sort: { order: ASC, fields: context___frontmatter___title }
                filter: { path: { regex: "-react/documentation/" } }
            ) {
                edges {
                    node {
                        path
                        id
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

    const [filter, setFilter] = useState("");
    const [components, setComponents] = useState(componentDocumentationPage.edges);
    useEffect(() => {
        function filterComponents(filter: string) {
            return componentDocumentationPage.edges.filter((edge: DocumentationPage) => {
                return edge.node.context.frontmatter.title.toLowerCase().includes(filter.toLowerCase());
            });
        }
        setComponents(filterComponents(filter));
    }, [filter]);

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
                                    <MenuLink key={link.title} link={link} />
                                ))}
                            </AccordionItem>

                            <AccordionItem
                                title="Profilelementer"
                                startExpanded={location.pathname.includes("profile")}
                            >
                                {profileLinks.map((link) => (
                                    <MenuLink key={link.title} link={link} />
                                ))}
                            </AccordionItem>
                            <AccordionItem title="For designere" startExpanded={location.pathname.includes("designer")}>
                                {designerLinks.map((link) => (
                                    <MenuLink key={link.title} link={link} />
                                ))}
                            </AccordionItem>
                            <AccordionItem
                                title="For utviklere"
                                startExpanded={location.pathname.includes("developer")}
                            >
                                {developerLinks.map((link) => (
                                    <MenuLink key={link.title} link={link} />
                                ))}
                            </AccordionItem>
                            <AccordionItem
                                title="Komponenter"
                                startExpanded={location.pathname.includes("documentation")}
                            >
                                <>
                                    <ActionTextField
                                        action={{
                                            icon: "clear",
                                            label: "Nullstill filter",
                                            onClick: () => setFilter(""),
                                        }}
                                        label="Filtrér komponenter"
                                        value={filter}
                                        variant="small"
                                        type="text"
                                        className="portal-menu__search jkl-spacing--top-1 jkl-spacing--bottom-1"
                                        forceCompact
                                        onChange={(e) => setFilter(e.target.value)}
                                    />
                                    {components.map((edge: DocumentationPage) => (
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
                                    <MenuLink key={link.title} link={link} />
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
