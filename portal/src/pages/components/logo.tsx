import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { LogoExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-logo/README.md";
import changelog from "!raw-loader!@fremtind/jkl-logo/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-logo-react/CHANGELOG.md";

export default function LogoPage() {
    return (
        <ComponentLayout title="Logo" mainExample={<LogoExample />} packageName="logo">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
