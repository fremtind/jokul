import { unicode } from "@fremtind/jkl-constants-util";
import { TableCell, TableRow } from "@fremtind/jkl-table-react";
import React, { useState } from "react";
import { getComputedProperty } from "../../utils/getComputedProperty";

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
    variant: "desktop" | "mobile";
    level: TypographyLevels;
}

export const TypographyTableRow: React.FC<Props> = ({ variant, level }) => {
    const [fontWeight, setFontWeight] = useState("N/A");
    const [fontSize, setFontSize] = useState("N/A");
    const [lineHeight, setLineHeight] = useState("N/A");
    const ref = (node: HTMLParagraphElement | null) => {
        setFontWeight(getComputedProperty(node, "font-weight"));
        setFontSize(getComputedProperty(node, "font-size"));
        setLineHeight(getComputedProperty(node, "line-height"));
    };
    return (
        <TableRow>
            <TableCell>
                <p
                    className={`jkl-portal-ttr__example jkl-portal-ttr__example--${variant} jkl-portal-ttr__example--${level
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    ref={ref}
                >
                    Eksempel
                </p>
            </TableCell>
            <TableCell data-th="Stilnavn">{level.replace(" ", unicode.nbsp)}</TableCell>
            <TableCell data-th="Vekt" align="right">
                {fontWeight}
            </TableCell>
            <TableCell data-th="Størrelse" align="right">
                {fontSize}
            </TableCell>
            <TableCell data-th="Linjeavstand" align="right">
                {lineHeight}
            </TableCell>
        </TableRow>
    );
};
