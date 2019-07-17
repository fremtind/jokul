import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { fremtindLight } from "../../utils/utils";

import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

import "./Example.scss";

interface Props {
    exampleComponents: {};
    exampleCode: string;
}

export function Example({ exampleComponents, exampleCode }: Props) {
    return (
        <LiveProvider scope={exampleComponents} code={exampleCode} theme={fremtindLight}>
            <LivePreview className="portal-content__example" />
            <Accordion>
                <AccordionItem title="Kode">
                    <LiveEditor />
                    <LiveError />
                </AccordionItem>
            </Accordion>
        </LiveProvider>
    );
}
