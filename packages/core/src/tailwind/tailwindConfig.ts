import type { Config } from "tailwindcss";
import { colors } from "../../tailwind/tailwind.config.js";
import tokens from "../tokens.js";
import { breakpoints } from "../utils/breakpoints.js";

const tailwindPresets: Partial<Config> = {
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

export default tailwindPresets;
