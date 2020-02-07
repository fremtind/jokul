import React, { useState, useMemo } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { LocationProvider } from "@reach/router";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { ComponentDocPage, staticLinks, mainMenu } from "./links";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import { FilterField } from "./FilterField";

import "./Menu.scss";

export function Menu() {
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

    const [filter, setFilter] = useState("");

    const filteredMenu = useMemo(() => {
        if (filter === "") {
            return mainMenu(allMarkdownRemark, componentDocumentationPage);
        }

        const filteredComponents = componentDocumentationPage.edges.filter((edge: ComponentDocPage) =>
            edge.node.context.frontmatter.title.toLowerCase().includes(filter.toLowerCase()),
        );

        return mainMenu(allMarkdownRemark, { edges: filteredComponents });
    }, [filter]);

    return (
        <LocationProvider>
            {({ location }) => (
                <>
                    <nav className="portal-menu">
                        <Accordion>
                            {filteredMenu.map(({ sectionTitle, pages, matchingLocation }) => (
                                <AccordionItem
                                    key={sectionTitle}
                                    title={sectionTitle}
                                    startExpanded={matchingLocation(location)}
                                >
                                    {/* TODO Sjekk med Joachim om denne skal fjernes */}
                                    {/* {sectionTitle === "Komponenter" && (
                                        <FilterField filter={filter} setFilter={setFilter} />
                                    )} */}
                                    {pages.map(({ title, path }) => (
                                        <Link
                                            key={title}
                                            className="portal-menu__link"
                                            activeClassName="portal-menu__link--current"
                                            to={path}
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <hr className="portal-menu-hr" />
                        {staticLinks.map(({ linkText, href, className }) => (
                            <a className={`portal-menu__link jkl-body ${className}`} href={href} key={linkText}>
                                {linkText}
                            </a>
                        ))}
                    </nav>
                </>
            )}
        </LocationProvider>
    );
}
