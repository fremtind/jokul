export const FONT_OPTIONS = {
    "inter-variable": {
        label: "Inter Variable",
        font: {
            family: {
                regular:
                    "'Jokul', 'Adjusted Arial Fallback', arial, sans-serif",
                display:
                    "'Jokul Display', 'Adjusted Arial Display Fallback', arial, sans-serif",
            },
            weight: {
                normal: "380",
                bold: "530",
            },
        },
    },
    sparebank1: {
        label: "SpareBank 1",
        font: {
            family: {
                regular: "'SpareBank 1', sans-serif",
                display: "'SpareBank 1 Display', sans-serif",
            },
            weight: {
                normal: "400",
                bold: "600",
            },
        },
    },
    "dnb-sans": {
        label: "DNB Sans",
        font: {
            family: {
                regular: "'DNB Sans', sans-serif",
                display: "'DNB Sans', sans-serif",
            },
            weight: {
                normal: "400",
                bold: "500",
            },
        },
    },
    "open-sans": {
        label: "Open Sans",
        font: {
            family: {
                regular: "'Open Sans', sans-serif",
                display: "'Open Sans', sans-serif",
            },
            weight: {
                normal: "400",
                bold: "600",
            },
        },
    },
} as const;

export type FontOptionId = keyof typeof FONT_OPTIONS;
export type FontOption = (typeof FONT_OPTIONS)[FontOptionId];

export const DEFAULT_FONT_OPTION_ID = "inter-variable" satisfies FontOptionId;

export const FONT_SELECT_OPTIONS = Object.entries(FONT_OPTIONS).map(
    ([id, option]) => ({
        label: option.label,
        value: id as FontOptionId,
    }),
);

export function getFontOption(id: FontOptionId): FontOption {
    return FONT_OPTIONS[id];
}

export function isFontOptionId(value: unknown): value is FontOptionId {
    return typeof value === "string" && value in FONT_OPTIONS;
}
