import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jkl-table-react";
import { ToggleSlider } from "@fremtind/jkl-toggle-switch-react";
import React, { FC, useState } from "react";
import { TypographyTableRow, TypographyLevels } from "./TypographyTableRow";
import "./typography-table.scss";

const levels: TypographyLevels[] = [
    "Title",
    "Title Small",
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "Heading 5",
    "Body",
    "Small",
];

const VariantTable: FC<{ variant: "desktop" | "mobile" }> = ({ variant }) => (
    <Table collapseToList fullWidth>
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
                <TypographyTableRow
                    key={level}
                    level={level}
                    variant={variant}
                />
            ))}
        </TableBody>
    </Table>
);

export const TypographyTable: FC = () => {
    const [skala, setSkala] = useState("Desktop");
    return (
        <div className="jkl-portal-content mb-40">
            <ToggleSlider
                className="mb-40"
                defaultValue={skala}
                labels={["Desktop", "Mobile"]}
                onToggle={setSkala}
            >
                Velg skala
            </ToggleSlider>
            <VariantTable
                variant={skala.toLowerCase() as "desktop" | "mobile"}
            />
        </div>
    );
};
