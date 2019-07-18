import React from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { Layout } from "../../components/Layout/Layout";
import { renderer } from "../../presentation/markdownRenderer";
// @ts-ignore
import ContributeMarkdown from "!raw-loader!../../../../CONTRIBUTE.md";
// @ts-ignore
import PullRequestGuideMarkdown from "!raw-loader!../../../../guides/PullRequestGuide.md";
// @ts-ignore
import CodeGuideMarkdown from "!raw-loader!../../../../guides/CodeGuide.md";

export default function Contribute() {
    return (
        <Layout>
            <Accordion>
                <AccordionItem title="Hvordan bidra til Jøkul" startExpanded>
                    <div style={{ margin: "2rem 0" }}>
                        <ReactMarkdown renderers={renderer} source={ContributeMarkdown} />
                    </div>
                </AccordionItem>
                <AccordionItem title="Hvordan skrive kode til Jøkul">
                    <div style={{ margin: "2rem 0" }}>
                        <ReactMarkdown renderers={renderer} source={CodeGuideMarkdown} />
                    </div>
                </AccordionItem>
                <AccordionItem title="Hvordan sende pull request til Jøkul">
                    <div style={{ margin: "2rem 0" }}>
                        <ReactMarkdown renderers={renderer} source={PullRequestGuideMarkdown} />
                    </div>
                </AccordionItem>
            </Accordion>
        </Layout>
    );
}
