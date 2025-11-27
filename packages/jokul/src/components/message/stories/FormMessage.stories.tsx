import type { Meta, StoryObj } from "@storybook/nextjs";
import { FormErrorMessage } from "../FormErrorMessage.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message/Form Error Message",
    component: FormErrorMessage,
    args: {
        errors: ["Du må oppgi fornavn", "Du må oppgi etternavn"],
        isSubmitted: true,
        isValid: false,
        messageProps: {
            title: "Feil og mangler i skjemaet",
            dismissAction: { handleDismiss() {} },
            dismissed: false,
            fullWidth: false,
        },
    },
} satisfies Meta<typeof FormErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _FormErrorMessage: Story = {};
