import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { LocationProvider } from "@reach/router";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { coreLinks, developerLinks, designerLinks, componentLinks, profileLinks } from "./links";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";

import "./Menu.scss";

export function Menu() {
    const [showMenu, toggleShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = (show: boolean) => toggleShowMenu(show);

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
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                            <AccordionItem title="Komponenter" startExpanded={location.pathname.includes("components")}>
                                {componentLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="portal-menu__link"
                                        to={`/${link.section}/${link.page}`}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </AccordionItem>
                        </Accordion>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul"
                        >
                            Kode på Github
                        </a>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title="
                        >
                            Rapporter feil
                        </a>
                        <a
                            className="portal-menu__link portal-menu__link--github jkl-p"
                            href="https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title="
                        >
                            Forslag ny funksjon
                        </a>
                    </nav>
                </div>
            )}
        </LocationProvider>
    );
}
