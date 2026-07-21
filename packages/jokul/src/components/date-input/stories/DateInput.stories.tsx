import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { fn } from "storybook/test";
import { Flex } from "../../flex/index.js";
import { DateInput } from "../DateInput.js";
import { toValidInputValue } from "../utils.js";

import "../styles/_index.scss";
import "../../popover/styles/_index.scss";

const meta = {
    title: "Komponenter/Date Input",
    component: DateInput,
    args: {
        label: "Når skal du reise?",
        labelProps: {
            srOnly: false,
        },
        onChange: fn(),
    },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateInputStory: Story = {
    name: "Date Input",
    args: {},
};

export const DateInputMinMax: Story = {
    name: "Datoavgrensing",
    args: {
        defaultValue: toValidInputValue(new Date()),
        min: toValidInputValue(new Date()),
        max: toValidInputValue(
            new Date(new Date().setDate(new Date().getDate() + 14)),
        ),
        description: "Du kan bare velge datoer innenfor de neste 14 dagene",
    },
};

export const DateInputRange: Story = {
    name: "Datointervall",
    render: (args) => {
        const [fromDate, setFromDate] = useState<string>("2026-01-16");
        const [toDate, setToDate] = useState<string>("2026-09-25");
        const earliestDate = "2026-01-14";
        const latestDate = "2026-10-24";

        return (
            <Flex>
                <DateInput
                    label="Fra"
                    value={fromDate}
                    min={earliestDate}
                    max={toDate || latestDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <DateInput
                    label="Til"
                    value={toDate}
                    min={fromDate || earliestDate}
                    max={latestDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </Flex>
        );
    },
};

export const DateInputError: Story = {
    name: "Date Input (Error)",
    args: {
        defaultValue: toValidInputValue(new Date()),
        min: toValidInputValue(
            new Date(new Date().setDate(new Date().getDate() + 1)),
        ),
        errorLabel: "Du kan ikke velge en dato som er før i dag",
    },
};

export const DateInputDisabled: Story = {
    name: "Date Input (Disabled)",
    args: {
        defaultValue: toValidInputValue(new Date()),
        disabled: true,
    },
};

export const DateInputReadOnly: Story = {
    name: "Date Input (Read Only)",
    args: {
        defaultValue: toValidInputValue(new Date()),
        readOnly: true,
    },
};
