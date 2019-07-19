import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { TypographyExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-typography-react/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-core/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-typography-react/CHANGELOG.md";

export default function TypographyPage() {
    return (
        <Layout title="Typografi" mainExample={<TypographyExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
