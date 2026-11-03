import { useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { createThemePreviewHref } from "../_shared/themeDraftPayload";
import {
    type HandoverChannelId,
    createHandoverHref,
    createHandoverMessage,
    formatHandoverMessage,
    getHandoverChannel,
} from "../_shared/themeHandover";

export type OpenedState = {
    channel: HandoverChannelId;
    copiedText: string | null;
};

/** Valgt kanal og handlingen som åpner meldingen i den. */
export function useHandover() {
    const { draft } = useThemeDraft();
    const [channel, setChannel] = useState<HandoverChannelId>("mail");
    const [opened, setOpened] = useState<OpenedState | null>(null);

    const open = async () => {
        const message = createHandoverMessage({
            draft,
            previewUrl: new URL(
                createThemePreviewHref(draft),
                window.location.origin,
            ).toString(),
        });
        const href = createHandoverHref(channel, message);

        let copiedText: string | null = null;

        if (channel === "slack") {
            const text = formatHandoverMessage(message);

            try {
                await navigator.clipboard.writeText(text);
            } catch {
                // Utklippstavla kan være avslått. Da må teksten vises, ellers
                // står brukeren i Slack uten meldingen de skulle lime inn.
                copiedText = text;
            }
        }

        setOpened({ channel, copiedText });

        if (copiedText) {
            // Ingen vits i å sende brukeren til Slack før de har meldingen.
            return;
        }

        // `mailto:` og `slack:` håndteres av maskinen, og skal ikke etterlate en
        // tom fane i nettleseren.
        if (href.startsWith("http")) {
            window.open(href, "_blank", "noopener");
        } else {
            window.location.href = href;
        }
    };

    return {
        channel,
        setChannel,
        selectedChannel: getHandoverChannel(channel),
        opened,
        open,
    };
}
