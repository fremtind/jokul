import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { LoaderExample } from "../../examples/LoaderExample";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-loader/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-loader/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-loader-react/CHANGELOG.md";

export default function LoaderPage() {
    return (
        <Layout title="Lasteindikator" mainExample={<LoaderExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
