import type { Config } from "tailwindcss";
import tokens from "../tokens";
import { breakpoints } from "../utils/breakpoints";
import colors from "./colors";

const tailwindPreset: Partial<Config> = {
    presets: [], // Deaktiverer innebygde themes fra Tailwind
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
};

export default tailwindPreset;
