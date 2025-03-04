import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { Button } from "../../button/Button.js";
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

export const ModalActions: Story = {
    render: (args) => (
        <ModalActionsComponent {...args}>
            <Button
                variant="primary"
                onClick={() => {
                    console.log("Bekreft is clicked");
                }}
            >
                Bekreft
            </Button>
            <Button
                variant="tertiary"
                onClick={() => {
                    console.log("Avbryt is clicked");
                }}
            >
                Avbryt
            </Button>
        </ModalActionsComponent>
    ),
};
