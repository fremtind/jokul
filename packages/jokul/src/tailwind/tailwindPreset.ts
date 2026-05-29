import type { Config } from "tailwindcss";
import tokens from "../tokens.js";
import { jokulTypographyPlugin } from "./plugins/jokulTypographyPlugin.js";

const DEFAULT_COLOR_VARIANT_KEY = "@";

function createTailwindColors() {
    const { [DEFAULT_COLOR_VARIANT_KEY]: defaultColors, ...semanticColors } =
        tokens.color;

    return {
        ...defaultColors,
        ...semanticColors,
    };
}

export const jokulPreset: Partial<Config> = {
    theme: {
        colors: createTailwindColors(),
        spacing: tokens.spacing,
        fontWeight: tokens.font.weight,
        fontSize: tokens.font.size,
        lineHeight: tokens.lineHeight,
        borderRadius: tokens.border.radius,
        borderWidth: tokens.border.width,
        screens: {
            sm: tokens.breakpoint.medium,
            md: tokens.breakpoint.large,
            lg: tokens.breakpoint.xl,
        },
    },
    plugins: [jokulTypographyPlugin],
};
