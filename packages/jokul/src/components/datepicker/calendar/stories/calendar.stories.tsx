import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { formatInput } from "../../utils.js";
import { Calendar } from "../Calendar.js";
import "../styles/_index.scss";

const today = new Date();
const nextWeek = formatInput(
    new Date(new Date(today).setDate(today.getDate() + 7)),
);
const previousWeek = formatInput(
    new Date(new Date(today).setDate(today.getDate() - 7)),
);

const meta = {
    title: "Komponenter/DatePicker/Calendar",
    component: Calendar,
    args: {
        styleOptions: {
            hideWeekdayLabels: false,
            hideNavigation: false,
            hideOutline: false,
        },
        disableWeekends: false,
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
        value: formatInput(today),
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
        styleOptions: {
            hideNavigation: true,
        },
    },
};

export const NoLabels: Story = {
    name: "Skjul benevner på uke",
    args: {
        styleOptions: {
            hideWeekdayLabels: true,
        },
    },
};

export const OnlyDays: Story = {
    name: "Bare dager",
    args: {
        defaultValue: formatInput(new Date(0, 0, 1)),
        min: formatInput(new Date(0, 0, 1)),
        max: formatInput(new Date(0, 0, 31)),
        styleOptions: {
            hideNavigation: true,
            hideWeekdayLabels: true,
            hideOutline: true,
        },
    },
};
