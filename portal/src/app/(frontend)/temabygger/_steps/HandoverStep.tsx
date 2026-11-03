"use client";

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
import { StepCard } from "./StepCard";

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
        <StepCard
            segment="lever-over"
            navigation={{
                action: { label: selectedChannel.actionLabel, onClick: open },
            }}
        >
            <Title as="h3" size="m">
                {draft.themeName
                    ? `Lever over ${draft.themeName}`
                    : "Lever over temaet"}
            </Title>

            <Flex direction="column" gap="24">
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

                {opened && <HandoverResult opened={opened} />}
            </Flex>
        </StepCard>
    );
}
