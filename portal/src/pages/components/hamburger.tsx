import React from "react";
import ReactMarkdown from "react-markdown";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { HamburgerExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-hamburger/README.md";
import changelog from "!raw-loader!@fremtind/jkl-hamburger/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-hamburger-react/CHANGELOG.md";

export default function HamburgerPage() {
    return (
        <ComponentLayout title="Hamburger meny" mainExample={<HamburgerExample />} packageName="hamburger">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
