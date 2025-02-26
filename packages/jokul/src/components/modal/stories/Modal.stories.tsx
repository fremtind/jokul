import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { Modal as ModalComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal",
    component: ModalComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Modal: Story = {
    args: {
        role: "document",
    },
};
