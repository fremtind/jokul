import React, { useEffect, type FC } from "react";
import ReactDOM from "react-dom";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { PrimaryButton, TertiaryButton } from "../../button-react/src";
import {
    Modal,
    ModalCloseButton,
    ModalContainer,
    ModalOverlay,
    ModalTitle,
    ModalActions,
    ModalBody,
    ModalHeader,
    type ModalInstance,
    useModal,
} from "../src";

export const dialogExampleKnobs: ExampleKnobsProps = {};

type ModalComponentProps = ExampleComponentProps & {
    dialogRef: React.RefCallback<ModalInstance>;
    onConfirm: () => void;
    onCancel: () => void;
};

function ModalComponent({ boolValues, dialogRef, onConfirm, onCancel }: ModalComponentProps) {
    const heading = "Bekreft sletting";

    const [instance, { title, overlay, container, modal, closeButton }] = useModal({ title: heading });

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

    return ReactDOM.createPortal(
        <ModalContainer {...container}>
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
                <ModalBody>Er du sikker på at du vil slette Foo Bar Baz?</ModalBody>
                <ModalActions>
                    <PrimaryButton
                        onClick={() => {
                            onConfirm();
                        }}
                    >
                        Bekreft
                    </PrimaryButton>
                    <TertiaryButton
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        Avbryt
                    </TertiaryButton>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
}

export const ModalExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const dialogRef = React.useRef<ModalInstance | null>();
    return (
        <>
            <PrimaryButton
                onClick={() => {
                    dialogRef.current?.show();
                }}
            >
                Åpne modal
            </PrimaryButton>
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
        </>
    );
};

export default ModalExample;

export const dialogExampleCode: CodeExample = () => `
type ModalComponentProps = {
    dialogRef: React.RefCallback<ModalInstance>;
    onConfirm: () => void;
    onCancel: () => void;
};

function ModalComponent({ dialogRef, onConfirm, onCancel }: ModalComponentProps) {
    const heading = "Bekreft sletting";

    const [instance, { title, overlay, container, modal, closeButton }] = useModal({ title: heading });

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

    return ReactDOM.createPortal(
        <ModalContainer {...container}>
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
                <ModalBody>Er du sikker på at du vil slette Foo Bar Baz?</ModalBody>
                <ModalActions>
                    <PrimaryButton
                        onClick={() => {
                            onConfirm();
                        }}
                    >
                        Bekreft
                    </PrimaryButton>
                    <TertiaryButton
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        Avbryt
                    </TertiaryButton>
                </ModalActions>
            </Modal>
        </ModalContainer>,
        document.body,
    );
}

export const ModalExample: FC<ExampleComponentProps> = () => {
    const dialogRef = React.useRef<ModalInstance | null>();
    return (
        <>
            <PrimaryButton
                onClick={() => {
                    dialogRef.current?.show();
                }}
            >
                Åpne modal
            </PrimaryButton>
            <ModalComponent
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
        </>
    );
};
`;
