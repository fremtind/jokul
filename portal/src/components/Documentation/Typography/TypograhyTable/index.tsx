import React, { useState } from "react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";

import "./TypographyTable.scss";
import { TableHeader } from "./TableHeader";
import { ExampleRow, TypographyLevels } from "./ExampleRow";

const levels: TypographyLevels[] = [
    "Title large",
    "Title small",
    "Heading large",
    "Heading medium",
    "Heading small",
    "Lead",
    "Body",
    "Small",
    "Micro",
];

export const Example = () => {
    const [isCompact, setIsCompact] = useState(false);
    const toggleCompact = () => setIsCompact(!isCompact);

    return (
        <>
            <table
                className="jkl-typography-table jkl-spacing--top-2"
                {...(isCompact ? { "data-compactlayout": true } : {})}
            >
                <TableHeader />
                <tbody>
                    {levels.map((level) => (
                        <ExampleRow key={level} level={level} />
                    ))}
                </tbody>
            </table>
            <ToggleSwitch className="jkl-spacing--top-3" pressed={isCompact} onClick={toggleCompact}>
                Kompakt
            </ToggleSwitch>
        </>
    );
};
