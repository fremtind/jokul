import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TextInput } from "../../text-input/TextInput.js";
import { IconExample } from "../development/internal/IconExample.js";
import { IconsExampleGrid } from "../development/internal/IconsExampleGrid.js";
import { Icon } from "../Icon.js";
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
import "../styles/_index.scss";
import "../../text-input/styles/text-input.scss";
import "../../input-group/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Ikoner",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["inherit", "medium", "small"],
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

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

export const Ikoner: Story = {
    args: {
        variant: "small",
        bold: false,
    },
    render: ({ variant, bold }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [fontSize, setFontSize] = useState("1rem");

        return (
            <div style={{ width: "50vw" }}>
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
                            style={{ justifySelf: "center" }}
                            key={Ico.displayName}
                            renderIcon={() => (
                                <Ico bold={bold} variant={variant} />
                            )}
                            name={Ico.displayName}
                        />
                    ))}
                </IconsExampleGrid>
            </div>
        );
    },
};
