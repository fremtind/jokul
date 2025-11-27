import type { Meta, StoryObj } from "@storybook/nextjs";
import { BaseRadioButton as BaseRadioButtonComponent } from "../BaseRadioButton.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Radio Button/Base Radio Button",
    component: BaseRadioButtonComponent,
    args: {
        value: "valg 1",
        children: "Base Radio-knapp",
        inline: false,
        invalid: false,
        supportLabelProps: {
            srOnly: false,
        },
    },
} satisfies Meta<typeof BaseRadioButtonComponent>;

export default meta;

type Story = StoryObj<typeof BaseRadioButtonComponent>;

export const BaseRadioButton: Story = {};
