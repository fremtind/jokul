import type { Meta, StoryObj } from "@storybook/nextjs";
import "../styles/_index.scss";
import { IconButton } from "../../icon-button/IconButton.js";
import { CloseIcon } from "../../icon/icons/CloseIcon.js";
import { ModalCloseButton as ModalCloseButtonComponent } from "../Modal.js";

const meta = {
    title: "Komponenter/Modal/ModalCloseButton",
    component: ModalCloseButtonComponent,
} satisfies Meta<typeof ModalCloseButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalCloseButton: Story = {
    args: {
        type: "button",
        "aria-label": "close",
    },
    render: (args) => (
        <ModalCloseButtonComponent {...args}>
            <IconButton>
                <CloseIcon variant="medium" />
            </IconButton>
        </ModalCloseButtonComponent>
    ),
};
