import React from "react";
import ReactMarkdown from "react-markdown";
import WebComponentInfo from "../../components/Info/WebComponentInfo";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { SelectExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-select/README.md";
import changelog from "!raw-loader!@fremtind/jkl-select/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-select-react/CHANGELOG.md";

export default function DropdownPage() {
    return (
        <ComponentLayout title="Nedtrekksliste" mainExample={<SelectExample />} packageName="select">
            <WebComponentInfo />
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
