"use client";

import { ButtonGroup } from "@fremtind/jokul/button-group";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { useModal } from "@fremtind/jokul/modal";
import { Text } from "@fremtind/jokul/typography";
import { useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { downloadThemeArchive } from "../_shared/themeArchive";
import { createThemePreviewHref } from "../_shared/themeDraftPayload";
import { SHARE_PREVIEW_TITLE, SharePreviewModal } from "./SharePreviewModal";

const HANDOVER_RECIPIENT = "fremtind.designsystem@fremtind.no";

/**
 * Temaet leveres over som en fil brukeren sender videre selv, i klienten de
 * allerede bruker. Da havner det hos en som kan svare, og svaret kommer i samme
 * tråd — i motsetning til et skjema, der dialogen stopper ved kvitteringen.
 */
export function HandoverStep() {
    const { draft } = useThemeDraft();
    const [instance, config] = useModal({ title: SHARE_PREVIEW_TITLE });
    // Adressen trenger `window`, så den lages i klikket og ikke under rendring.
    const [previewHref, setPreviewHref] = useState("");

    const sharePreview = () => {
        setPreviewHref(
            new URL(
                createThemePreviewHref(draft),
                window.location.origin,
            ).toString(),
        );
        instance?.show();
    };

    return (
        <Flex direction="column" gap="24">
            <ButtonGroup
                mainAction={{
                    type: "button",
                    children: "Last ned tema",
                    onClick: () => downloadThemeArchive(draft),
                }}
                secondaryAction={{
                    type: "button",
                    children: "Del forhåndsvisning",
                    onClick: sharePreview,
                }}
            />

            <Text>
                Send zip-fila til{" "}
                <Link href={`mailto:${HANDOVER_RECIPIENT}`}>
                    {HANDOVER_RECIPIENT}
                </Link>
                . Du kan også sende den til oss på Slack eller Teams.
            </Text>

            <SharePreviewModal
                previewHref={previewHref}
                instance={instance}
                config={config}
            />
        </Flex>
    );
}
