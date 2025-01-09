import type { Config } from "tailwindcss";
import { colors } from "../../../tailwind/tailwind.config.js";
import tokens from "../tokens.js";

const tailwindPresets: Partial<Config> = {
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

export default tailwindPresets;
