import { Meta, StoryObj } from "@storybook/react";
import { TextArea as TextAreaComponent } from "../TextArea.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/TextArea",
    component: TextAreaComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TextAreaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
    args: {
        label: "Beskrivelse",
    },
};
