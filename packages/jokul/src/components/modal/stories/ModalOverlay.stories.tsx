import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalOverlay as ModalOverlayComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalOverlay",
    component: ModalOverlayComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalOverlayComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalOverlay: Story = {};
