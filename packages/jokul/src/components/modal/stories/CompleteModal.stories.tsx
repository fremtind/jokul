import type { Meta, StoryObj } from "@storybook/nextjs";
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
                    {/* biome-ignore lint/a11y/useSemanticElements: Dette fikser vi på en bedre måte ved refaktorering av komponenten */}
                    <ModalTitle aria-level={1} role="heading" id={""}>
                        Tittel
                    </ModalTitle>
                    <ModalCloseButton type="button" aria-label="close" />
                </ModalHeader>
                <ModalBody>
                    Er du sikker på at du vil slette Foo Bar Baz?
                </ModalBody>
                <ModalActions>
                    <Button>Avbryt</Button>
                    <Button variant="primary" data-testid="confirm-modal">
                        Slett
                    </Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
    ),
};
