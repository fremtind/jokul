import React, { useEffect, useState } from "react";
import { Color, ColorSwatch, rgbToHex } from "./Colors";

import "./ColorTable.scss";

const ColorTableRow: React.FC<Color> = ({ colorVariable }) => {
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
export const ColorTable: React.FC<ColorTableProps> = ({ colorVariables }) => {
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

const gratoner: string[] = [
    "gra-10",
    "gra-20",
    "gra-30",
    "gra-40",
    "gra-50",
    "gra-60",
    "gra-70",
    "gra-80",
    "gra-90",
    "gra-100",
];

const vardetoner: string[] = [
    "varde-10",
    "varde-20",
    "varde-30",
    "varde-40",
    "varde-50",
    "varde-60",
    "varde-70",
    "varde-80",
    "varde-90",
    "varde-100",
];

export const GraTable = () => <ColorTable colorVariables={gratoner} />;

export const VardeTable = () => <ColorTable colorVariables={vardetoner} />;
