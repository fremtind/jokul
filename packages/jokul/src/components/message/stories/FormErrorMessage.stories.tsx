import { Meta, StoryObj } from "@storybook/react";
import { FormErrorMessage as MessageComponent } from "../FormErrorMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message",
    component: MessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormErrorMessage: Story = {
    args: {
        errors: ["Du må oppgi fornavn", "Du må oppgi etternavn"],
        isSubmitted: true,
        isValid: false,
    },
};
