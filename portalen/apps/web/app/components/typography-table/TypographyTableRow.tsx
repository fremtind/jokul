import { TableCell, TableRow } from '@fremtind/jkl-table-react';
import React, { type FC } from 'react';

interface TypographyTableRowProps {
    level: string;
    weight: string;
    size: string;
    lineHeight: string;
    screen: 'base' | 'small';
}

export const TypographyTableRow: FC<TypographyTableRowProps> = ({
    level,
    weight,
    size,
    lineHeight,
    screen,
}) => {
    let newLevel = level.replace('_', '-');
    return (
        <TableRow>
            <TableCell>
                <p
                    className={`typography-cell--${newLevel}-${
                        screen === 'base' ? 'large' : screen
                    }`}
                >
                    {newLevel.charAt(0).toUpperCase() +
                        newLevel.slice(1).replace('-', ' ')}
                </p>
            </TableCell>
            <TableCell>
                <p className={`typography-cell--${newLevel}`}>{weight}</p>
            </TableCell>
            <TableCell>{size}</TableCell>
            <TableCell>{lineHeight}</TableCell>
        </TableRow>
    );
};
