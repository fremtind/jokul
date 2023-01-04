import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import {
    CloseIcon,
    CheckIcon,
    PlusIcon,
    SearchIcon,
    HamburgerIcon,
    CalendarIcon,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CopyIcon,
    Info,
    Error,
    Warning,
    Success,
} from "../src";
import { IconVariant } from "../src/icons/types";
import { IconExample } from "./internal/IconExample";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

export const iconsExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bold"],
    choiceProps: [
        {
            name: "Variant",
            values: ["inherit", "small", "medium"],
            defaultValue: 1,
        },
    ],
};

export const IconsExample: React.FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const allIcons = [
        CloseIcon,
        CheckIcon,
        PlusIcon,
        SearchIcon,
        HamburgerIcon,
        CalendarIcon,
        ArrowUpRight,
        ArrowUp,
        ArrowDown,
        ArrowRight,
        ArrowLeft,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronUpIcon,
        CopyIcon,
        Info,
        Error,
        Warning,
        Success,
    ];

    const colorValue = choiceValues ? choiceValues["Farge"] : "inherit";
    const color = colorValue === "inherit" ? undefined : colorValue;
    const variant = choiceValues ? (choiceValues["Variant"] as IconVariant) : "small";
    const bold = boolValues?.["Bold"] || false;

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }}>
            {variant === "inherit" && (
                <label>
                    Sett fontstørrelse
                    <input
                        className="jkl-spacing-l--top jkl-spacing-l--bottom"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                    />
                </label>
            )}
            <IconsExampleGrid style={{ fontSize }} columns="four" color={color}>
                {allIcons.map((Ico) => (
                    <IconExample
                        key={Ico.name}
                        renderIcon={() => <Ico bold={bold} variant={variant} />}
                        name={Ico.displayName}
                    />
                ))}
            </IconsExampleGrid>
        </div>
    );
};

export const iconsExampleCode: CodeExample = ({ choiceValues }) => `
<ArrowDown variant="${choiceValues?.["Variant"]}" />
`;
