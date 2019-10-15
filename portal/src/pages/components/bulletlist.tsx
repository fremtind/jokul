import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { BulletListExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-bullet-list/README.md";
import changelog from "!raw-loader!@fremtind/jkl-bullet-list/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-bullet-list-react/CHANGELOG.md";

export default function BulletListPage() {
    return (
        <ComponentLayout title="Liste" mainExample={<BulletListExample />} packageName="bullet-list">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
