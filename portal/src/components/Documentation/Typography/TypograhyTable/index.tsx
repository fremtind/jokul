import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import React, { FC, useState } from "react";
import "./TypographyTable.scss";
import { ExampleRow, TypographyLevels } from "./ExampleRow";
import { TableHeader } from "./TableHeader";

const levels: TypographyLevels[] = [
    "Title",
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "Heading 5",
    "Body",
    "Bold",
    "Small",
];

export const TypographyExample: FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const toggleMobile = () => setIsMobile(!isMobile);

    return (
        <>
            <table
                className="jkl-typography-table jkl-spacing-xl--top"
                {...(isMobile ? { "data-compactlayout": true } : {})}
            >
                <TableHeader />
                <tbody>
                    {levels.map((level) => (
                        <ExampleRow key={level} level={level} />
                    ))}
                </tbody>
            </table>
            <ToggleSwitch className="jkl-spacing-2xl--top" pressed={isMobile} onClick={toggleMobile}>
                Mobil
            </ToggleSwitch>
        </>
    );
};
