import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { DatePicker as DatePickerComponent } from "../DatePicker.js";
import { formatInput } from "../utils.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/DatePicker",
    component: DatePickerComponent,
    args: {
        action: {
            disabled: false,
        },
        days: ["M", "T", "O", "T", "F", "L", "S"],
        defaultShow: false,
        defaultValue: formatInput(new Date()),
        disableBeforeDate: formatInput(
            new Date(new Date().setDate(new Date().getDate() - 14)),
        ),
        disableAfterDate: formatInput(
            new Date(new Date().setDate(new Date().getDate() + 14)),
        ),
        description: "Kortet er gyldig i 3 måneder fra denne datoen",
        label: "Når skal du reise?",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        hideCalendarLabel: "Lukk kalender",
        showCalendarLabel: "Åpne kalender",
        invalid: false,
        months: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        monthLabel: "Måned",
        placeholder: "dd.mm.åååå",
        yearsToShow: new Date().getFullYear(),
        yearLabel: "År",
        textInputProps: {
            disabled: false,
            readOnly: false,
        },
    },
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
    args: {},
    render: (args) => (
        <DatePickerComponent
            {...args}
            disableBeforeDate={args.disableBeforeDate}
            disableAfterDate={args.disableAfterDate}
        />
    ),
};
