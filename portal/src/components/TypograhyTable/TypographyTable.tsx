import { Table, TableBody, TableHead, TableHeader, TableRow } from "@fremtind/jkl-table-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import React, { FC, useState } from "react";
import { TypographyTableRow, SAMPLE_TYPOGRAPHY_LEVELS } from "./TypographyTableRow";

import "./typography-table.scss";

export const TypographyTable: FC = () => {
    const [isFluid, setIsFluid] = useState(false);
    const toggleFluid = () => setIsFluid((prevValue) => !prevValue);

    return (
        <div className="jkl-portal-paragraph">
            <ToggleSwitch className="jkl-spacing-2xl--top" pressed={isFluid} onClick={toggleFluid}>
                Flytende fontstørrelse
            </ToggleSwitch>
            <Table className="jkl-spacing-xl--top" collapseToList fullWidth>
                <TableHead>
                    <TableRow>
                        <TableHeader>Nivå</TableHeader>
                        <TableHeader srOnly>Illustrasjonstekst</TableHeader>
                        <TableHeader>Størrelse</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {SAMPLE_TYPOGRAPHY_LEVELS.map((level) => (
                        <TypographyTableRow key={level} level={level} fluid={isFluid} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
