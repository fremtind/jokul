import React from "react";
import ReactMarkdown from "react-markdown";
import WebComponentInfo from "../../components/Info/WebComponentInfo";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { DropdownExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-dropdown/README.md";
import changelog from "!raw-loader!@fremtind/jkl-dropdown/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-dropdown-react/CHANGELOG.md";

export default function DropdownPage() {
    return (
        <ComponentLayout title="Nedtrekksliste" mainExample={<DropdownExample />} packageName="dropdown">
            <WebComponentInfo />
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
