import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../button/Button.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "../Modal.js";
import "../../button/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Modal/CompleteModal",
    component: ModalContainer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteModal: Story = {
    args: {
        id: "modal-container",
        role: "document",
        "aria-hidden": false,
        "aria-modal": true,
        "aria-labelledby": "modal-title",
    },
    render: (args) => (
        <ModalContainer {...args}>
            <ModalOverlay />
            <Modal role="document">
                <ModalHeader>
                    <ModalTitle aria-level={1} role="heading" id={""}>
                        Tittel
                    </ModalTitle>
                    <ModalCloseButton type="button" aria-label="close" />
                </ModalHeader>
                <ModalBody>
                    Er du sikker på at du vil slette Foo Bar Baz?
                </ModalBody>
                <ModalActions>
                    <Button variant="primary" data-testid="confirm-modal">
                        Slett
                    </Button>
                    <Button>Avbryt</Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
    ),
};
