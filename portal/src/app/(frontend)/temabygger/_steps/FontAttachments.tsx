"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Message } from "@fremtind/jokul/message";
import { Text } from "@fremtind/jokul/typography";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { getUploadedFonts } from "../_shared/themeHandover";

/**
 * Ingen av kanalene kan legge ved en fil via en URL — `mailto:` har ingen
 * vedleggsparameter, og Outlook, Teams og Slack åpner bare et tomt vedleggsfelt.
 * Fila må derfor ut av utkastet og ned på maskinen, slik at brukeren kan legge
 * den ved selv. Det gjelder også om de henter opp utkastet på en annen maskin
 * enn den de lastet fonten opp fra.
 */
export function FontAttachments() {
    const { draft } = useThemeDraft();
    const fonts = getUploadedFonts(draft);

    if (fonts.length === 0) {
        return null;
    }

    return (
        <Message variant="info" title="Fontfila må du legge ved selv">
            <Flex direction="column" gap="16" alignItems="start">
                <Text>
                    Meldingen kan ikke bære vedlegg. Last ned fonten her og legg
                    den ved før du sender.
                </Text>
                {fonts.map((font) => (
                    <Link
                        key={font.name}
                        href={font.dataUrl}
                        download={font.name}
                    >
                        Last ned {font.name}
                    </Link>
                ))}
            </Flex>
        </Message>
    );
}
