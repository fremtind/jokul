import { Table, TableBody, TableHead, TableHeader, TableRow } from "@fremtind/jkl-table-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import React, { FC, useState } from "react";
import { TypographyTableRow, TypographyLevels } from "./TypographyTableRow";

const levels: TypographyLevels[] = [
    "Title",
    "Title Small",
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "Heading 5",
    "Body",
    "Bold",
    "Small",
];

export const TypographyTable: FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const toggleMobile = () => setIsMobile(!isMobile);

    return (
        <div className="jkl-portal-paragraph">
            <Table
                className="jkl-spacing-xl--top"
                collapseToList
                fullWidth
                {...(isMobile ? { "data-compactlayout": true } : {})}
            >
                <TableHead>
                    <TableRow>
                        <TableHeader srOnly>Illustrasjonstekst</TableHeader>
                        <TableHeader>Stilnavn</TableHeader>
                        <TableHeader>Vekt</TableHeader>
                        <TableHeader>Størrelse</TableHeader>
                        <TableHeader>Linjeavstand</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {levels.map((level) => (
                        <TypographyTableRow key={level} level={level} />
                    ))}
                </TableBody>
            </Table>
            <ToggleSwitch className="jkl-spacing-2xl--top" pressed={isMobile} onClick={toggleMobile}>
                Mobil
            </ToggleSwitch>
        </div>
    );
};
