import React from "react";
import { Link } from "gatsby";
import { LocationProvider } from "@reach/router";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { coreLinks, developerLinks, designerLinks, componentLinks, profileLinks } from "./links";

import "./Menu.scss";

export function Menu() {
    return (
        <LocationProvider>
            {({ location }) => (
                <nav className="portal-menu">
                    <Accordion>
                        <AccordionItem
                            title="Grunnleggende"
                            startExpanded={location.pathname.includes("core") || location.pathname === "/"}
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

                        <AccordionItem title="Profilelementer" startExpanded={location.pathname.includes("profile")}>
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
                        <AccordionItem title="For utviklere" startExpanded={location.pathname.includes("developer")}>
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
                </nav>
            )}
        </LocationProvider>
    );
}
