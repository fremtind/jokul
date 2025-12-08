import type React from "react";
import { useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { TextInput } from "../../text-input/TextInput.js";
import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    CopyIcon,
    DotsIcon,
    DragIcon,
    ErrorIcon,
    GreenCheckIcon,
    HamburgerIcon,
    InfoIcon,
    LinkIcon,
    MinusIcon,
    OpenInNewIcon,
    PenIcon,
    PlusIcon,
    QuestionIcon,
    RedCrossIcon,
    SearchIcon,
    SuccessIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashCanIcon,
    WarningIcon,
} from "../index.js";
import type { IconVariant } from "../types.js";
import { IconExample } from "./internal/IconExample.js";
import { IconsExampleGrid } from "./internal/IconsExampleGrid.js";

export const iconsExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bold"],
    choiceProps: [
        {
            name: "Variant",
            values: ["inherit", "medium", "small"],
            defaultValue: 1,
        },
    ],
};

const allIcons = [
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    CopyIcon,
    DotsIcon,
    DragIcon,
    ErrorIcon,
    GreenCheckIcon,
    HamburgerIcon,
    InfoIcon,
    LinkIcon,
    MinusIcon,
    OpenInNewIcon,
    PenIcon,
    PlusIcon,
    QuestionIcon,
    RedCrossIcon,
    SearchIcon,
    SuccessIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashCanIcon,
    WarningIcon,
];

export const IconsExample: React.FC<ExampleComponentProps> = ({
    choiceValues,
    boolValues,
}) => {
    const variant = choiceValues
        ? (choiceValues["Variant"] as IconVariant)
        : "small";
    const bold = boolValues?.["Bold"] || false;

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }}>
            {variant === "inherit" && (
                <TextInput
                    label="Fontstørrelse"
                    className="jkl-spacing-24--bottom"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    width="10ch"
                />
            )}
            <IconsExampleGrid style={{ fontSize }} columns="four">
                {allIcons.map((Ico) => (
                    <IconExample
                        key={Ico.displayName}
                        renderIcon={() => <Ico bold={bold} variant={variant} />}
                        name={Ico.displayName}
                    />
                ))}
            </IconsExampleGrid>
        </div>
    );
};
