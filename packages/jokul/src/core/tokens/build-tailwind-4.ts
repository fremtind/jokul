import { writeFile } from "node:fs/promises";
import path from "node:path";
import { kebabCase } from "change-case";

export const buildTailwind4Theme = async () => {
    const { default: colors } = await import("../../tailwind/colors.js");
    const { default: tokens } = await import("../tokens.js");

    const colorVariables = Object.entries(colors).map(
        ([name, value]) => `    --color-${name}: ${value};`,
    );

    const spacingVariables = Object.entries(tokens.spacing).map(
        ([step, value]) => `    --spacing-${kebabCase(step)}: ${value};`,
    );

    const fontWeights = Object.entries(tokens.typography.font.weight).map(
        ([weight, value]) => `    --font-weight-${weight}: ${value};`,
    );

    const breakpoints = Object.entries(tokens.breakpoint).map(
        ([step, value]) => `    --breakpoint-${kebabCase(step)}: ${value};`,
    );

    const textUtilities = Object.entries(tokens.typography.style).map(
        ([name, value]) =>
            [
                `@utility ${kebabCase(name)} {`,
                ...Object.entries(value.small).map(
                    ([property, value]) =>
                        `    ${kebabCase(property)}: ${value};`,
                ),
                "",
                `    @media (min-width: ${tokens.breakpoint.medium}) {`,
                ...Object.entries(value.base).map(
                    ([property, value]) =>
                        `        ${kebabCase(property)}: ${value};`,
                ),
                "    }",
                "}",
            ].join("\n"),
    );

    const tailwindTheme = `
/* stylelint-disable */
@theme {
    --*: initial;

${colorVariables.join("\n")}

${spacingVariables.join("\n")}

${fontWeights.join("\n")}

${breakpoints.join("\n")}
}

${textUtilities.join("\n\n")}
`;

    await writeFile(
        path.resolve("src/tailwind/v4/jokul-tailwind.css"),
        tailwindTheme,
    );
};
