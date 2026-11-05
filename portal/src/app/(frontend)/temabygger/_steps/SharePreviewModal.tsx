"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { CheckIcon, CopyIcon } from "@fremtind/jokul/icon";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    type ModalConfig,
    ModalContainer,
    ModalHeader,
    type ModalInstance,
    ModalOverlay,
    ModalTitle,
} from "@fremtind/jokul/modal";
import { Text } from "@fremtind/jokul/typography";
import { useEffect, useState } from "react";
import styles from "./share-preview-modal.module.scss";

export const SHARE_PREVIEW_TITLE = "Del internt";

type SharePreviewModalProps = {
    /** Hele adressen, slik den kan limes inn i en melding. */
    previewHref: string;
    /**
     * Dialogen åpnes fra knappegruppa i `HandoverStep`, så `useModal` kalles
     * der og instansen og oppsettet sendes hit.
     */
    instance: ModalInstance;
    config: ModalConfig;
};

export function SharePreviewModal({
    previewHref,
    instance,
    config,
}: SharePreviewModalProps) {
    const { title, overlay, container, modal, closeButton } = config;

    return (
        <ModalContainer {...container}>
            <ModalOverlay {...overlay} onClick={() => instance?.hide()} />
            <Modal {...modal}>
                <ModalHeader>
                    <ModalTitle {...title}>{SHARE_PREVIEW_TITLE}</ModalTitle>
                    <ModalCloseButton {...closeButton} />
                </ModalHeader>
                <ModalBody>
                    <Flex direction="column" gap="40">
                        <Text>
                            Vi anbefaler at forhåndsvisningen deles internt,
                            slik at uttrykket er forankret og godkjent før det
                            sendes til Jøkul.
                        </Text>
                        <Flex direction="column" gap="8">
                            <Card padding="s" outlined>
                                <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                    gap="16"
                                    wrap="nowrap"
                                >
                                    <Text
                                        as="span"
                                        className={styles.href}
                                        title={previewHref}
                                    >
                                        {previewHref}
                                    </Text>
                                    <CopyLinkButton previewHref={previewHref} />
                                </Flex>
                            </Card>
                            <Text size="s" subdued>
                                De du deler lenken med kan ikke redigere farger
                                eller fonter, og fonten de ser er Jøkuls egen —
                                fontfila følger bare med i zip-fila.
                            </Text>
                        </Flex>
                    </Flex>
                </ModalBody>
            </Modal>
        </ModalContainer>
    );
}

function CopyLinkButton({ previewHref }: { previewHref: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) {
            return;
        }

        const timeout = window.setTimeout(() => setCopied(false), 2000);

        return () => window.clearTimeout(timeout);
    }, [copied]);

    return (
        <Button
            type="button"
            variant="ghost"
            icon={copied ? <CheckIcon /> : <CopyIcon />}
            iconPosition="right"
            onClick={() =>
                navigator.clipboard.writeText(previewHref).then(
                    () => setCopied(true),
                    // Lenka står synlig, så den kan markeres og kopieres manuelt.
                    () => {},
                )
            }
        >
            {copied ? "Kopiert" : "Kopier"}
        </Button>
    );
}
