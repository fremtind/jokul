import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { BulletListExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-bullet-list/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-bullet-list/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-bullet-list-react/CHANGELOG.md";

export default function BulletListPage() {
    return (
        <ComponentLayout title="Liste" mainExample={<BulletListExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
