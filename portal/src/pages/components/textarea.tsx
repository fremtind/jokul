import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { TextAreaExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-text-input/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-text-input/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-text-input-react/CHANGELOG.md";

export default function TextAreaPage() {
    return (
        <ComponentLayout title="Lang tekstfelt" mainExample={<TextAreaExample />} packageName="text-input">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
