import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { DividerLineExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-divider-line/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-divider-line/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-divider-line-react/CHANGELOG.md";

export default function DividerLinePage() {
    return (
        <Layout title="Delelinje" mainExample={<DividerLineExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
