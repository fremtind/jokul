import React, { useState } from "react";

import "./Spacing.scss";

function stringLiteralArray<T extends string>(a: T[]) {
    return a;
}

const componentSpacings = stringLiteralArray([
    "component-spacing--xxs",
    "component-spacing--xs",
    "component-spacing--small",
    "component-spacing--medium",
    "component-spacing--large",
    "component-spacing--xl",
    "component-spacing--xxl",
    "component-spacing--giant",
]);

const layoutSpacings = stringLiteralArray([
    "layout-spacing--small",
    "layout-spacing--medium",
    "layout-spacing--large",
    "layout-spacing--xl",
    "layout-spacing--xxl",
]);

type spacingClass = typeof componentSpacings[number] | typeof layoutSpacings[number];

const SpacingTableRow: React.FC<{ spacing: spacingClass }> = ({ spacing }) => {
    const getComputedProperty = (node: HTMLElement | null, cssProperty: string) => {
        return (node && window?.getComputedStyle(node)?.getPropertyValue(cssProperty)) || "N/A";
    };
    const [pxValue, setPxValue] = useState<string>("N/A");
    const ref = (node: HTMLDivElement | null) => {
        setPxValue(getComputedProperty(node, "margin-top"));
    };
    const baseFontSize = 16; // 1rem = 16px
    const remValue = pxValue !== "N/A" ? parseInt(pxValue) / baseFontSize : pxValue;
    return (
        <tr className="jkl-portal-spacing-example-table__row">
            <td data-header="Spacing:" className="jkl-portal-spacing-example-table__data">
                <div className={`jkl-${spacing}-top`} style={{ display: "none" }} ref={ref} />
                <div
                    aria-label={`${spacing},  ${pxValue}`}
                    style={{ backgroundColor: "currentColor", width: `${remValue}rem`, height: `${remValue}rem` }}
                    title={pxValue}
                />
            </td>
            <td data-header="Variabel:" className="jkl-portal-spacing-example-table__data">
                <code className="jkl-portal-inline-code">${spacing}</code>
            </td>
            <td data-header="Klasse:" className="jkl-portal-spacing-example-table__data">
                <code className="jkl-portal-inline-code">{`.jkl-${spacing}-<top|right|bottom|left|all>`}</code>
            </td>
        </tr>
    );
};

const SpacingTable: React.FC<{ values: spacingClass[] }> = ({ values }) => (
    <table className="jkl-portal-spacing-example-table">
        <thead>
            <tr>
                <th className="jkl-portal-spacing-example-table__header">Spacing</th>
                <th className="jkl-portal-spacing-example-table__header">Variabel</th>
                <th className="jkl-portal-spacing-example-table__header">Klasse</th>
            </tr>
        </thead>
        <tbody>
            {values.map((value, idx) => (
                <SpacingTableRow key={idx} spacing={value} />
            ))}
        </tbody>
    </table>
);

export const ComponentSpacingTable = () => <SpacingTable values={componentSpacings} />;
export const LayoutSpacingTable = () => <SpacingTable values={layoutSpacings} />;
