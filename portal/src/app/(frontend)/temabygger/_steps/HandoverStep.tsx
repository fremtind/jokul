"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { RadioButton, RadioButtonGroup } from "@fremtind/jokul/radio-button";
import { Title } from "@fremtind/jokul/typography";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useHandover } from "../_hooks/useHandover";
import {
    HANDOVER_CHANNELS,
    type HandoverChannelId,
} from "../_shared/themeHandover";
import { FontAttachments } from "./FontAttachments";
import { HandoverResult } from "./HandoverResult";

/**
 * Overleveringen er en melding brukeren sender selv, i kanalen de allerede
 * bruker. Da havner den hos en som kan svare, og svaret kommer i samme tråd —
 * i motsetning til et skjema, der dialogen stopper ved kvitteringen.
 */
export function HandoverStep() {
    const { draft } = useThemeDraft();
    const { channel, setChannel, selectedChannel, opened, open } =
        useHandover();

    return (
        <Flex direction="column" gap="24">
            <Title as="h2" size="xs">
                {draft.themeName
                    ? `Lever over ${draft.themeName}`
                    : "Lever over temaet"}
            </Title>

            <RadioButtonGroup
                legend="Hvor vil du sende meldingen?"
                name="handoverChannel"
                value={channel}
                onChange={(event) =>
                    setChannel(event.target.value as HandoverChannelId)
                }
            >
                {HANDOVER_CHANNELS.map((option) => (
                    <RadioButton key={option.id} value={option.id}>
                        {option.label}
                    </RadioButton>
                ))}
            </RadioButtonGroup>

            <FontAttachments />

            <Button type="button" variant="primary" onClick={open}>
                {selectedChannel.actionLabel}
            </Button>

            {opened && <HandoverResult opened={opened} />}
        </Flex>
    );
}
