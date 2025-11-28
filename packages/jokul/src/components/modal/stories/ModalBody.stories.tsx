import type { Meta, StoryObj } from "@storybook/nextjs";
import "../styles/_index.scss";
import { ModalBody as ModalBodyComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalBody",
    component: ModalBodyComponent,
} satisfies Meta<typeof ModalBodyComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalBody: Story = {
    args: {
        children: "Er du sikker på at du vil slette Foo Bar Baz?",
    },
};
