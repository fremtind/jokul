import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
            options: ["inhreit", "medium", "small"],
        },
        // @ts-ignore
        fontSize: {
            control: {
                type: "number",
                step: 0.1,
            },
        },
    },
    args: {
        variant: "inherit",
        bold: false,
        filled: false,
        // @ts-ignore
        fontSize: 1.5,
    },
} satisfies Meta<typeof Icon & { fontSize: number }> & {
    fontSize: number;
};

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
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        width: "50vw",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                        marginBlockStart: "24px",
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    // @ts-ignore
    render: (args) => {
        return allIcons.map((Icon) => (
            <Icon
                key={Icon.displayName}
                style={{ fontSize: `${args.fontSize}rem` }}
                {...args}
            />
        ));
    },
};
