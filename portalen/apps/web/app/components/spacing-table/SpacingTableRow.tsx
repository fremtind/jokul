import { TableCell, TableRow } from "@fremtind/jkl-table-react";
import React, { type FC } from "react";

interface SpacingTableRowProps {
    level: string;
}

export const SpacingTableRow: FC<SpacingTableRowProps> = ({ level }) => {
    let remValue = parseInt(level);

    return (
        <TableRow>
            <TableCell>
                <p className={`spacing-swatch--${level}`} />
            </TableCell>
            <TableCell>
                <code className="spacing-code">jkl.$spacing--${level}</code>
                <br />
                <code className="spacing-code">{`var(--jkl-spacing-${level})`}</code>
            </TableCell>
            <TableCell>
                <code className="spacing-code">{level}px</code>
            </TableCell>
            <TableCell>
                <code className="spacing-code">{remValue / 16}rem</code>
            </TableCell>
        </TableRow>
    );
};
