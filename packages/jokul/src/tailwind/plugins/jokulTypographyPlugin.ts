import { kebabCase } from "change-case";
import plugin from "tailwindcss/plugin.js";
import tokens from "../../tokens.js";

const { textStyle } = tokens;

export const jokulTypographyPlugin = plugin(({ addComponents }) => {
    const mappedTextStyles = Object.entries(textStyle).map(([name, style]) => [
        `.${kebabCase(name)}`,
        {
            font: style,
        },
    ]);

    addComponents(Object.fromEntries(mappedTextStyles));
});
