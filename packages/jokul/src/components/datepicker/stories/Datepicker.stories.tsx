import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { DatePicker as DatePickerComponent } from "../DatePicker.js";
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
        defaultValue: new Date().toLocaleDateString("no", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }),
        disableBeforeDate: new Date(
            new Date().setDate(new Date().getDate() - 14),
        ).toLocaleDateString("en-US"),
        disableAfterDate: new Date(
            new Date().setDate(new Date().getDate() + 14),
        ).toLocaleDateString("en-US"),
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
            disableBeforeDate={new Date(
                args.disableBeforeDate || new Date(),
            ).toLocaleDateString("no")}
            disableAfterDate={new Date(
                args.disableAfterDate || new Date(),
            ).toLocaleDateString("no")}
        />
    ),
};
