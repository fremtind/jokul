// @ts-ignore
import ButtonExampleCode from "!raw-loader!../../examples/AccordionExample";
// @ts-ignore
import AccordionMarkdown from "!raw-loader!@fremtind/jkl-accordion/README.md";
import React from "react";
import ReactMarkdown from "react-markdown";
import { AccordionExample } from "../../examples/AccordionExample";
import Layout from "../../components/Layout/Layout";
import { PrismHighlightedCode } from "../../components/PrismHighlightedCode";
import { renderer } from "../../presentation/markdownRenderer";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Trekkspillliste</h2>
            <div>
                <div className="portal-content__example">
                    <AccordionExample />
                </div>

                <Accordion>
                    <AccordionItem title="Kode">
                        <PrismHighlightedCode>{ButtonExampleCode}</PrismHighlightedCode>
                    </AccordionItem>
                </Accordion>
            </div>
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={AccordionMarkdown} />
            </div>
        </Layout>
    );
}
