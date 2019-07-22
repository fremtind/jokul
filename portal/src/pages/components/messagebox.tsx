import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { MessageBoxExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-message-box/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-message-box/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-message-box-react/CHANGELOG.md";

export default function MessageBoxPage() {
    return (
        <ComponentLayout title="Meldingskomponenter" mainExample={<MessageBoxExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
