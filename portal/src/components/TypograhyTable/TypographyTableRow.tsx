import { TableCell, TableRow } from "@fremtind/jkl-table-react";
import React, { useState } from "react";
import { getComputedProperty } from "../../utils/getComputedProperty";

export const SAMPLE_TYPOGRAPHY_LEVELS = [
    /* 18, 17, 16, 15, 14, 13, */ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2,
] as const;
export type SampleTypoGraphyLevels = typeof SAMPLE_TYPOGRAPHY_LEVELS[number];

interface TypoTableRowProps {
    level: SampleTypoGraphyLevels;
    fluid?: boolean;
}

export const TypographyTableRow: React.FC<TypoTableRowProps> = ({ level, fluid = false }) => {
    const [fontSize, setFontSize] = useState("N/A");
    const ref = (node: HTMLParagraphElement | null) => {
        setFontSize(getComputedProperty(node, "font-size"));
    };

    return (
        <TableRow>
            <TableCell data-th="Nivå">{level}</TableCell>
            <TableCell>
                <p className={`jkl-portal-typo-table-scale-${level}${fluid ? "-fluid" : ""}`} ref={ref}>
                    Eksempel
                </p>
            </TableCell>
            <TableCell data-th="Størrelse" align="right">
                {fontSize}
            </TableCell>
        </TableRow>
    );
};
