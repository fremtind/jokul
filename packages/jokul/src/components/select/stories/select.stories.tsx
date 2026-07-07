import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "../Select.jsx";

const options = [
    { value: "car", label: "Bilforsikring" },
    { value: "home", label: "Husforsikring" },
    { value: "travel", label: "Reiseforsikring" },
    { value: "pet", label: "Dyreforsikring", disabled: true },
];

const meta = {
    title: "Komponenter/Select",
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "insurance",
        name: "insurance",
        label: "Forsikring",
        defaultValue: "car",
        options,
    },
};

export const Multiple: Story = {
    args: {
        multiple: true,
        name: "insurance",
        label: "Forsikringer",
        placeholder: "Velg forsikringer",
        options,
    },
};

export const MultipleWithoutSearch: Story = {
    args: {
        multiple: true,
        searchable: false,
        name: "insurance",
        label: "Forsikringer",
        placeholder: "Velg forsikringer",
        options,
    },
};
