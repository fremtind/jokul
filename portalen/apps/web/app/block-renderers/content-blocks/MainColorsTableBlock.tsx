import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@fremtind/jkl-table-react';
import React from 'react';
import { hex, rgb } from '~/utils/colors';

export const MainColorsTableBlock = () => {
    const mainColors = [
        { value: 'svart', hex: hex.svart, rgb: rgb.svart },
        { value: 'skifer', hex: hex.skifer, rgb: rgb.skifer },
        { value: 'fjellgrå', hex: hex.fjellgra, rgb: rgb.fjellgra },
        { value: 'stein', hex: hex.stein, rgb: rgb.stein },
        { value: 'svaberg', hex: hex.svaberg, rgb: rgb.svaberg },
        { value: 'dis', hex: hex.dis, rgb: rgb.dis },
        { value: 'sand', hex: hex.sand, rgb: rgb.sand },
        { value: 'hvit', hex: hex.hvit, rgb: rgb.hvit },
    ];
    return (
        <Table style={{ width: '100%' }}>
            <TableHead>
                <TableRow>
                    <TableHeader>Valør</TableHeader>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Hex</TableHeader>
                    <TableHeader>RGB</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {mainColors.map((color) => (
                    <TableRow key={color.value}>
                        <TableCell>
                            <div
                                className={`color-swatch--${color.value
                                    .replace('å', 'a')
                                    .replace('æ', 'ae')
                                    .replace('ø', 'o')}`}
                            />
                        </TableCell>
                        <TableCell>
                            {color.value.charAt(0).toUpperCase() +
                                color.value.slice(1)}
                        </TableCell>
                        <TableCell>{color.hex.toUpperCase()}</TableCell>
                        <TableCell>{color.rgb}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
