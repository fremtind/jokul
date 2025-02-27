import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalOverlay as ModalOverlayComponent } from "../Modal.js";
import { ModalInstance } from "../useModal.js";

interface ExtendedModalComponentProps {
    dialogRef: React.RefCallback<ModalInstance>;
    onClick?: () => void;
    onCancel?: () => void;
}

const meta = {
    title: "Komponenter/Modal/ModalOverlay",
    component: ModalOverlayComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<ExtendedModalComponentProps>;

export default meta;

type Story = StoryObj<ExtendedModalComponentProps>;

let modalRef: ModalInstance | null = null;

export const ModalOverlay: Story = {
    args: {
        dialogRef: (instance: ModalInstance | null) => {
            modalRef = instance;
        },
        onCancel: () => {
            console.log("❌ Cancel");
            modalRef?.hide();
        },
        onClick: () => {
            ModalOverlay.args?.onCancel?.();
        },
    },
};
