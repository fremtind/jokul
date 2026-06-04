import chroma from "chroma-js";
import { colorMetadata } from "./metadata.js";
import type {
    Color,
    ColorRole,
    ColorScheme,
    HexColor,
    Palette,
} from "./types.js";
import {
    generateContrastColor,
    getLightnessFromHex,
    getLuminanceFromLightness,
} from "./utils.js";

function generateStrongColors(
    baseColor: HexColor,
    colorScheme: ColorScheme,
): Partial<Record<ColorRole, HexColor>> {
    let colorLightness = getLightnessFromHex(baseColor);

    // Invert lightness for dark mode if too dark
    if (colorScheme !== "light") {
        colorLightness =
            colorLightness <= 40 ? 70 : Math.max(40, 100 - colorLightness);
    }

    const strong =
        colorScheme === "light"
            ? baseColor
            : (chroma(baseColor)
                  .luminance(getLuminanceFromLightness(colorLightness))
                  .hex() as HexColor);

    return {
        "@": strong,
        "on-@": generateContrastColor(strong),
    };
}

export const toLuminance = (luminance: number) => (color: HexColor) =>
    chroma(color)
        .luminance(getLuminanceFromLightness(luminance * 100))
        .hex() as HexColor;

export const adjustChroma = (maxChroma: number) => (color: HexColor) => {
    const c = chroma(color);

    if (c.get("oklch.c") <= maxChroma) {
        return c.hex() as HexColor;
    }

    return c.set("oklch.c", maxChroma).hex() as HexColor;
};

export function generateDLPalette(baseColor: HexColor): Palette {
    const palette = Object.fromEntries(
        Object.entries(colorMetadata).map(([role, metadata]) => {
            const maxChroma = adjustChroma(metadata.maxChroma);
            const lightLuminance = toLuminance(metadata.luminance.light);
            const darkLuminance = toLuminance(metadata.luminance.dark);

            return [
                role,
                {
                    ...metadata,
                    hex: "#000000",
                    values: {
                        light: maxChroma(lightLuminance(baseColor)),
                        dark: maxChroma(darkLuminance(baseColor)),
                    },
                } as Color,
            ];
        }),
    ) as Palette;

    const strongColorsLight = generateStrongColors(baseColor, "light");
    const strongColorsDark = generateStrongColors(baseColor, "dark");

    palette["@"] = {
        ...palette["@"],
        values: {
            dark: strongColorsDark["@"] as HexColor,
            light: strongColorsLight["@"] as HexColor,
        },
    };

    palette["on-@"] = {
        ...palette["on-@"],
        values: {
            dark: strongColorsDark["on-@"] as HexColor,
            light: strongColorsLight["on-@"] as HexColor,
        },
    };

    return palette;
}

export function generatePalette(
    baseColor: HexColor,
    colorScheme: ColorScheme,
): Palette {
    const palette = Object.fromEntries(
        Object.entries(colorMetadata).map(([role, metadata]) => {
            const luminance = metadata.luminance[colorScheme];

            const color = chroma(baseColor).luminance(
                getLuminanceFromLightness(luminance * 100),
            );

            // Hvis fargemetningen er for høy justerer vi den ned
            const hex =
                color.get("oklch.c") > metadata.maxChroma
                    ? (color
                          .set("oklch.c", metadata.maxChroma)
                          .hex() as HexColor)
                    : (color.hex() as HexColor);

            return [role, { ...metadata, hex }];
        }),
    );

    const strongColors = generateStrongColors(baseColor, colorScheme);

    (palette as Palette)["@"] = {
        ...colorMetadata["@"],
        hex: strongColors["@"] as HexColor,
    };

    (palette as Palette)["on-@"] = {
        ...colorMetadata["on-@"],
        hex: strongColors["on-@"] as HexColor,
    };

    return palette as Palette;
}

export function generatePaletteOld(baseColor: HexColor, scheme: ColorScheme) {
    const palette = Object.fromEntries(
        Object.entries(colorMetadata).map(([role, metadata]) => {
            const luminance = metadata.luminance[scheme];

            return [
                role,
                {
                    ...metadata,
                    hex: chroma(baseColor)
                        .luminance(luminance)
                        .hex() as HexColor,
                },
            ];
        }),
    );

    const strongColors = generateStrongColors(baseColor, scheme);

    (palette as Palette)["@"] = {
        ...colorMetadata["@"],
        hex: strongColors["@"] as HexColor,
    };

    (palette as Palette)["on-@"] = {
        ...colorMetadata["on-@"],
        hex: strongColors["on-@"] as HexColor,
    };

    return palette as Palette;
}

export function generatePaletteOklch(
    baseColor: HexColor,
    colorScheme: ColorScheme,
) {
    const palette = Object.fromEntries(
        Object.entries(colorMetadata).map(([role, metadata]) => {
            const luminance = metadata.luminance[colorScheme];
            const [_, C, H] = chroma(baseColor).oklch();

            console.log(role, luminance, C, H);

            return [
                role,
                {
                    ...metadata,
                    hex: chroma
                        .oklch(getLuminanceFromLightness(luminance * 100), C, H)
                        .hex() as HexColor,
                },
            ];
        }),
    );

    const strongColors = generateStrongColors(baseColor, colorScheme);

    (palette as Palette)["@"] = {
        ...colorMetadata["@"],
        hex: strongColors["@"] as HexColor,
    };

    (palette as Palette)["on-@"] = {
        ...colorMetadata["on-@"],
        hex: strongColors["on-@"] as HexColor,
    };

    return palette as Palette;
}
