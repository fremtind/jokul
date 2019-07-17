import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer, changelogRenderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-button/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-button/CHANGELOG.md";
/* Import code to be rendered as example */
import { buttonExample } from "../../examples/ButtonExample";
/* Import components used in the example, and expose them in an object */
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Knapper</h2>
            <Example
                exampleComponents={{ PrimaryButton, SecondaryButton, TertiaryButton }}
                exampleCode={buttonExample}
            />
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
