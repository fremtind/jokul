import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { isColorSchemeToken, isSizeToken } from "../filters.js";

/**
 * Checks if a token is a typography/text style token.
 */
function isTextStyleToken(token: TransformedToken): boolean {
    const value = token.original?.value ?? token.value;
    return (
        token.path[0] === "textStyle" &&
        value !== null &&
        typeof value === "object" &&
        "fontSize" in value
    );
}

/**
 * Formats color tokens for Tailwind v4 @theme.
 * Uses light-dark() CSS function for color scheme support.
 */
function formatColorVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(isColorSchemeToken)
        .map((token) => {
            const lightValue = token.value.light;
            const darkValue = token.value.dark;
            return `${indentation}--${token.name}: ${lightValue};\n${indentation}--${token.name}: light-dark(${lightValue}, ${darkValue});`;
        })
        .join("\n");
}

/**
 * Formats spacing tokens for Tailwind v4 @theme.
 */
function formatSpacingVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(
            (token) =>
                token.path[0] === "spacing" &&
                !isSizeToken(token) &&
                token.path.length === 2,
        )
        .map((token) => {
            const step = token.path[1];
            return `${indentation}--spacing-${step}: ${token.value};`;
        })
        .join("\n");
}

/**
 * Formats font weight tokens for Tailwind v4 @theme.
 */
function formatFontWeightVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(
            (token) =>
                token.path[0] === "font" &&
                token.path[1] === "weight" &&
                !isSizeToken(token),
        )
        .map((token) => {
            const weight = token.path[2];
            return `${indentation}--font-weight-${weight}: ${token.value};`;
        })
        .join("\n");
}

/**
 * Formats breakpoint tokens for Tailwind v4 @theme.
 */
function formatBreakpointVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(
            (token) => token.path[0] === "breakpoint" && !isSizeToken(token),
        )
        .map((token) => {
            const step = token.path[1];
            return `${indentation}--breakpoint-${step}: ${token.value};`;
        })
        .join("\n");
}

/**
 * Formats border radius tokens for Tailwind v4 @theme.
 */
function formatBorderRadiusVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(
            (token) =>
                token.path[0] === "border" &&
                token.path[1] === "radius" &&
                !isSizeToken(token),
        )
        .map((token) => {
            const step = token.path[2];
            return `${indentation}--radius-${step}: ${token.value};`;
        })
        .join("\n");
}

/**
 * Formats border width tokens for Tailwind v4 @theme.
 */
function formatBorderWidthVariables(
    tokens: TransformedToken[],
    indentation: string,
): string {
    return tokens
        .filter(
            (token) =>
                token.path[0] === "border" &&
                token.path[1] === "width" &&
                !isSizeToken(token),
        )
        .map((token) => {
            const step = token.path[2];
            return `${indentation}--border-width-${step}: ${token.value};`;
        })
        .join("\n");
}

/**
 * Formats text style tokens as Tailwind v4 @utility rules.
 * Uses the CSS font shorthand property pointing to the existing text style variables.
 */
function formatTextUtilities(tokens: TransformedToken[]): string {
    return tokens
        .filter(isTextStyleToken)
        .map((token) => {
            const name = token.path[1];
            return [
                `@utility ${name} {`,
                `    font: var(--jkl-text-style-${name});`,
                "}",
            ].join("\n");
        })
        .join("\n\n");
}

/**
 * Format for Tailwind v4 theme CSS.
 *
 * This format generates a Tailwind v4 compatible theme file with:
 * - @theme block containing CSS custom properties for colors, spacing, fonts, etc.
 * - @utility rules for responsive typography utilities
 *
 * The output is designed to be imported into a Tailwind v4 CSS file.
 *
 * @example
 * ```css
 * @theme {
 *     --color-background-page: light-dark(#F4F2EF, #1B1917);
 *     --spacing-16: 1rem;
 *     --font-weight-bold: 700;
 *     --breakpoint-medium: 680px;
 *     --radius-m: 0.75rem;
 * }
 *
 * @utility heading-1 {
 *     font: var(--jkl-text-style-heading-1);
 * }
 * ```
 */
const cssTailwind4Format: Format = {
    name: "css/tailwind4",
    format: async ({
        dictionary,
        file,
    }: { dictionary: Dictionary; file: File }) => {
        const allTokens = dictionary.allTokens;
        const indentation = "    ";

        const colorVariables = formatColorVariables(allTokens, indentation);
        const spacingVariables = formatSpacingVariables(allTokens, indentation);
        const fontWeightVariables = formatFontWeightVariables(
            allTokens,
            indentation,
        );
        const breakpointVariables = formatBreakpointVariables(
            allTokens,
            indentation,
        );
        const radiusVariables = formatBorderRadiusVariables(
            allTokens,
            indentation,
        );
        const widthVariables = formatBorderWidthVariables(
            allTokens,
            indentation,
        );
        const textUtilities = formatTextUtilities(allTokens);

        const themeContent = [
            colorVariables,
            spacingVariables,
            fontWeightVariables,
            breakpointVariables,
            radiusVariables,
            widthVariables,
        ]
            .filter(Boolean)
            .join("\n\n");

        return `${await fileHeader({ file })}
@theme {
    --*: initial;

${themeContent}
}

${textUtilities}
`;
    },
};

export default cssTailwind4Format;
