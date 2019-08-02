import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { LogoStampExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-logo/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-logo/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-logo-react/CHANGELOG.md";

export default function LogoPage() {
    return (
        <ComponentLayout title="Logo stempel" mainExample={<LogoStampExample />} packageName="logo">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
