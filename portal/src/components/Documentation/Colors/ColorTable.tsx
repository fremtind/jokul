import React, { VFC, useEffect, useState } from "react";
import { Color, ColorSwatch, rgbToHex } from "./Colors";

import "./ColorTable.scss";

const ColorTableRow: VFC<Color> = ({ colorVariable }) => {
    const [color, setColor] = useState<number[]>();
    const [hexString, setHexString] = useState("N/A");
    const [rgbString, setRgbString] = useState("N/A");
    useEffect(() => {
        if (!!color && color.length === 3) {
            setHexString(rgbToHex(color));
            setRgbString(`${color[0]}, ${color[1]}, ${color[2]}`);
        }
    }, [color]);
    return (
        <tr className="jkl-portal-color-table__row">
            <td className="jkl-portal-color-table__data" data-header="Valør:">
                <ColorSwatch
                    setColor={setColor}
                    className="jkl-portal-color-table__swatch"
                    colorVariable={colorVariable}
                />
            </td>
            <td className="jkl-portal-color-table__data" data-header="Variabelnavn:">
                {colorVariable}
            </td>
            <td className="jkl-portal-color-table__data" data-header="Hex:">
                {hexString}
            </td>
            <td className="jkl-portal-color-table__data" data-header="RGB:">
                {rgbString}
            </td>
        </tr>
    );
};

interface ColorTableProps {
    colorVariables: string[];
}
export const ColorTable: VFC<ColorTableProps> = ({ colorVariables }) => {
    return (
        <table className="jkl-portal-color-table">
            <thead>
                <tr>
                    <th className="jkl-portal-color-table__header">Valør</th>
                    <th className="jkl-portal-color-table__header">Variabelnavn i Figma</th>
                    <th className="jkl-portal-color-table__header">Hex</th>
                    <th className="jkl-portal-color-table__header">RGB</th>
                </tr>
            </thead>
            <tbody>
                {colorVariables.map((colorVariable) => (
                    <ColorTableRow key={colorVariable} colorVariable={colorVariable} />
                ))}
            </tbody>
        </table>
    );
};

const fargetoner: string[] = [
    "hvit",
    "snohvit",
    "sand",
    "dis",
    "varde",
    "svaberg",
    "stein",
    "fjellgra",
    "skifer",
    "granitt",
    "svart",
];

export const ColTable: VFC = () => <ColorTable colorVariables={fargetoner} />;
