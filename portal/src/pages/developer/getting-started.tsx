import React from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import Layout from "../../components/Layout/Layout";
import { renderer } from "../../presentation/markdownRenderer";

// @ts-ignore
import GettingStaredMarkdown from "!raw-loader!../../../../guides/GettingStarted.md";

const GettingStarted = () => {
    return (
        <Layout>
            <Accordion>
                <AccordionItem title="Kom i gang" startExpanded>
                    <ReactMarkdown renderers={renderer} source={GettingStaredMarkdown} />
                </AccordionItem>
            </Accordion>
        </Layout>
    );
};

export default GettingStarted;
