import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@fremtind/jkl-table-react";
import React from "react";
import { hex, rgb } from "~/utils/colors";

export const FunctionalColorsTableBlock = () => {
    const mainColors = [
        { value: "suksess", hex: hex.suksess, rgb: rgb.suksess },
        { value: "info", hex: hex.info, rgb: rgb.info },
        { value: "advarsel", hex: hex.advarsel, rgb: rgb.advarsel },
        { value: "feil", hex: hex.feil, rgb: rgb.feil },
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
