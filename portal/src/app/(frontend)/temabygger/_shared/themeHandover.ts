import type { ThemeDraft } from "../_context/types";
import { getBorderRadiusScale } from "./borderRadius";
import {
    type CustomFont,
    type CustomFonts,
    FONT_SLOTS,
    type FontSlot,
} from "./customFont";
import {
    CUSTOM_FONT_SELECTION,
    type FontSelectionId,
    getFontOption,
    isFontOptionId,
} from "./fontOptions";

const HANDOVER_RECIPIENT = "fremtind.designsystem@fremtind.no";

export const HANDOVER_CHANNELS = [
    { id: "mail", label: "E-post", actionLabel: "Åpne e-post" },
    { id: "outlook", label: "Outlook på nett", actionLabel: "Åpne Outlook" },
    { id: "teams", label: "Teams", actionLabel: "Åpne Teams" },
    {
        id: "slack",
        label: "Slack",
        actionLabel: "Kopier melding og åpne Slack",
    },
] as const;

export type HandoverChannel = (typeof HANDOVER_CHANNELS)[number];
export type HandoverChannelId = HandoverChannel["id"];

export function getHandoverChannel(id: HandoverChannelId): HandoverChannel {
    return (
        HANDOVER_CHANNELS.find((channel) => channel.id === id) ??
        HANDOVER_CHANNELS[0]
    );
}

export type HandoverMessage = {
    subject: string;
    body: string;
};

type HandoverMessageInput = {
    draft: ThemeDraft;
    previewUrl: string;
};

/**
 * Forhåndsvisningslenken bærer hele utkastet som spørringsparameter, så den er
 * selve leveransen. Tokenene gjentas derfor ikke som JSON i meldingen: den
 * samme teksten skal kunne sendes i en chat, der lange lenker fortsatt går
 * gjennom, men flere kilobyte med JSON ikke gjør det.
 */
export function createHandoverMessage({
    draft,
    previewUrl,
}: HandoverMessageInput): HandoverMessage {
    const {
        themeName,
        includeDarkMode,
        regularFont,
        displayFont,
        customFonts,
        boldTitles,
        borderRadius,
    } = draft;

    const lines = [
        "Hei! Vi har laget et temaforslag i temabyggeren og vil gjerne levere det over.",
        "",
        `Tema: ${themeName || "uten navn"}`,
        `Mørk modus: ${includeDarkMode ? "ja" : "nei"}`,
        `Font: ${getFontLabel(regularFont, "regular", customFonts)} (vanlig), ${getFontLabel(displayFont, "display", customFonts)} (display)`,
        `Titler: ${boldTitles ? "fet vekt" : "normal vekt"}`,
        `Hjørner: ${getBorderRadiusScale(borderRadius).label.toLowerCase()}`,
        "",
        `Hele temaet ligger i denne lenken: ${previewUrl}`,
    ];

    const uploadedFontNames = getUploadedFonts(draft).map((font) => font.name);

    // Lenka kan ikke bære fontfila, og ingen av kanalene tar vedlegg via en
    // URL, så vedlegget er noe bare brukeren selv kan legge ved.
    if (uploadedFontNames.length > 0) {
        lines.push(
            "",
            `Fontfila ligger ikke i lenken, så forhåndsvisningen viser en standardfont i stedet. Husk å legge ved ${uploadedFontNames.join(" og ")}.`,
        );
    }

    return {
        subject: themeName ? `Tema for ${themeName}` : "Tema fra temabyggeren",
        body: lines.join("\n"),
    };
}

function getFontLabel(
    selection: FontSelectionId,
    slot: FontSlot,
    customFonts: CustomFonts,
): string {
    if (isFontOptionId(selection)) {
        return getFontOption(selection).label;
    }

    return customFonts[slot]?.name ?? "annen font (fil mangler)";
}

/**
 * Samme fil kan ligge i begge slotene. Da skal den nevnes én gang, ellers ser
 * det ut som om det er to vedlegg å hente.
 */
export function getUploadedFonts(draft: ThemeDraft): CustomFont[] {
    const fonts = new Map<string, CustomFont>();

    for (const slot of FONT_SLOTS) {
        const selection =
            slot === "regular" ? draft.regularFont : draft.displayFont;
        const font = draft.customFonts[slot];

        if (selection === CUSTOM_FONT_SELECTION && font) {
            fonts.set(font.name, font);
        }
    }

    return [...fonts.values()];
}

export function createHandoverHref(
    channel: HandoverChannelId,
    { subject, body }: HandoverMessage,
): string {
    const recipient = encodeURIComponent(HANDOVER_RECIPIENT);

    switch (channel) {
        case "mail":
            return `mailto:${HANDOVER_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        case "outlook":
            return `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // En chat har ingen emnefelt, så emnet blir første linje i meldingen.
        case "teams":
            return `https://teams.microsoft.com/l/chat/0/0?users=${recipient}&message=${encodeURIComponent(`${subject}\n\n${body}`)}`;
        // Slack har ingen lenke som fyller ut en melding. Den åpnes bare, og
        // teksten legges på utklippstavla av den som kaller denne.
        case "slack":
            return "slack://open";
    }
}

export function formatHandoverMessage({ subject, body }: HandoverMessage) {
    return `${subject}\n\n${body}`;
}
