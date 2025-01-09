import type { Config } from "tailwindcss";
import tokens from "../tokens.js";
import { breakpoints } from "../utils/breakpoints.js";
import colors from "./colors.js";

const tailwindPreset: Partial<Config> = {
    theme: {
        colors,
        spacing: tokens.spacing,
        fontWeight: tokens.typography.weight,
        fontSize: tokens.typography.font.size,
        lineHeight: tokens.typography.line.height,
        screens: {
            sm: `${breakpoints.medium}px`,
            md: `${breakpoints.large}px`,
            lg: `${breakpoints.xl}px`,
        },
    },
    plugins: [],
};

export default tailwindPreset;
