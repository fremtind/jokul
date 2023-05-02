import React, { useState, FC } from "react";

import "./Spacing.scss";

function stringLiteralArray<T extends string>(a: T[]) {
    return a;
}

const spacings = stringLiteralArray(["2", "4", "8", "12", "16", "24", "32", "40", "64", "104", "168"]);

type Spacing = (typeof spacings)[number];

const SpacingTableRow: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
    const getComputedProperty = (node: HTMLElement | null, cssProperty: string) => {
        return (node && window?.getComputedStyle(node)?.getPropertyValue(cssProperty)) || "N/A";
    };
    const [pxValue, setPxValue] = useState<string>("N/A");
    const ref = (node: HTMLDivElement | null) => {
        setPxValue(getComputedProperty(node, "margin-top"));
    };
    const baseFontSize = 16; // 1rem = 16px
    const remValue = pxValue !== "N/A" ? parseInt(pxValue) / baseFontSize : pxValue;

    // Bruker ikke useBrowserPreferences her pga sirkulær avhengighet. Ikke følg dette eksempelet!
    const forcedColors =
        typeof window !== "undefined" && window.matchMedia
            ? window.matchMedia("(forced-colors: active)").matches
            : false;

    return (
        <tr className="jkl-portal-spacing-example-table__row">
            <td data-header="Spacing:" className="jkl-portal-spacing-example-table__data">
                <div className={`jkl-spacing-${spacing}--top`} style={{ display: "none" }} ref={ref} />
                <div
                    aria-label={`${spacing},  ${pxValue}`}
                    style={{
                        backgroundColor: forcedColors ? "CanvasText" : "currentColor",
                        width: `${remValue}rem`,
                        height: `${remValue}rem`,
                    }}
                />
            </td>
            <td data-header="Variabel:" className="jkl-portal-spacing-example-table__data">
                <code className="jkl-portal-inline-code">jkl.${`spacing-${spacing}`}</code>
                <br />
                <code className="jkl-portal-inline-code">{`var(--jkl-spacing-${spacing})`}</code>
            </td>
            <td data-header="Pixelverdi:" className="jkl-portal-spacing-example-table__data">
                <code className="jkl-portal-inline-code">{pxValue}</code>
            </td>
            <td data-header="Rem:" className="jkl-portal-spacing-example-table__data">
                <code className="jkl-portal-inline-code">{remValue}rem</code>
            </td>
        </tr>
    );
};

const SpacingTable: React.FC<{ values: Spacing[] }> = ({ values }) => (
    <table className="jkl-portal-spacing-example-table">
        <thead>
            <tr>
                <th className="jkl-portal-spacing-example-table__header">Spacing</th>
                <th className="jkl-portal-spacing-example-table__header">Variabel</th>
                <th className="jkl-portal-spacing-example-table__header">Piksler</th>
                <th className="jkl-portal-spacing-example-table__header">Rem</th>
            </tr>
        </thead>
        <tbody>
            {values.map((value, idx) => (
                <SpacingTableRow key={idx} spacing={value} />
            ))}
        </tbody>
    </table>
);

export const SpacingScaleTable: FC = () => <SpacingTable values={spacings} />;
