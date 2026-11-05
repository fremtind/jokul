export const FONT_OPTIONS = {
    "inter-variable": {
        label: "Inter Variable",
        family: "'Jokul', 'Adjusted Arial Fallback', arial, sans-serif",
        weight: {
            normal: "400",
            bold: "600",
        },
    },
    "inter-variable-display": {
        label: "Inter Variable Display",
        family: "'Jokul Display', 'Adjusted Arial Display Fallback', arial, sans-serif",
        weight: {
            normal: "400",
            bold: "600",
        },
    },
    sparebank1: {
        label: "SpareBank 1",
        family: "'SpareBank 1', sans-serif",
        weight: {
            normal: "400",
            bold: "600",
        },
    },
    "sparebank1-display": {
        label: "SpareBank 1 Display",
        family: "'SpareBank 1 Display', sans-serif",
        weight: {
            normal: "400",
            bold: "600",
        },
    },
    "dnb-sans": {
        label: "DNB Sans",
        family: "'DNB Sans', sans-serif",
        weight: {
            normal: "400",
            bold: "500",
        },
    },
    "open-sans": {
        label: "Open Sans",
        family: "'Open Sans', sans-serif",
        weight: {
            normal: "400",
            bold: "600",
        },
    },
} as const;

export type FontOptionId = keyof typeof FONT_OPTIONS;
export type FontOption = (typeof FONT_OPTIONS)[FontOptionId];

/**
 * Verdien et fontslot får når brukeren har lastet opp en egen fontfil. Selve
 * fila ligger i `customFonts` på utkastet, under samme slot.
 */
export const CUSTOM_FONT_SELECTION = "custom";

export type FontSelectionId = FontOptionId | typeof CUSTOM_FONT_SELECTION;

export function isFontSelectionId(value: unknown): value is FontSelectionId {
    return value === CUSTOM_FONT_SELECTION || isFontOptionId(value);
}

export const DEFAULT_REGULAR_FONT_OPTION_ID =
    "inter-variable" satisfies FontOptionId;

export const DEFAULT_DISPLAY_FONT_OPTION_ID =
    "inter-variable-display" satisfies FontOptionId;

export function getFontOption(id: FontOptionId): FontOption {
    return FONT_OPTIONS[id];
}

export function isFontOptionId(value: unknown): value is FontOptionId {
    return typeof value === "string" && value in FONT_OPTIONS;
}
