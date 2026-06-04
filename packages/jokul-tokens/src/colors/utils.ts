import chroma from "chroma-js";
import { Hsluv } from "hsluv";
import type { HexColor } from "./types.js";

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
