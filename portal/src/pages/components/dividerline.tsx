import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { DividerLineExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-divider-line/README.md";
import changelog from "!raw-loader!@fremtind/jkl-divider-line/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-divider-line-react/CHANGELOG.md";

export default function DividerLinePage() {
    return (
        <ComponentLayout title="Delelinje" mainExample={<DividerLineExample />} packageName="divider-line">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
