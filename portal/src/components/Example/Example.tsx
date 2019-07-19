import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { fremtindLight } from "../../utils/utils";
import { PrismHighlightedCode } from "../../components/PrismHighlightedCode";
import { getInterface } from "./getInterface";
import "./Example.scss";

interface TypeShape {
    name: string;
    type: string;
}

interface Props {
    exampleComponents: {};
    exampleCode: string;
    type?: string;
    types?: TypeShape[];
}

export function Example({ exampleComponents, exampleCode, type, types }: Props) {
    return (
        <LiveProvider scope={exampleComponents} code={exampleCode} theme={fremtindLight}>
            <LivePreview className="portal-content__example" />
            <Accordion>
                <AccordionItem title="Kode">
                    <LiveEditor />
                    <LiveError />
                    {type && (
                        <div className="portal-content__type">
                            <h4>Type</h4>
                            <PrismHighlightedCode>{getInterface(type)}</PrismHighlightedCode>
                        </div>
                    )}
                    {types &&
                        types.map((type) => (
                            <div key={type.name} className="portal-content__type">
                                <h4>Type: {type.name}</h4>
                                <PrismHighlightedCode>{getInterface(type.type)}</PrismHighlightedCode>
                            </div>
                        ))}
                </AccordionItem>
            </Accordion>
        </LiveProvider>
    );
}
