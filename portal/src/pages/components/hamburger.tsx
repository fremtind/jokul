import React from "react";
import ReactMarkdown from "react-markdown";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { HamburgerExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-hamburger/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-hamburger/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-hamburger-react/CHANGELOG.md";

export default function HamburgerPage() {
    return (
        <ComponentLayout title="Hamburger meny" mainExample={<HamburgerExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
