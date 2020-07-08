import React, { useState } from "react";
import { TableCell } from "./TableCell";

export type TypographyLevels =
    | "Title large"
    | "Title small"
    | "Heading large"
    | "Heading medium"
    | "Heading small"
    | "Lead"
    | "Body"
    | "Small"
    | "Micro";

interface Props {
    level: TypographyLevels;
}
export const ExampleRow: React.FC<Props> = ({ level }) => {
    const getComputedProperty = (node: HTMLElement | null, cssProperty: string) => {
        return (node && window?.getComputedStyle(node)?.getPropertyValue(cssProperty)) || "N/A";
    };
    const [fontWeight, setFontWeight] = useState("N/A");
    const [fontSize, setFontSize] = useState("N/A");
    const [lineHeight, setLineHeight] = useState("N/A");
    const ref = (node: HTMLParagraphElement | null) => {
        setFontWeight(getComputedProperty(node, "font-weight"));
        setFontSize(getComputedProperty(node, "font-size"));
        setLineHeight(getComputedProperty(node, "line-height"));
    };
    return (
        <tr className={"jkl-typography-table__row"}>
            <td className="jkl-typography-table__data">
                <p className={`jkl-${level.toLowerCase().replace(/ /g, "-")}`} ref={ref}>
                    {level}
                </p>
            </td>
            <TableCell title="Vekt">{fontWeight}</TableCell>
            <TableCell title="Størrelse">{fontSize}</TableCell>
            <TableCell title="Linjeavstand">{lineHeight}</TableCell>
        </tr>
    );
};
