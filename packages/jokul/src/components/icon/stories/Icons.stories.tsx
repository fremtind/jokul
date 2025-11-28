import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { Button } from "../../button/index.js";
import { Icon } from "../Icon.js";
import {
    ArrowDownIcon,
    ArrowHorizontalAnimated,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    ArrowVerticalAnimated,
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
    PlusRemoveAnimated,
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
import "../../button/styles/_index.scss";

// @ts-ignore
const meta: Meta = {
    title: "Komponenter/Ikoner",
    component: Icon,
    argTypes: {
        variant: {
            control: "radio",
            options: ["inhreit", "medium", "small"],
        },
    },
    args: {
        variant: "inherit",
        bold: false,
        filled: false,
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const allIcons = [
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

export const Ikon: Story = {
    args: {
        children: "home",
    },
};

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
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    // @ts-ignore
    render: (args) =>
        allIcons.map((Icon) => <Icon key={Icon.displayName} {...args} />),
};

export const AnimerteIkoner: Story = {
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        width: "50vw",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                        alignItems: "center",
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    render: (args) => {
        const [isAnimated, setIsAnimated] = useState(false);

        return (
            <>
                <ArrowVerticalAnimated pointingDown={isAnimated} />
                <ArrowHorizontalAnimated pointingRight={isAnimated} />
                <PlusRemoveAnimated isPlus={isAnimated} />
                <Button
                    style={{ maxWidth: "max-content" }}
                    onClick={(_) => setIsAnimated(!isAnimated)}
                >
                    Animér
                </Button>
            </>
        );
    },
};
