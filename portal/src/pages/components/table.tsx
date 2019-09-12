import React from "react";
import ReactMarkdown from "react-markdown";
import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { TableExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-table/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-table/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-table-react/CHANGELOG.md";

export default function TablePage() {
    return (
        <ComponentLayout title="Tabell" mainExample={<TableExample />} packageName="table">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
