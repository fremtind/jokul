import type tokens from "../../core/tokens.js";

export type size = keyof typeof tokens.typography.font.size;
export type weight = keyof typeof tokens.typography.weight;
export type lineHeight = keyof typeof tokens.typography.line.height;
export type fontStyles =
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "body"
    | "small"
    | "title"
    | "title-small";

export type TextProps = {
    size?: size;
    weight?: weight;
    lineHeight?: lineHeight;
    fontStyle?: fontStyles;
    children: React.ReactNode;
};
