import type { Meta, StoryObj } from "@storybook/nextjs";
import "../styles/_index.scss";
import { ModalHeader as ModalHeaderComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalHeader",
    component: ModalHeaderComponent,
} satisfies Meta<typeof ModalHeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalHeader: Story = {};
