import type { Meta, StoryObj } from "@storybook/react";
import { FormErrorMessage } from "../FormErrorMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message/Form Error Message",
    component: FormErrorMessage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FormErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _FormErrorMessage: Story = {
    args: {
        errors: ["Du må oppgi fornavn", "Du må oppgi etternavn"],
        isSubmitted: true,
        isValid: false,
    },
};
