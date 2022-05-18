import React, { FC, useEffect, useState } from "react";
import { Color, ColorSwatch, rgbToHex } from "./";
import "./color-table.scss";

interface ColorTableRowProps extends Color {
    colorName: string;
}

export const ColorTableRow: FC<ColorTableRowProps> = ({ colorName, colorVariable }) => {
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
                {colorName}
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
