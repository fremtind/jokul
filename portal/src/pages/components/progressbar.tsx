import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { ProgressBarExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-progress-bar/README.md";
import changelog from "!raw-loader!@fremtind/jkl-progress-bar/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-progress-bar-react/CHANGELOG.md";

export default function ProgressBarPage() {
    return (
        <ComponentLayout title="Fremdriftsindikator" mainExample={<ProgressBarExample />} packageName="progress-bar">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
