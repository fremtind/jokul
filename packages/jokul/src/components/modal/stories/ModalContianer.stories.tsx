import type { Meta, StoryObj } from "@storybook/nextjs";
import "../styles/_index.scss";
import { ModalContainer as ModalContainerComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalContainer",
    component: ModalContainerComponent,
} satisfies Meta<typeof ModalContainerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalContainer: Story = {
    args: {
        id: "modal-container",
        role: "document",
        "aria-hidden": false,
        "aria-modal": true,
        "aria-labelledby": "modal-title",
    },
};
