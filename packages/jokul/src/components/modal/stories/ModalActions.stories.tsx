import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalActions as ModalActionsComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalActions",
    component: ModalActionsComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalActionsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalActions: Story = {};
