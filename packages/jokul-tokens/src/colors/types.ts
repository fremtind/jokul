export type HexColor = `#${string}`;
export type RGBColor = `rgb(${number} ${number} ${number})`;
export type RGBAColor = `rgb(${number} ${number} ${number} / ${number}%)`;
export type OKLCHColor = `oklch(${number}% ${number} ${number})`;

export type CSSColor = HexColor | RGBColor | RGBAColor | OKLCHColor;

export type ColorScheme = "light" | "dark";

export const GLOBAL_COLORS: Record<string, HexColor> = {
    neutral: "#000000",
    blue: "#0C4AEE",
    green: "#217549",
    purple: "#9747FF",
    red: "#AB2E43",
    yellow: "#EDB10C",
} as const;

export const COLOR_ROLES = [
    "@",
    "on-@",
    "background",
    "surface",
    "subtle-surface",
    "content",
    "subtle-content",
    "border",
    "subtle-border",
] as const;

export type ColorRole = (typeof COLOR_ROLES)[number];

export type ColorMetadata = {
    luminance: {
        light: number;
        dark: number;
    };
    maxChroma: number;
};

export type ColorMetadataMap = {
    [key in ColorRole]: ColorMetadata;
};

export type Color = ColorMetadata & {
    hex: HexColor;
    values?: {
        light: HexColor;
        dark: HexColor;
    };
};

export type Palette = {
    [key in ColorRole]: Color;
};

export type CustomPalette = {
    [key in ColorRole]: {
        dark: HexColor;
        light: HexColor;
    };
};
