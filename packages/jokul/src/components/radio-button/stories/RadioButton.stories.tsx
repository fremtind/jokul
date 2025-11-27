import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioButton as RadioButtonComponent } from "../RadioButton.js";
import "../styles/_index.scss";
import BaseRadioStory from "./BaseRadioButton.stories.js";

const meta: Meta = {
    title: "Komponenter/Radio Button",
    component: RadioButtonComponent,
    args: {
        ...BaseRadioStory.args,
        children: "Radio button",
    },
} satisfies Meta<typeof RadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;

export const RadioButton: Story = {};
