import React, { VFC, useState } from "react";

import "./SpacingTable.scss";

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
    "layout-spacing--xs",
    "layout-spacing--small",
    "layout-spacing--medium",
    "layout-spacing--large",
    "layout-spacing--xl",
    "layout-spacing--xxl",
]);

type spacingClass = typeof componentSpacings[number] | typeof layoutSpacings[number];

const SpacingTableRow: VFC<{ spacing: spacingClass }> = ({ spacing }) => {
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
        <tr className="jkl-portal-spacing-table__row">
            <td data-header="Navn:" className="jkl-portal-spacing-table__data">
                {spacing}
            </td>
            <td data-header="rem:" className="jkl-portal-spacing-table__data">
                {remValue}
            </td>
            <td data-header="px:" className="jkl-portal-spacing-table__data">
                {pxValue}
            </td>
            <td data-header="Eksempel:" className="jkl-portal-spacing-table__data">
                <div className={`jkl-${spacing}-top`} style={{ display: "none" }} ref={ref} />
                <div
                    style={{ backgroundColor: "currentColor", width: `${remValue}rem`, height: `${remValue}rem` }}
                    title={pxValue}
                />
            </td>
        </tr>
    );
};

const SpacingTable: VFC<{ values: spacingClass[] }> = ({ values }) => (
    <table className="jkl-portal-spacing-table">
        <thead>
            <tr>
                <th className="jkl-portal-spacing-table__header">Navn</th>
                <th className="jkl-portal-spacing-table__header">rem</th>
                <th className="jkl-portal-spacing-table__header">px</th>
                <th className="jkl-portal-spacing-table__header">Eksempel</th>
            </tr>
        </thead>
        <tbody>
            {values.map((value, idx) => (
                <SpacingTableRow key={idx} spacing={value} />
            ))}
        </tbody>
    </table>
);

export const ComponentSpacingTable: VFC = () => <SpacingTable values={componentSpacings} />;
export const LayoutSpacingTable: VFC = () => <SpacingTable values={layoutSpacings} />;
