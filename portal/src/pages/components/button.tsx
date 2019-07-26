import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { ButtonExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-button/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-button/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-button-react/CHANGELOG.md";

export default function ButtonPage() {
    return (
        <ComponentLayout title="Knapper" mainExample={<ButtonExample />} packageName="button">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
