import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { FieldGroup } from "../../../input-group/index.js";
import { Calendar } from "../Calendar.js";
import CalendarStories, { OnlyDays } from "./calendar.stories.js";
import "../styles/_index.scss";
import { Flex } from "../../../flex/index.js";
import { formatInput } from "../../utils.js";

const today = new Date();
const nextWeek = formatInput(
    new Date(new Date(today).setDate(today.getDate() + 7)),
);

const meta = {
    ...CalendarStories,
    title: "Komponenter/DatePicker/Calendar/Eksempler",
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DayPickerOnly: Story = {
    name: "Velg fakturadato",
    args: {
        ...OnlyDays.args,
        styleOptions: {
            hideOutline: true,
            hideNavigation: true,
            hideWeekdayLabels: true,
        },
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

export const ToAndFrom: Story = {
    name: "Til og fra dato",
    args: {},
    render: (args) => {
        const [fromDate, setFromDate] = useState(args.min);
        const [toDate, setToDate] = useState(args.max);

        return (
            <Flex direction="column">
                <FieldGroup legend="Filtrer mellom datoer">
                    <Flex>
                        <Calendar
                            {...args}
                            name="from"
                            max={toDate}
                            value={fromDate}
                            onChange={(e, date) => {
                                setFromDate(date);
                            }}
                        />
                        <Calendar
                            {...args}
                            name="to"
                            min={fromDate}
                            value={toDate}
                            onChange={(e, date) => {
                                setToDate(date);
                            }}
                        />
                    </Flex>
                </FieldGroup>

                {fromDate && toDate ? (
                    <p>
                        Mellom {fromDate} til {toDate}
                    </p>
                ) : (
                    <p>Ingen datoer valgt</p>
                )}
            </Flex>
        );
    },
};
