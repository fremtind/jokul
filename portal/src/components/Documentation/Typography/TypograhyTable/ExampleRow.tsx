import React, { useState } from "react";
import { getComputedProperty } from "../../../../utils/getComputedProperty";
import { TableCell } from "./TableCell";

export type TypographyLevels =
    | "Title"
    | "Heading 1"
    | "Heading 2"
    | "Heading 3"
    | "Heading 4"
    | "Heading 5"
    | "Body"
    | "Bold"
    | "Small";

interface Props {
    level: TypographyLevels;
}

export const ExampleRow: React.FC<Props> = ({ level }) => {
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
