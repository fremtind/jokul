import React from "react";
import { Link } from "gatsby";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

import "./Menu.scss";

const makeLink = (title: string, page: string, section?: string) => ({
    title,
    page,
    section,
});

const makeDeveloperLink = (title: string, page: string) => makeLink(title, page, "developer");

const developerLinks = [
    makeDeveloperLink("Kom i gang", "getting-started"),
    makeDeveloperLink("Bidragsguide", "contribute"),
];

export function Menu() {
    return (
        <nav className="portal-menu">
            <Accordion>
                <AccordionItem title="Grunnleggende" startExpanded={true}>
                    <Link className="portal-menu__link" to="/">
                        Designprinsipper
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Farger
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Typografi
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Bevegelse
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Spacing
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Stil og tone
                    </Link>
                </AccordionItem>
                <AccordionItem title="Profilelementer">
                    <Link className="portal-menu__link" to="/">
                        Logo
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Farger
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Bildestil
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Illustrasjon
                    </Link>
                    <Link className="portal-menu__link" to="/">
                        Ikoner
                    </Link>
                </AccordionItem>
                <AccordionItem title="For utviklere">
                    {developerLinks.map((link) => (
                        <Link key={link.title} className="portal-menu__link" to={`/${link.section}/${link.page}`}>
                            {link.title}
                        </Link>
                    ))}
                </AccordionItem>
                <AccordionItem title="Komponenter">
                    <Link className="portal-menu__link" to="/components/button/">
                        Knapper
                    </Link>
                    <Link className="portal-menu__link" to="/components/accordion/">
                        Trekkspilliste
                    </Link>
                    <Link className="portal-menu__link" to="/components/datepicker/">
                        Datovelger
                    </Link>
                </AccordionItem>
            </Accordion>
        </nav>
    );
}
