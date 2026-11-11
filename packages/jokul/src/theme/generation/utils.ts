import chroma from "chroma-js";
import { Hsluv } from "hsluv";
import type { HexColor } from "./types.js";

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const THEME_NAME_PATTERN = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;

export function generateContrastColor(baseColor: HexColor) {
    return chroma.contrast(baseColor, "white") >=
        chroma.contrast(baseColor, "black")
        ? "#ffffff"
        : "#000000";
}

export const getLightnessFromHex = (hex: HexColor) => {
    const conv = new Hsluv();
    conv.hex = hex;
    conv.hexToHsluv();

    return conv.hsluv_l;
};

export const getLuminanceFromLightness = (lightness: number) => {
    const conv = new Hsluv();
    conv.hsluv_l = lightness;
    conv.hsluvToHex();

    return chroma(conv.hex).luminance();
};

/** Sann når verdien matcher `#RRGGBB` (case-insensitiv). */
export const isHex = (value: string): value is HexColor =>
    HEX_COLOR_PATTERN.test(value);

/** Stripper mellomrom og gjør om til store bokstaver */
export const normalizeHex = (value: string): string => {
    return value.replace(/\s+/g, "").toUpperCase();
};

/** Sann når verdien kan brukes som `name` i en temafil. */
export const isThemeName = (value: unknown): value is string =>
    typeof value === "string" && THEME_NAME_PATTERN.test(value);
