// @ts-ignore
import ButtonExampleCode from "!raw-loader!../../examples/AccordionExample";
// @ts-ignore
import AccordionMarkdown from "!raw-loader!@fremtind/jkl-accordion/README.md";
import React from "react";
import ReactMarkdown from "react-markdown";
import { AccordionExample } from "../../examples/AccordionExample";
import Layout from "../../components/layout";
import { PrismHighlightedCode } from "../../components/PrismHighlightedCode";
import { renderer } from "../../presentation/markdownRenderer";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import "./example.scss";

export default function Button() {
    return (
        <Layout>
            <h2 style={{ margin: "3rem 0" }} className="jkl-h1">
                Trekkspillliste
            </h2>
            <div>
                <div className="component-example">
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
