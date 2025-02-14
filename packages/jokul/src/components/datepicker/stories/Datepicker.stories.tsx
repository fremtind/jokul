import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker as DatePickerComponent } from "../DatePicker.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/DatePicker",
    component: DatePickerComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
    args: {},
};
