import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout/Layout";
import { Example } from "../../components/Example/Example";
import { Changelog } from "../../components/Changelog/Changelog";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-accordion/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-accordion/CHANGELOG.md";
/* Import code to be rendered as example */
import { accordionExample } from "../../examples/AccordionExample";
/* Import components used in the example, and expose them in an object */
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

// @ts-ignore
import accordionType from "!raw-loader!@fremtind/jkl-accordion-react/build/Accordion.d.ts";
// @ts-ignore
import accordionItemType from "!raw-loader!@fremtind/jkl-accordion-react/build/AccordionItem.d.ts";

export default function AccordionPage() {
    return (
        <Layout
            title="Trekkspilliste"
            mainExample={
                <Example
                    exampleComponents={{ Accordion, AccordionItem }}
                    exampleCode={accordionExample}
                    types={[
                        { name: "accordion", type: accordionType },
                        { name: "accordionItem", type: accordionItemType },
                    ]}
                />
            }
        >
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
            <Changelog changelog={changelog} />
        </Layout>
    );
}
