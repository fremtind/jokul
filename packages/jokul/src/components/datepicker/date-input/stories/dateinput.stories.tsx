import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { formatInput } from "../../utils/index.js";
import "../styles/_index.scss";
import { DateInput } from "../DateInput.js";

const today = new Date();
const nextWeek = formatInput(
    new Date(new Date(today).setDate(today.getDate() + 7)),
);
const previousWeek = formatInput(
    new Date(new Date(today).setDate(today.getDate() - 7)),
);

const meta = {
    title: "Komponenter/DatePicker/Date Input",
    component: DateInput,
    args: {
        label: "Velg dato",
        onChange: fn(),
        onFocus: fn(),
        onBlur: fn(),
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
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateInputStory: Story = {
    name: "Date Input",
    args: {
        value: formatInput(today),
    },
};

export const StartEnd: Story = {
    name: "Start- og sluttdato",
    args: {
        max: nextWeek,
        min: previousWeek,
        description: "Velg en dato mellom forrige og neste uke",
    },
};

export const NoLabels: Story = {
    name: "Skjul label",
    args: {
        labelProps: {
            srOnly: true,
        },
    },
};
