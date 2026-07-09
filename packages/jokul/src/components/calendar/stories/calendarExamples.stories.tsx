import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { FieldGroup } from "../../input-group/index.js";
import { Calendar } from "../Calendar.js";
import CalendarStories, { OnlyDays } from "./calendar.stories.js";
import "../styles/_index.scss";

const today = new Date();
const nextWeek = new Date(new Date(today).setDate(today.getDate() + 7));

const meta = {
    ...CalendarStories,
    title: "Komponenter/Calendar/Eksempler",
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DayPickerOnly: Story = {
    name: "Velg fakturadato",
    args: {
        ...OnlyDays.args,
        noAccessory: false,
    },
    decorators: [
        (Story) => {
            return (
                <FieldGroup legend="Velg fakturadato">
                    <Story />
                </FieldGroup>
            );
        },
    ],
};

export const CalendarField: Story = {
    name: "Velg dato for henting",
    args: {
        value: undefined,
        defaultValue: nextWeek,
        min: nextWeek,
    },
    decorators: [
        (Story) => {
            return (
                <FieldGroup
                    legend="Velg dato for henting"
                    description="Du kan velge å få den utlevert fra i dag"
                    form="test"
                >
                    <Story />
                </FieldGroup>
            );
        },
    ],
};
