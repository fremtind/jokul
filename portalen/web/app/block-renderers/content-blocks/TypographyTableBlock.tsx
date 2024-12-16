import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    tokens,
} from "@fremtind/jokul";
import React from "react";
import { TypographyTableRow } from "~/components/typography-table/TypographyTableRow";

export const TypographyTableBlock = ({
    screen = "base",
}: {
    screen?: "base" | "small";
}) => {
    const typography = [
        {
            level: "title",
            weight: tokens.typography.weight.normal,
            size: tokens.typography.title[screen].fontSize,
            lineHeight: tokens.typography.title[screen].lineHeight,
        },
        {
            level: "title-small",
            weight: tokens.typography.weight.normal,
            size: tokens.typography.title.small.fontSize,
            lineHeight: tokens.typography.title.small.lineHeight,
        },
        {
            level: "heading-1",
            weight: tokens.typography.weight.normal,
            size: tokens.typography.heading_1[screen].fontSize,
            lineHeight: tokens.typography.heading_1[screen].lineHeight,
        },
        {
            level: "heading-2",
            weight: tokens.typography.weight.normal,
            size: tokens.typography.heading_2[screen].fontSize,
            lineHeight: tokens.typography.heading_2[screen].lineHeight,
        },
        {
            level: "heading-3",
            weight: tokens.typography.weight.bold,
            size: tokens.typography.heading_3[screen].fontSize,
            lineHeight: tokens.typography.heading_3[screen].lineHeight,
        },
        {
            level: "heading-4",
            weight: tokens.typography.weight.bold,
            size: tokens.typography.heading_4[screen].fontSize,
            lineHeight: tokens.typography.heading_4[screen].lineHeight,
        },
        {
            level: "heading-5",
            weight: tokens.typography.weight.bold,
            size: tokens.typography.heading_5[screen].fontSize,
            lineHeight: tokens.typography.heading_5[screen].lineHeight,
        },
        {
            level: "body",
            weight: tokens.typography.weight.normal,
            size: tokens.typography.body[screen].fontSize,
            lineHeight: tokens.typography.body[screen].lineHeight,
        },
    ];
    return (
        <Table style={{ width: "100%" }}>
            <TableHead>
                <TableRow>
                    <TableHeader>Navn</TableHeader>
                    <TableHeader>Vekt</TableHeader>
                    <TableHeader>Størrelse</TableHeader>
                    <TableHeader>Linjehøyde</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {typography.map((typo) => (
                    <TypographyTableRow
                        key={typo.level}
                        level={typo.level}
                        weight={typo.weight}
                        size={typo.size}
                        lineHeight={typo.lineHeight}
                        screen={screen}
                    />
                ))}
            </TableBody>
        </Table>
    );
};
