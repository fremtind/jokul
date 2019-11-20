import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { ListExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-list/README.md";
import changelog from "!raw-loader!@fremtind/jkl-list/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-list-react/CHANGELOG.md";

export default function ListPage() {
    return (
        <ComponentLayout title="Liste" mainExample={<ListExample />} packageName="list">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
