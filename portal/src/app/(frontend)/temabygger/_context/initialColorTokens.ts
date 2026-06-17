import type { EditableLightDarkPalette } from "../generator/types";

export const INITIAL_COLOR_TOKENS = {
    background: {
        page: {
            light: "#F3F0ED",
            dark: "#0E0D0C",
        },
        container: {
            light: "#FFFFFF",
            dark: "#262221",
        },
        "container-accent": {
            light: "#E4DFD8",
            dark: "#3C3434",
        },
        contrast: {
            light: "#262221",
            dark: "#F3F0ED",
        },
    },
    text: {
        default: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
        subdued: {
            light: "#636060",
            dark: "#C8C5C3",
        },
        accent: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
        "on-contrast": {
            light: "#FFFFFF",
            dark: "#0E0D0C",
        },
    },
    border: {
        default: {
            light: "#636060",
            dark: "#C8C5C3",
        },
        subdued: {
            light: "#C8C5C3",
            dark: "#636060",
        },
        strong: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
    },
} satisfies EditableLightDarkPalette;
