import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { CheckboxExample } from "../../examples";

import readmeContents from "!raw-loader!@fremtind/jkl-checkbox/README.md";
import changelog from "!raw-loader!@fremtind/jkl-checkbox/CHANGELOG.md";
import changelogReact from "!raw-loader!@fremtind/jkl-checkbox-react/CHANGELOG.md";

export default function CheckboxPage() {
    return (
        <ComponentLayout title="Avmerkingsbokser" mainExample={<CheckboxExample />} packageName="checkbox">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
