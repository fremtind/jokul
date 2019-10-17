import React from "react";
import ReactMarkdown from "react-markdown";
import WebComponentInfo from "../../components/Info/WebComponentInfo";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { AccordionExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-accordion/README.md";
import changelog from "!raw-loader!@fremtind/jkl-accordion/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-accordion-react/CHANGELOG.md";

export default function AccordionPage() {
    return (
        <ComponentLayout title="Trekkspilliste" mainExample={<AccordionExample />} packageName="accordion">
            <WebComponentInfo />
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
