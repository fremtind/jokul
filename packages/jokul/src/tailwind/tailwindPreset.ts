import type { Config } from "tailwindcss";
import tokens from "../core/tokens.js";
import colors from "./colors.js";
import { jokulTypographyPlugin } from "./plugins/jokulTypographyPlugin.js";

export const jokulPreset: Partial<Config> = {
    theme: {
        colors,
        spacing: tokens.spacing,
        fontWeight: tokens.typography.weight,
        fontSize: tokens.typography.font.size,
        lineHeight: tokens.typography.line.height,
        screens: {
            sm: tokens.breakpoint.medium,
            md: tokens.breakpoint.large,
            lg: tokens.breakpoint.xl,
        },
    },
    plugins: [jokulTypographyPlugin],
};
