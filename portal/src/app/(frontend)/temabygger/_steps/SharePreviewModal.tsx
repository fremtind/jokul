"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { CheckIcon, CopyIcon } from "@fremtind/jokul/icon";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    useModal,
} from "@fremtind/jokul/modal";
import { Text } from "@fremtind/jokul/typography";
import { useEffect, useState } from "react";

type SharePreviewModalProps = {
    previewHref: string;
};

export function SharePreviewModal({ previewHref }: SharePreviewModalProps) {
    const [modalInstance, { title, overlay, container, modal, closeButton }] =
        useModal({ title: "Del internt" });
    const shareUrl = new URL(previewHref, window.location.origin).toString();

    return (
        <>
            <Button
                type="button"
                variant="ghost"
                onClick={() => modalInstance?.show()}
            >
                Del internt
            </Button>
            <ModalContainer {...container}>
                <ModalOverlay
                    {...overlay}
                    onClick={() => modalInstance?.hide()}
                />
                <Modal {...modal}>
                    <ModalHeader>
                        <ModalTitle {...title}>Del internt</ModalTitle>
                        <ModalCloseButton {...closeButton} />
                    </ModalHeader>
                    <ModalBody>
                        <Flex direction="column" gap="40">
                            <Text>
                                Vi anbefaler at forhåndsvisningen deles internt,
                                slik at uttrykket er forankret og godkjent før
                                det sendes til Jøkul.
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
                                            title={shareUrl}
                                            style={{
                                                flex: 1,
                                                overflow: "hidden",
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {shareUrl}
                                        </Text>
                                        <CopyLinkButton url={shareUrl} />
                                    </Flex>
                                </Card>
                                <Text size="s" subdued>
                                    De du deler lenken med kan ikke redigere
                                    farger eller fonter.
                                </Text>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </Modal>
            </ModalContainer>
        </>
    );
}

function CopyLinkButton({ url }: { url: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => window.clearTimeout(timeout);
    }, [copied]);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch {
            console.error("Kopiering feilet", url);
        }
    };

    return (
        <Button
            type="button"
            variant="ghost"
            icon={copied ? <CheckIcon /> : <CopyIcon />}
            iconPosition="right"
            onClick={handleClick}
        >
            {copied ? "Kopiert" : "Kopier"}
        </Button>
    );
}
