import React, { useEffect, type FC } from "react";
import ReactDOM from "react-dom";
import {
    type ExampleComponentProps,
    type ExampleKnobsProps,
    useExampleContext,
} from "utils/dev-example/index.js";
import { Button } from "../../button/Button.js";
import { FieldGroup } from "../../input-group/index.js";
import { TextInput } from "../../text-input/TextInput.js";
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
import { type ModalInstance, useModal } from "../useModal.js";

export const dialogExampleKnobs: ExampleKnobsProps = {};

type ModalComponentProps = ExampleComponentProps & {
    dialogRef: React.RefCallback<ModalInstance>;
    onConfirm: () => void;
    onCancel: () => void;
    heading: string;
    body: React.ReactNode;
    placement?: "center" | "left" | "bottom" | "right";
    fullWidth?: boolean;
    slideIn?: boolean;
    confirmTestId: string;
};

function ModalComponent({
    dialogRef,
    onConfirm,
    onCancel,
    heading,
    body,
    placement = "center",
    fullWidth = false,
    slideIn = false,
    confirmTestId,
}: ModalComponentProps) {
    const [instance, { title, overlay, container, modal, closeButton }] =
        useModal({
            title: heading,
            role: "dialog", // "dialog" er default. Kan også være "alertdialog".
        });

    useEffect(() => {
        dialogRef(instance);
        return () => {
            if (!instance) {
                return;
            }
            instance.destroy();
            dialogRef(null);
        };
    }, [dialogRef, instance]);

    const { theme } = useExampleContext();

    return ReactDOM.createPortal(
        <ModalContainer
            {...container}
            placement={placement}
            slideIn={slideIn}
            data-theme={theme}
        >
            <ModalOverlay
                {...overlay}
                onClick={() => {
                    onCancel();
                }}
            />
            <Modal {...modal} fullWidth={fullWidth}>
                <ModalHeader>
                    <ModalTitle {...title}>{heading}</ModalTitle>
                    <ModalCloseButton
                        {...closeButton}
                        onClick={() => {
                            onCancel();
                        }}
                    />
                </ModalHeader>
                <ModalBody>{body}</ModalBody>
                <ModalActions>
                    <Button
                        variant="primary"
                        data-testid={confirmTestId}
                        onClick={() => {
                            onConfirm();
                        }}
                    >
                        Bekreft
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        Lukk
                    </Button>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
}

export const ModalExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const dialogRef = React.useRef<ModalInstance | null>();
    const bottomRef = React.useRef<ModalInstance | null>();
    const sideRef = React.useRef<ModalInstance | null>();
    return (
        <div>
            <Button
                variant="primary"
                data-testid="open-modal"
                onClick={() => {
                    dialogRef.current?.show();
                }}
            >
                Åpne bekreftelse
            </Button>
            <Button
                variant="secondary"
                data-testid="open-modal-bottom"
                onClick={() => {
                    bottomRef.current?.show();
                }}
            >
                Åpne bunnark
            </Button>
            <Button
                variant="secondary"
                data-testid="open-modal-side"
                onClick={() => {
                    sideRef.current?.show();
                }}
            >
                Åpne sidepanel
            </Button>
            <ModalComponent
                boolValues={boolValues}
                dialogRef={(instance) => {
                    dialogRef.current = instance;
                }}
                heading="Bekreft sletting"
                body="Er du sikker på at du vil slette Foo Bar Baz?"
                confirmTestId="confirm-modal"
                onConfirm={() => {
                    console.log("✅ Confirm");
                    dialogRef.current?.hide();
                }}
                onCancel={() => {
                    console.log("❌ Cancel");
                    dialogRef.current?.hide();
                }}
            />
            <ModalComponent
                boolValues={boolValues}
                dialogRef={(instance) => {
                    bottomRef.current = instance;
                }}
                heading="Velg dekning"
                body={
                    <FieldGroup legend="Dekninger">
                        <TextInput label="Reiseforsikring" placeholder="Ja" />
                        <TextInput label="Avbestilling" placeholder="Ja" />
                        <TextInput label="Reisegods" placeholder="Ja" />
                    </FieldGroup>
                }
                placement="bottom"
                fullWidth
                slideIn
                confirmTestId="confirm-modal-bottom"
                onConfirm={() => {
                    console.log("✅ Confirm bottom");
                    bottomRef.current?.hide();
                }}
                onCancel={() => {
                    console.log("❌ Cancel bottom");
                    bottomRef.current?.hide();
                }}
            />
            <ModalComponent
                boolValues={boolValues}
                dialogRef={(instance) => {
                    sideRef.current = instance;
                }}
                heading="Skademelding"
                body={
                    <FieldGroup legend="Detaljer">
                        <TextInput label="Skadenummer" placeholder="SKD-123" />
                        <TextInput label="Dato" placeholder="dd.mm.åååå" />
                        <TextInput label="Sted" placeholder="Oslo" />
                    </FieldGroup>
                }
                placement="right"
                slideIn
                confirmTestId="confirm-modal-side"
                onConfirm={() => {
                    console.log("✅ Confirm side");
                    sideRef.current?.hide();
                }}
                onCancel={() => {
                    console.log("❌ Cancel side");
                    sideRef.current?.hide();
                }}
            />
        </div>
    );
};

export default ModalExample;
