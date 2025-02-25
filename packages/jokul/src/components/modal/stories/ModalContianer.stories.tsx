import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalContainer as ModalContainerComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalContainer",
    component: ModalContainerComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalContainerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalContainer: Story = {};
