import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { RadioButtonExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-radio-button/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-radio-button/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-radio-button-react/CHANGELOG.md";

export default function RadioButtonPage() {
    return (
        <Layout title="Radioknapp" mainExample={<RadioButtonExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
