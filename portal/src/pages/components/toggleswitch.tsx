import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { ToggleSwitchExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-toggle-switch/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-toggle-switch/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-toggle-switch-react/CHANGELOG.md";

export default function ToggleSwitchPage() {
    return (
        <ComponentLayout title="Toggle-knapp" mainExample={<ToggleSwitchExample />} packageName="toggle-switch">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
