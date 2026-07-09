export const FONT_OPTIONS = {
    "inter-variable": {
        label: "Inter Variable",
        family: "'Jokul', 'Adjusted Arial Fallback', arial, sans-serif",
        weight: {
            normal: "380",
            bold: "530",
        },
    },
    "inter-variable-display": {
        label: "Inter Variable Display",
        family: "'Jokul Display', 'Adjusted Arial Display Fallback', arial, sans-serif",
        weight: {
            normal: "380",
            bold: "530",
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

export const REGULAR_FONT_SELECT_OPTIONS = [
    {
        label: FONT_OPTIONS["inter-variable"].label,
        value: "inter-variable",
    },
    {
        label: FONT_OPTIONS.sparebank1.label,
        value: "sparebank1",
    },
    {
        label: FONT_OPTIONS["dnb-sans"].label,
        value: "dnb-sans",
    },
    {
        label: FONT_OPTIONS["open-sans"].label,
        value: "open-sans",
    },
] satisfies Array<{
    label: string;
    value: FontOptionId;
}>;

export type FontOptionId = keyof typeof FONT_OPTIONS;
export type FontOption = (typeof FONT_OPTIONS)[FontOptionId];

export const DEFAULT_REGULAR_FONT_OPTION_ID =
    "inter-variable" satisfies FontOptionId;

export const DEFAULT_DISPLAY_FONT_OPTION_ID =
    "inter-variable-display" satisfies FontOptionId;

export const FONT_SELECT_OPTIONS = Object.entries(FONT_OPTIONS).map(
    ([id, option]) => ({
        label: option.label,
        value: id as FontOptionId,
    }),
);

export const DISPLAY_FONT_SELECT_OPTIONS = Object.entries(FONT_OPTIONS).map(
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
