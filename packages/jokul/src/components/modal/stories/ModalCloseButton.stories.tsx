import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalCloseButton as ModalCloseButtonComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalCloseButton",
    component: ModalCloseButtonComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalCloseButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalCloseButton: Story = {
    args: {
        type: "button",
        "aria-label": "",
    },
};
