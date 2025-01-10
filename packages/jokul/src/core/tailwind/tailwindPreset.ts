import type { Config } from "tailwindcss";
import tokens from "../tokens.js";
import colors from "./colors.js";

const tailwindPreset: Partial<Config> = {
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
    plugins: [],
};

export default tailwindPreset;
