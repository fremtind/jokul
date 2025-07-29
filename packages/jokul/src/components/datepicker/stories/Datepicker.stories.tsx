import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker as DatePickerComponent } from "../DatePicker.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/DatePicker",
    component: DatePickerComponent,
    parameters: {
        layout: "padded",
    },
    argTypes: {
        disableAfterDate: {
            control: {
                type: "text",
            },
        },
        disableBeforeDate: {
            control: {
                type: "text",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
    args: {},
};

export const DatePickerWithEndDates: Story = {
    name: "Datovelger med maks. og min. dato",
    args: {
        disableBeforeDate: "2024-01-01",
        disableAfterDate: "2026-12-31",
    },
};
