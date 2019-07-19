import React from "react";
import ReactMarkdown from "react-markdown";
import { changelogRenderer } from "../../presentation/markdownRenderer";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import "./Changelog.scss";

interface Props {
    changelog?: string;
    changelogReact?: string;
}

export function Changelog({ changelog, changelogReact }: Props) {
    return (
        <Accordion className="portal-changelog">
            {changelog && (
                <AccordionItem title="Style changelog">
                    <ReactMarkdown renderers={changelogRenderer} source={changelog} />
                </AccordionItem>
            )}
            {changelogReact && (
                <AccordionItem title="React changelog">
                    <ReactMarkdown renderers={changelogRenderer} source={changelogReact} />
                </AccordionItem>
            )}
        </Accordion>
    );
}
