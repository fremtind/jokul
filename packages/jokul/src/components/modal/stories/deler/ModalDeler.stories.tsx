import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../../button/Button.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "../../Modal.js";
import "../../styles/_index.scss";

type Story = StoryObj<typeof meta>;

const meta = {
    title: "Komponenter/Modal/Deler",
    parameters: {
        controls: { disable: true },
        docs: { disable: true },
    },
} satisfies Meta;

export default meta;

export const Struktur: Story = {
    name: "Struktur",
    render: () => (
        <ModalContainer
            id="modal-container"
            role="document"
            aria-hidden={false}
            aria-modal
            aria-labelledby="modal-title"
        >
            <ModalOverlay />
            <Modal role="document">
                <ModalHeader>
                    {/* biome-ignore lint/a11y/useSemanticElements: Kun for utvikling */}
                    <ModalTitle aria-level={1} role="heading" id="modal-title">
                        Tittel
                    </ModalTitle>
                    <ModalCloseButton type="button" aria-label="Lukk" />
                </ModalHeader>
                <ModalBody>Brukes til layouttesting av deler.</ModalBody>
                <ModalActions>
                    <Button>Avbryt</Button>
                    <Button variant="primary">Bekreft</Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
    ),
};
