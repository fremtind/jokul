import React from "react";

import "./Typography.scss";

export const DesktopExample = () => (
    <table className="jkl-typography-example-table">
        <tr>
            <th className="jkl-typography-example-table__header">Stilnavn</th>
            <th className="jkl-typography-example-table__header">Mixin</th>
            <th className="jkl-typography-example-table__header">Utility-klasse</th>
        </tr>
        <ExampleRow text="Title large" style="title-large" type="desktop" />
        <ExampleRow text="Title small" style="title-small" type="desktop" />
        <ExampleRow text="Heading large" style="heading-large" type="desktop" />
        <ExampleRow text="Heading medium" style="heading-medium" type="desktop" />
        <ExampleRow text="Heading small" style="heading-small" type="desktop" />
        <ExampleRow text="Lead" style="lead" type="desktop" />
        <ExampleRow text="Body" style="body" type="desktop" />
        <ExampleRow text="Small" style="small" type="desktop" />
        <ExampleRow text="Micro" style="micro" type="desktop" />
    </table>
);

export const CompactExample = () => (
    <table className="jkl-typography-example-table" data-compactlayout>
        <tr>
            <th className="jkl-typography-example-table__header">Stilnavn</th>
            <th className="jkl-typography-example-table__header">Mixin</th>
            <th className="jkl-typography-example-table__header">Utility-klasse</th>
        </tr>
        <ExampleRow text="Title large" style="title-large" type="compact" />
        <ExampleRow text="Title small" style="title-small" type="compact" />
        <ExampleRow text="Heading large" style="heading-large" type="compact" />
        <ExampleRow text="Heading medium" style="heading-medium" type="compact" />
        <ExampleRow text="Heading small" style="heading-small" type="compact" />
        <ExampleRow text="Lead" style="lead" type="compact" />
        <ExampleRow text="Body" style="body" type="compact" />
        <ExampleRow text="Small" style="small" type="compact" />
        <ExampleRow text="Micro" style="micro" type="compact" />
    </table>
);

interface ExampleRowProps {
    text: string;
    style: string;
    type: "desktop" | "compact";
}
const ExampleRow = ({ text, style, type }: ExampleRowProps) => (
    <tr className="jkl-typography-example-table__row">
        <td className="jkl-typography-example-table__data">
            <p className={`jkl-${style}`}>{text}</p>
        </td>
        <td data-header="Mixin:" className="jkl-typography-example-table__data">
            <p className="jkl-small">
                <code className="jkl-portal-inline-code">{`@include jkl-text-style("${type}/${style}")`}</code>
            </p>
        </td>
        <td data-header="Klasse:" className="jkl-typography-example-table__data">
            <p className="jkl-small">
                <code className="jkl-portal-inline-code">.jkl-{style}</code>
            </p>
        </td>
    </tr>
);
