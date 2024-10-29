import { DataTable } from "@fremtind/jkl-table-react";
import React from "react";

const CONVERSIONS = [
    ["spacing-3xs", "spacing-2"],
    ["spacing-2xs", "spacing-4"],
    ["spacing-xs", "spacing-8"],
    ["spacing-s", "spacing-12"],
    ["spacing-m", "spacing-16"],
    ["spacing-l", "spacing-24"],
    ["(fantes ikke)", "spacing-32"],
    ["spacing-xl", "spacing-40"],
    ["spacing-2xl", "spacing-64"],
    ["spacing-3xl", "spacing-104"],
    ["spacing-4xl", "spacing-168"],
];

export const ConversionTable = () => (
    <DataTable columns={["Gammelt steg", "Nytt steg"]} rows={CONVERSIONS} />
);
