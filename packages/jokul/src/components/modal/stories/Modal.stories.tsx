import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button.js";
import { InputGroup } from "../../input-group/InputGroup.js";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import {
    ModalActions,
    ModalBody,
    ModalCloseButton,
    Modal as ModalComponent,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "../Modal.js";
import { useModal } from "../useModal.js";

import "../../button/styles/_index.scss";
import "../styles/_index.scss";
import "../../input-group/styles/_index.scss";
import "../../text-input/styles/_index.scss";

const meta = {
    title: "Komponenter/Modal",
    component: ModalComponent,
    subcomponents: {
        ModalActions,
        ModalBody,
        ModalCloseButton,
        ModalContainer,
        ModalHeader,
        ModalOverlay,
        ModalTitle,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ModalComponent>;

export default meta;

type ModalStory = StoryObj<typeof meta>;

export const Modal: ModalStory = {
    args: {
        role: "document",
    },
    render: (args) => {
        const [showModal, setShowModal] = useState(false);
        const heading = "Bekreft sletting";
        const [instance, { title, overlay, container, modal, closeButton }] =
            useModal({ title: heading });

        useEffect(() => {
            if (!instance) {
                return;
            }
            instance.show();
        }, [instance]);

        return (
            <>
                <Button onClick={(e) => setShowModal(!showModal)}>
                    Vis modal
                </Button>
                {showModal && (
                    <ModalContainer {...container}>
                        <ModalOverlay {...overlay} />
                        <ModalComponent {...modal}>
                            <ModalHeader>
                                <ModalTitle {...title}>{heading}</ModalTitle>
                                <ModalCloseButton {...closeButton} />
                            </ModalHeader>
                            <ModalBody>
                                Er du sikker på at du vil slette Foo Bar Baz?
                                <InputGroup
                                    label="Fødselsnummer"
                                    helpLabel={undefined}
                                    errorLabel={undefined}
                                    tooltip={
                                        <PopupTip
                                            content={
                                                <>
                                                    Du må fylle ut fødelsnummer
                                                    eller D-nummer. Se hvordan
                                                    du finner D-nummer.
                                                </>
                                            }
                                        />
                                    }
                                >
                                    <BaseTextInput />
                                </InputGroup>
                            </ModalBody>
                            <ModalActions>
                                <Button
                                    onClick={() => {
                                        instance?.hide();
                                    }}
                                >
                                    Bekreft
                                </Button>
                                <Button onClick={() => instance?.hide()}>
                                    Avbryt
                                </Button>
                            </ModalActions>
                        </ModalComponent>
                    </ModalContainer>
                )}
            </>
        );
    },
};
