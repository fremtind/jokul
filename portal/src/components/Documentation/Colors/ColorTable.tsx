import React from "react";
import { Color, ColorSwatch, rgbToHex } from "./Colors";

import "./ColorTable.scss";

const ColorTableRow = ({ colorVariable, rgbValue }: Color) => (
    <tr className="jkl-portal-color-table__row">
        <td className="jkl-portal-color-table__data" data-header="Valør:">
            <ColorSwatch className="jkl-portal-color-table__swatch" colorVariable={colorVariable} />
        </td>
        <td className="jkl-portal-color-table__data" data-header="Variabelnavn:">
            {colorVariable}
        </td>
        <td className="jkl-portal-color-table__data" data-header="Hex:">
            {rgbToHex(rgbValue)}
        </td>
        <td
            className="jkl-portal-color-table__data"
            data-header="RGB:"
        >{`${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}`}</td>
    </tr>
);

interface ColorTableProps {
    colors: Color[];
}
export const ColorTable: React.FC<ColorTableProps> = ({ colors }) => {
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
                {colors.map((color) => (
                    <ColorTableRow key={color.colorVariable} {...color} />
                ))}
            </tbody>
        </table>
    );
};

const gratoner: Color[] = [
    {
        colorVariable: "gra-10",
        rgbValue: { r: 248, g: 248, b: 248 },
    },
    {
        colorVariable: "gra-20",
        rgbValue: { r: 235, g: 235, b: 235 },
    },
    {
        colorVariable: "gra-30",
        rgbValue: { r: 214, g: 214, b: 214 },
    },
    {
        colorVariable: "gra-40",
        rgbValue: { r: 184, g: 184, b: 184 },
    },
    {
        colorVariable: "gra-50",
        rgbValue: { r: 153, g: 153, b: 153 },
    },
    {
        colorVariable: "gra-60",
        rgbValue: { r: 111, g: 111, b: 111 },
    },
    {
        colorVariable: "gra-70",
        rgbValue: { r: 82, g: 82, b: 82 },
    },
    {
        colorVariable: "gra-80",
        rgbValue: { r: 61, g: 61, b: 61 },
    },
    {
        colorVariable: "gra-90",
        rgbValue: { r: 41, g: 41, b: 41 },
    },
    {
        colorVariable: "gra-100",
        rgbValue: { r: 23, g: 23, b: 23 },
    },
];

const vardetoner: Color[] = [
    {
        colorVariable: "varde-10",
        rgbValue: { r: 249, g: 246, b: 244 },
    },
    {
        colorVariable: "varde-20",
        rgbValue: { r: 244, g: 240, b: 236 },
    },
    {
        colorVariable: "varde-30",
        rgbValue: { r: 237, g: 231, b: 224 },
    },
    {
        colorVariable: "varde-40",
        rgbValue: { r: 229, g: 221, b: 211 },
    },
    {
        colorVariable: "varde-50",
        rgbValue: { r: 222, g: 212, b: 199 },
    },
    {
        colorVariable: "varde-60",
        rgbValue: { r: 207, g: 193, b: 174 },
    },
    {
        colorVariable: "varde-70",
        rgbValue: { r: 186, g: 165, b: 137 },
    },
    {
        colorVariable: "varde-80",
        rgbValue: { r: 171, g: 146, b: 113 },
    },
    {
        colorVariable: "varde-90",
        rgbValue: { r: 141, g: 116, b: 83 },
    },
    {
        colorVariable: "varde-100",
        rgbValue: { r: 104, g: 86, b: 62 },
    },
];

export const GraTable = () => <ColorTable colors={gratoner} />;

export const VardeTable = () => <ColorTable colors={vardetoner} />;
