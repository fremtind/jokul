import React, { useEffect, type FC } from "react";
import ReactDOM from "react-dom";
import {
    type ExampleComponentProps,
    type ExampleKnobsProps,
    useExampleContext,
} from "utils/dev-example/index.js";
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
import { type ModalInstance, useModal } from "../useModal.js";

export const dialogExampleKnobs: ExampleKnobsProps = {};

type ModalComponentProps = ExampleComponentProps & {
    dialogRef: React.RefCallback<ModalInstance>;
    onConfirm: () => void;
    onCancel: () => void;
};

function ModalComponent({
    boolValues,
    dialogRef,
    onConfirm,
    onCancel,
}: ModalComponentProps) {
    const heading = "Bekreft sletting";

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

    const { theme, density } = useExampleContext();

    return ReactDOM.createPortal(
        <ModalContainer
            {...container}
            data-theme={theme}
            data-layout-density={density}
        >
            <ModalOverlay
                {...overlay}
                onClick={() => {
                    onCancel();
                }}
            />
            <Modal {...modal}>
                <ModalHeader>
                    <ModalTitle {...title}>{heading}</ModalTitle>
                    <ModalCloseButton
                        {...closeButton}
                        onClick={() => {
                            onCancel();
                        }}
                    />
                </ModalHeader>
                <ModalBody>
                    Er du sikker på at du vil slette Foo Bar Baz?
                </ModalBody>
                <ModalActions>
                    <Button
                        variant="primary"
                        data-testid="confirm-modal"
                        onClick={() => {
                            onConfirm();
                        }}
                    >
                        Slett
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        Avbryt
                    </Button>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
}

export const ModalExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const dialogRef = React.useRef<ModalInstance | null>();
    return (
        <div>
            <Button
                variant="primary"
                data-testid="open-modal"
                onClick={() => {
                    dialogRef.current?.show();
                }}
            >
                Åpne modal
            </Button>
            <ModalComponent
                boolValues={boolValues}
                dialogRef={(instance) => {
                    dialogRef.current = instance;
                }}
                onConfirm={() => {
                    console.log("✅ Confirm");
                    dialogRef.current?.hide();
                }}
                onCancel={() => {
                    console.log("❌ Cancel");
                    dialogRef.current?.hide();
                }}
            />
        </div>
    );
};

export default ModalExample;
