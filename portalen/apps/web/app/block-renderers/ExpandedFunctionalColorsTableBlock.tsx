import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@fremtind/jkl-table-react";
import React from "react";
import { hex, rgb } from "~/utils/colors";

export const ExpandedFunctionalColorsTableBlock = () => {
    const mainColors = [
        { value: "bark", hex: hex.bark, rgb: rgb.bark },
        { value: "mose", hex: hex.mose, rgb: rgb.mose },
        { value: "skog", hex: hex.skog, rgb: rgb.skog },
        { value: "hav", hex: hex.hav, rgb: rgb.hav },
        { value: "blomst", hex: hex.blomst, rgb: rgb.blomst },
        { value: "gress", hex: hex.gress, rgb: rgb.gress },
        { value: "isbre", hex: hex.isbre, rgb: rgb.isbre },
        { value: "himmel", hex: hex.himmel, rgb: rgb.himmel },
    ];
    return (
        <Table style={{ width: "100%" }}>
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
                            <div className={`color-swatch--${color.value}`} />
                        </TableCell>
                        <TableCell>{color.value.charAt(0).toUpperCase() + color.value.slice(1)}</TableCell>
                        <TableCell>{color.hex.toUpperCase()}</TableCell>
                        <TableCell>{color.rgb}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
