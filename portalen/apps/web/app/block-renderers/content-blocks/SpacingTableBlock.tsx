import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@fremtind/jkl-table-react';
import React from 'react';
import { SpacingTableRow } from '~/components/spacing-table/SpacingTableRow';

export const SpacingTableBlock = () => {
    const spacing = [
        { value: '2' },
        { value: '4' },
        { value: '8' },
        { value: '12' },
        { value: '16' },
        { value: '24' },
        { value: '24' },
        { value: '32' },
        { value: '40' },
        { value: '64' },
        { value: '104' },
        { value: '168' },
    ];

    return (
        <Table style={{ width: '100%' }}>
            <TableHead>
                <TableRow>
                    <TableHeader>Spacing</TableHeader>
                    <TableHeader>Variabel</TableHeader>
                    <TableHeader>Piksler</TableHeader>
                    <TableHeader>Rem</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {spacing.map((level) => (
                    <SpacingTableRow key={level.value} level={level.value} />
                ))}
            </TableBody>
        </Table>
    );
};
