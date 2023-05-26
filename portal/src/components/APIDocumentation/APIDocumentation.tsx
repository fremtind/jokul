import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { DataTable } from "@fremtind/jkl-table-react";
import React, { useRef, FC, useEffect } from "react";
import type { ComponentDoc, PropItem } from "react-docgen-typescript";
import { CodeBlock } from "../Typography";
import { getRows, handleScroll, isExternalProp, isOwnProp, setScrollShadows } from "./utils";
import "./APIDocumentation.scss";

interface PropsTableProps {
    props: PropItem[];
}

const PropsTable: FC<PropsTableProps> = ({ props }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        /*
         * Setter opp en MutationObserver for å sette riktig skygge når AccordionItem åpnes/lukkes.
         * Litt kronglete, men nødvendig for å få skyggen siden alle størrelsesverdier på tabellen er 0
         * når den er skjult.
         */
        const wrapper = wrapperRef.current;
        if (wrapper && window.MutationObserver) {
            const observer = new window.MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === "attributes" && mutation.attributeName === "hidden") {
                        const table = wrapper.querySelector<HTMLTableElement>(".jkl-portal-api-docs-table__table");
                        table && setScrollShadows(table, wrapper);
                    }
                });
            });

            // Dette er core-toggle elementet i AccordionItem, som får togglet "hidden"
            // eslint-disable-next-line
            const accordionItemContentWrapper = wrapperRef.current.parentElement!.parentElement!;

            observer.observe(accordionItemContentWrapper, {
                attributes: true,
                attributeFilter: ["hidden"],
            });
        }
    }, []);

    return (
        <div ref={wrapperRef} className="jkl-portal-api-docs-table">
            <div onScroll={handleScroll} className="jkl-portal-api-docs-table__wrapper">
                <DataTable
                    className="jkl-portal-api-docs-table__table"
                    verticalAlign="top"
                    columns={["Prop", "Beskrivelse", "Standardverdi", "Påkrevd", "Type"]}
                    rows={getRows(props)}
                />
            </div>
        </div>
    );
};

interface APIDocumentationProps {
    types: {
        [x: string]: ComponentDoc;
    };
}

const includeJsDoc = (propTypes: { description: string; tags?: { param?: string; returns?: string } }) => {
    if (!propTypes.description && !propTypes.tags?.param && !propTypes.tags?.returns) {
        return "";
    }

    const description: string | undefined = propTypes.description
        ?.split("\n")
        .map((line) => ` * ${line}`)
        .join("\n");

    const params: string | undefined = propTypes.tags?.param
        ?.split("\n")
        .map((param) => ` * @param ${param}`)
        .join("\n");

    const returns: string | undefined = propTypes.tags?.returns ? ` * @returns ${propTypes.tags.returns}` : undefined;

    const lines = ["/**", description, " *", params, returns, ` */`];

    return lines.filter((line) => Boolean(line)).join("\n");
};

export const APIDocumentation: FC<APIDocumentationProps> = ({ types }) => {
    return (
        <section className="mb-104 jkl-portal-paragraph">
            <h2 className="h1 mt-104">React API</h2>
            <p className="body mt-16">Her finner du en oversikt over props på komponentene i pakken.</p>
            <Accordion className="mt-40 jkl-portal-api-docs">
                {Object.entries(types).map(([displayName, propTypes]) => {
                    const ownProps = propTypes.props ? Object.values(propTypes.props).filter(isOwnProp) : [];
                    const externalProps = propTypes.props ? Object.values(propTypes.props).filter(isExternalProp) : [];
                    const jsDoc = includeJsDoc(propTypes);

                    return (
                        <AccordionItem title={displayName} key={displayName} className="jkl-portal-api-docs__item">
                            {jsDoc && <CodeBlock className="jkl-portal-code-block">{jsDoc}</CodeBlock>}
                            {ownProps.length > 0 && <PropsTable props={ownProps} />}
                            {externalProps.length > 0 && (
                                <>
                                    <p className="jkl-portal-api-docs__external-props-header">Arvede props</p>
                                    <PropsTable props={externalProps} />
                                </>
                            )}
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </section>
    );
};
