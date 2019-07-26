import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { LoaderExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-loader/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-loader/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-loader-react/CHANGELOG.md";

export default function LoaderPage() {
    return (
        <ComponentLayout title="Lasteindikator" mainExample={<LoaderExample />} packageName="loader">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
