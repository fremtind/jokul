import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { fremtindLight, copyToClipboard } from "../../utils";
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
    exampleImport?: string;
}

export function Example({ exampleComponents, exampleCode, type, types, exampleImport }: Props) {
    const copyImport = () => copyToClipboard(exampleImport || "");

    return (
        <LiveProvider scope={exampleComponents} code={exampleCode} theme={fremtindLight}>
            <LivePreview className="portal-content__example" />
            <Accordion>
                <AccordionItem title="Kode">
                    <LiveEditor />
                    <LiveError />
                    {exampleImport && (
                        <button onClick={copyImport} className="portal-content__section portal-content__section--copy">
                            <h4 className="jkl-h4">Import</h4>
                            <p className="jkl-small">Klikk for å kopiere</p>
                            <PrismHighlightedCode>{exampleImport}</PrismHighlightedCode>
                        </button>
                    )}
                    {type && (
                        <div className="portal-content__section">
                            <h4 className="jkl-h4">Type</h4>
                            <PrismHighlightedCode>{getInterface(type)}</PrismHighlightedCode>
                        </div>
                    )}
                    {types &&
                        types.map((type) => (
                            <div key={type.name} className="portal-content__section">
                                <h4 className="jkl-h4">Type: {type.name}</h4>
                                <PrismHighlightedCode>{getInterface(type.type)}</PrismHighlightedCode>
                            </div>
                        ))}
                </AccordionItem>
            </Accordion>
        </LiveProvider>
    );
}
