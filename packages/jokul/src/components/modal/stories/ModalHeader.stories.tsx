import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalHeader as ModalHeaderComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalHeader",
    component: ModalHeaderComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalHeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalHeader: Story = {};
