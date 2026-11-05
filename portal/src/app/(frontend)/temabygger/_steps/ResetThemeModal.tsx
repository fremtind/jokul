"use client";

import { Button } from "@fremtind/jokul/button";
import { Icon } from "@fremtind/jokul/icon";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    useModal,
} from "@fremtind/jokul/modal";
import type { ThemeDraftResetScope } from "../_context/themeDraftReducer";
import { useThemeDraftActions } from "../_hooks/useThemeDraftActions";

type ResetThemeModalProps = {
    /** Steget brukeren står i. Uten omfang finnes ikke valget «bare denne siden». */
    scope?: ThemeDraftResetScope;
    className?: string;
};

const TITLE = "Nullstill tema";

export function ResetThemeModal({ scope, className }: ResetThemeModalProps) {
    const { reset: resetDraft } = useThemeDraftActions();
    const [instance, { title, overlay, container, modal, closeButton }] =
        useModal({ title: TITLE });

    const reset = (resetScope?: ThemeDraftResetScope) => {
        resetDraft(resetScope);
        instance?.hide();
    };

    return (
        <>
            <Button
                className={className}
                type="button"
                variant="ghost"
                icon={<Icon>rotate_left</Icon>}
                aria-label={TITLE}
                title={TITLE}
                onClick={() => instance?.show()}
            />
            <ModalContainer {...container}>
                <ModalOverlay {...overlay} onClick={() => instance?.hide()} />
                <Modal {...modal}>
                    <ModalHeader>
                        <ModalTitle {...title}>{TITLE}</ModalTitle>
                        <ModalCloseButton {...closeButton} />
                    </ModalHeader>
                    <ModalBody>
                        {scope
                            ? "Vil du nullstille bare denne siden, eller hele temaet? Du kan angre etterpå."
                            : "Vil du nullstille hele temaet? Du kan angre etterpå."}
                    </ModalBody>
                    <ModalActions>
                        {scope && (
                            <Button
                                type="button"
                                variant="primary"
                                onClick={() => reset(scope)}
                            >
                                Bare denne siden
                            </Button>
                        )}
                        <Button
                            type="button"
                            variant={scope ? "secondary" : "primary"}
                            onClick={() => reset()}
                        >
                            Hele temaet
                        </Button>
                    </ModalActions>
                </Modal>
            </ModalContainer>
        </>
    );
}
