"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Message } from "@fremtind/jokul/message";
import { TextArea } from "@fremtind/jokul/text-area";
import { Text } from "@fremtind/jokul/typography";
import type { OpenedState } from "../_hooks/useHandover";
import { getHandoverChannel } from "../_shared/themeHandover";

export function HandoverResult({ opened }: { opened: OpenedState }) {
    const channel = getHandoverChannel(opened.channel);

    if (opened.copiedText) {
        return (
            <Message
                variant="warning"
                title="Vi fikk ikke kopiert meldingen"
                role="alert"
            >
                <Flex direction="column" gap="16">
                    <Text>Kopier den herfra og lim den inn i Slack.</Text>
                    <TextArea
                        label="Melding til designsystem-teamet"
                        labelProps={{ srOnly: true }}
                        readOnly
                        rows={8}
                        value={opened.copiedText}
                    />
                </Flex>
            </Message>
        );
    }

    if (opened.channel === "slack") {
        return (
            <Message variant="info" title="Meldingen er kopiert">
                Lim den inn i en samtale med designsystem-teamet og send den.
            </Message>
        );
    }

    return (
        <Message variant="info" title="Meldingen er åpnet">
            Husk å sende den fra {channel.label}. Du kan gjerne skrive mer i den
            først.
        </Message>
    );
}
