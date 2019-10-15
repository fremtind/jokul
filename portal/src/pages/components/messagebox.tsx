import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { MessageBoxExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-message-box/README.md";
import changelog from "!raw-loader!@fremtind/jkl-message-box/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-message-box-react/CHANGELOG.md";

export default function MessageBoxPage() {
    return (
        <ComponentLayout title="Meldingskomponenter" mainExample={<MessageBoxExample />} packageName="message-box">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
