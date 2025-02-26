import type { Meta, StoryObj } from "@storybook/react";
import "../styles/_index.scss";
import { ModalTitle as ModalTitleComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalTitle",
    component: ModalTitleComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalTitleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalTitle: Story = {
    args: {
        role: "heading",
        "aria-level": 1,
        id: "",
        children: "Tittel",
    },
};
