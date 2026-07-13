import type { Meta, StoryObj } from "@storybook/nextjs";
import { DatePicker } from "../DatePicker.js";
import "../styles/_index.scss";
import { fn } from "storybook/test";

const meta = {
    title: "Komponenter/DatePicker/Date Picker",
    component: DatePicker,
    args: {
        onChange: fn(),
    },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerStory: Story = {
    name: "Date Picker",
};
