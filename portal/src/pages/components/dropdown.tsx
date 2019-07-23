import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { DropdownExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-dropdown/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-dropdown/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-dropdown-react/CHANGELOG.md";

export default function DropdownPage() {
    return (
        <ComponentLayout title="Nedtrekksliste" mainExample={<DropdownExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
