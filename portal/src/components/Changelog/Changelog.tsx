import React from "react";
import ReactMarkdown from "react-markdown";
import { changelogRenderer } from "../../presentation/markdownRenderer";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

interface Props {
    changelog: string;
}

export function Changelog({ changelog }: Props) {
    return (
        <Accordion>
            <AccordionItem title="Changelog">
                <ReactMarkdown renderers={changelogRenderer} source={changelog} />
            </AccordionItem>
        </Accordion>
    );
}
