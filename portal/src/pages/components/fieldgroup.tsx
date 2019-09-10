import React from "react";
import ReactMarkdown from "react-markdown";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { FieldGroupExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-field-group/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-field-group/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-field-group-react/CHANGELOG.md";

export default function FieldGroupPage() {
    return (
        <ComponentLayout title="Feltgruppering" mainExample={<FieldGroupExample />} packageName="field-group">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
