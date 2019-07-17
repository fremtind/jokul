import React from "react";
import { Link } from "gatsby";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { coreLinks, developerLinks, designerLinks, componentLinks, profileLinks } from "./links";

import "./Menu.scss";

const shouldBeOpen = (section = "string") => window && window.location && window.location.pathname.includes(section);
const startOpen = () => window && window.location && window.location.pathname === "/";

export function Menu() {
    return (
        <nav className="portal-menu">
            <Accordion>
                <AccordionItem title="Grunnleggende" startExpanded={shouldBeOpen("core") || startOpen()}>
                    {coreLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>

                <AccordionItem title="Profilelementer" startExpanded={shouldBeOpen("profile")}>
                    {profileLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>
                <AccordionItem title="For designere" startExpanded={shouldBeOpen("designer")}>
                    {designerLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>
                <AccordionItem title="For utviklere" startExpanded={shouldBeOpen("developer")}>
                    {developerLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>
                <AccordionItem title="Komponenter" startExpanded={shouldBeOpen("components")}>
                    {componentLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>
            </Accordion>
        </nav>
    );
}
