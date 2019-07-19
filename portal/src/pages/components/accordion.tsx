import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { AccordionExample } from "../../examples/AccordionExample";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-accordion/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-accordion/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-accordion-react/CHANGELOG.md";

export default function AccordionPage() {
    return (
        <Layout title="Trekkspilliste" mainExample={<AccordionExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
