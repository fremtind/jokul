import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { Calendar } from "../Calendar.js";
import "../styles/_index.scss";

const today = new Date();
const nextWeek = new Date(new Date(today).setDate(today.getDate() + 7));
const previousWeek = new Date(new Date(today).setDate(today.getDate() - 7));

const meta = {
    title: "Komponenter/Calendar",
    component: Calendar,
    args: {
        disableWeekends: false,
        hideWeekdayLabels: false,
        hideNavigation: false,
        noAccessory: false,
        onChange: fn(),
    },
    argTypes: {
        min: {
            control: "date",
        },
        max: {
            control: "date",
        },
        defaultValue: {
            control: "date",
        },
        value: {
            control: "date",
        },
    },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarStory: Story = {
    name: "Calendar",
    args: {
        value: today,
    },
};

export const NoWeekends: Story = {
    name: "Disabled helger",
    args: {
        disableWeekends: true,
    },
};

export const StartEnd: Story = {
    name: "Start- og sluttdato",
    args: {
        max: nextWeek,
        min: previousWeek,
    },
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
        defaultValue: new Date(0, 0, 1),
        min: new Date(0, 0, 1),
        max: new Date(0, 0, 31),
        hideNavigation: true,
        hideWeekdayLabels: true,
        noAccessory: true,
    },
};
