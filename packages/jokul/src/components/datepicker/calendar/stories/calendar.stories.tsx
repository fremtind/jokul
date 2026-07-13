import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { Calendar } from "../Calendar.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/DatePicker/Calendar",
    component: Calendar,
    args: {
        hideWeekdayLabels: false,
        hideNavigation: false,
        hideOutline: false,
        disableWeekends: false,
        onChange: fn(),
    },
    argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarStory: Story = {
    name: "Calendar",
    args: {},
};

export const NoWeekends: Story = {
    name: "Disabled helger",
    args: {
        disableWeekends: true,
    },
};

export const StartEnd: Story = {
    name: "Start- og sluttdato",
    args: {},
};

export const HideNav: Story = {
    name: "Uten navigasjon",
    args: {
        hideNavigation: true,
    },
};

export const NoLabels: Story = {
    name: "Skjul benevner på uke",
    args: {
        hideWeekdayLabels: true,
    },
};

export const OnlyDays: Story = {
    name: "Bare dager",
    args: {
        hideNavigation: true,
        hideWeekdayLabels: true,
        hideOutline: true,
    },
};
