import type { Meta, StoryObj } from "@storybook/nextjs";
import { FieldGroup } from "../../input-group/index.js";
import { Checkbox } from "../Checkbox.js";

const meta = {
    title: "Komponenter/Checkbox",
    component: Checkbox,
    args: {
        value: "kjekk",
        name: "checkbox",
        children: "Kjekk boks",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
    name: "Checkbox",
};

export const CheckboxGroup: Story = {
    render: (args) => <FieldGroup legend={"Kontaktmetoder"}>e</FieldGroup>,
};
