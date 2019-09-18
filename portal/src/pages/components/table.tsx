import { WarningMessage } from "@fremtind/jkl-message-box-react/src";
import { Link } from "@fremtind/jkl-typography-react";
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
            <WarningMessage fullWidth title="Fokusring i tabellen" className="jkl-spacing--top-1">
                Denne komponenten bruker{" "}
                <span>
                    <code>:focus-within </code>
                </span>
                for å vise fokus-ring ved tab navigasjon som{" "}
                <Link href="https://caniuse.com/#search=focus-within">ikke er støttet i IE/Edge.</Link> Er du avhenging
                av riktig visning i browsere som ikke er støttet så kan man bruke{" "}
                <Link href="https://www.npmjs.com/package/focus-within-polyfill">dette polyfillet</Link>.
            </WarningMessage>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
