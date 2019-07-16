import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer, changelogRenderer } from "../../presentation/markdownRenderer";

/* Import readme fil../../components/Layouth !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-button/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-button/CHANGELOG.md";

/* Import each example here both with and without !raw-loader! */
/* These are then used with the Example-component to show an example with expandable code */
// @ts-ignore
import ButtonExampleCode from "!raw-loader!../../examples/ButtonExample";
import { ButtonExample } from "../../examples/ButtonExample";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Knapper</h2>
            <Example exampleComponent={<ButtonExample />} exampleCode={ButtonExampleCode} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
            <Accordion>
                <AccordionItem title="Changelog">
                    <ReactMarkdown renderers={changelogRenderer} source={changelog} />
                </AccordionItem>
            </Accordion>
        </Layout>
    );
}
