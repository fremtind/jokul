import { kebabCase } from "change-case";
import plugin from "tailwindcss/plugin.js";
import tokens from "../../core/tokens.js";

const { breakpoint, typography } = tokens;

export const jokulTypographyPlugin = plugin(({ addComponents }) => {
    const mappedTextStyles = Object.entries(typography.style).map(
        ([name, style]) => [
            `.${kebabCase(name)}`,
            {
                ...style.small,
                [`@media (min-width: ${breakpoint.medium})`]: {
                    ...style.base,
                },
            },
        ],
    );

    addComponents(Object.fromEntries(mappedTextStyles));
});
