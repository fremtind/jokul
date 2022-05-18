import React, { FC } from "react";

import "./Typography.scss";

interface ExampleRowProps {
    text: string;
    style: string;
    type?: "small-screen" | "large-screen";
}
const ExampleRow = ({ text, style, type }: ExampleRowProps) => (
    <tr className={`jkl-typography-example-table__row ${type ? `force-${type}` : ""}`}>
        <td className="jkl-typography-example-table__data">
            <p className={`jkl-${style}`}>{text}</p>
        </td>
        <td data-header="Mixin:" className="jkl-typography-example-table__data">
            <p className="jkl-small">
                <code className="jkl-portal-inline-code">{`@include jkl.text-style("${style}${
                    type ? `/${type}` : ""
                }")`}</code>
            </p>
        </td>
        {!type && (
            <td data-header="Klasse:" className="jkl-typography-example-table__data">
                <p className="jkl-small">
                    <code className="jkl-portal-inline-code">.jkl-{style}</code>
                </p>
            </td>
        )}
    </tr>
);

export const NormalExample: FC = () => (
    <table className="jkl-typography-example-table">
        <tr>
            <th className="jkl-typography-example-table__header">Stilnavn</th>
            <th className="jkl-typography-example-table__header">Mixin</th>
            <th className="jkl-typography-example-table__header">Utility-klasse</th>
        </tr>
        <ExampleRow text="Title" style="title" />
        <ExampleRow text="Heading 1" style="heading-1" />
        <ExampleRow text="Heading 2" style="heading-2" />
        <ExampleRow text="Heading 3" style="heading-3" />
        <ExampleRow text="Heading 4" style="heading-4" />
        <ExampleRow text="Heading 5" style="heading-5" />
        <ExampleRow text="Body" style="body" />
        <ExampleRow text="Small" style="small" />
    </table>
);

export const SmallExample: FC = () => (
    <table className="jkl-typography-example-table" data-compactlayout>
        <tr>
            <th className="jkl-typography-example-table__header">Stilnavn</th>
            <th className="jkl-typography-example-table__header">Mixin</th>
        </tr>
        <ExampleRow text="Title" style="title" type="small-screen" />
        <ExampleRow text="Heading 1" style="heading-1" type="small-screen" />
        <ExampleRow text="Heading 2" style="heading-2" type="small-screen" />
        <ExampleRow text="Heading 3" style="heading-3" type="small-screen" />
        <ExampleRow text="Heading 4" style="heading-4" type="small-screen" />
        <ExampleRow text="Heading 5" style="heading-5" type="small-screen" />
        <ExampleRow text="Body" style="body" type="small-screen" />
        <ExampleRow text="Small" style="small" type="small-screen" />
    </table>
);

export const LargeExample: FC = () => (
    <table className="jkl-typography-example-table" data-compactlayout>
        <tr>
            <th className="jkl-typography-example-table__header">Stilnavn</th>
            <th className="jkl-typography-example-table__header">Mixin</th>
        </tr>
        <ExampleRow text="Title" style="title" type="large-screen" />
        <ExampleRow text="Heading 1" style="heading-1" type="large-screen" />
        <ExampleRow text="Heading 2" style="heading-2" type="large-screen" />
        <ExampleRow text="Heading 3" style="heading-3" type="large-screen" />
        <ExampleRow text="Heading 4" style="heading-4" type="large-screen" />
        <ExampleRow text="Heading 5" style="heading-5" type="large-screen" />
        <ExampleRow text="Body" style="body" type="large-screen" />
        <ExampleRow text="Small" style="small" type="large-screen" />
    </table>
);
