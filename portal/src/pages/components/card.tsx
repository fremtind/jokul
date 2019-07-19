import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { CardExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-card/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-card/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-card-react/CHANGELOG.md";

export default function CardPage() {
    return (
        <Layout title="Kort" mainExample={<CardExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
