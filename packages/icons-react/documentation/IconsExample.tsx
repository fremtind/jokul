import React, { useState } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { TextInput } from "../../text-input-react/src";
import {
    CloseIcon,
    CheckIcon,
    PlusIcon,
    SearchIcon,
    HamburgerIcon,
    CalendarIcon,
    ArrowNorthEastIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CopyIcon,
    DotsIcon,
    QuestionIcon,
    InfoIcon,
    ErrorIcon,
    WarningIcon,
    SuccessIcon,
    LinkIcon,
    DragIcon,
    GreenCheckIcon,
    RedCrossIcon,
    MinusIcon,
    TrashCanIcon,
    PenIcon,
    ThumbDownIcon,
    ThumbUpIcon,
} from "../src";
import { IconVariant } from "../src/types";
import { IconExample } from "./internal/IconExample";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

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
    CloseIcon,
    CheckIcon,
    PlusIcon,
    MinusIcon,
    SearchIcon,
    HamburgerIcon,
    CalendarIcon,
    ArrowNorthEastIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CopyIcon,
    DotsIcon,
    DragIcon,
    GreenCheckIcon,
    QuestionIcon,
    RedCrossIcon,
    InfoIcon,
    ErrorIcon,
    WarningIcon,
    SuccessIcon,
    LinkIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashCanIcon,
    PenIcon,
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

export const iconsExampleCode: CodeExample = ({ boolValues, choiceValues }) =>
    allIcons
        .map(
            (icon) =>
                `<${icon.displayName} variant="${choiceValues?.["Variant"]}"${
                    boolValues?.["Bold"] ? " bold" : ""
                } />`,
        )
        .join("\n");
