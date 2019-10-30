import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { CardExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-card/README.md";
import changelog from "!raw-loader!@fremtind/jkl-card/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-card-react/CHANGELOG.md";

export default function CardPage() {
    return (
        <ComponentLayout title="Kort" mainExample={<CardExample />} packageName="card">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
