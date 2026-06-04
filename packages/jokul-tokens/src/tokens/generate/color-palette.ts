import path from "node:path";

import { generatePalette } from "../../colors/colors.js";
import {
    type ColorScheme,
    GLOBAL_COLORS,
    type HexColor,
} from "../../colors/types.js";
import { writeFile } from "../../utilities/file.js";

/**
 * Genererer et fargetoken i et format som kan forstås av
 * Style Dictionary og Tokens Studio. Baserer seg på
 * Design Tokens Format Module:
 * https://www.designtokens.org/tr/drafts/format/
 */
export function generateColorToken(color: HexColor, type = "color") {
    return {
        $type: type,
        $value: color,
    };
}

/**
 * Genererer tokens for en fargeskala basert på en gitt farge og fargetema.
 * @param baseColor Fargen som skal være utgangspunkt for skalaen
 * @param colorScheme Fargetema skalaen skal genereres for (light eller dark)
 * @returns Et objekt med fargetokens for hver fargerolle
 */
export function generateTokenScaleFromColor(
    name: string,
    baseColor: HexColor,
    colorScheme: ColorScheme,
) {
    return Object.fromEntries(
        Object.entries(generatePalette(baseColor, colorScheme)).map(
            ([role, colorData]) => [
                role.includes("-@") ? role.replace("@", name) : role,
                generateColorToken(colorData.hex),
            ],
        ),
    );
}

/**
 * Genererer fullstendig fargeskala for en gitt merkevarefarge og fargetema.
 * @param brandColor Fargekoden som skal brukes som merkevarefarge
 * @param colorScheme Fargetema som skal genereres (light eller dark)
 * @returns Fullt sett med fargetokens for både merkevare- og globale farger
 */
export function generateColorSchemeTokens(
    brandColor: HexColor,
    colorScheme: ColorScheme,
) {
    return {
        theme: {
            brand: generateTokenScaleFromColor(
                "brand",
                brandColor,
                colorScheme,
            ),
        },
        global: {
            neutral: generateTokenScaleFromColor(
                "neutral",
                GLOBAL_COLORS.neutral,
                colorScheme,
            ),
            blue: generateTokenScaleFromColor(
                "blue",
                GLOBAL_COLORS.blue,
                colorScheme,
            ),
            green: generateTokenScaleFromColor(
                "green",
                GLOBAL_COLORS.green,
                colorScheme,
            ),
            red: generateTokenScaleFromColor(
                "red",
                GLOBAL_COLORS.red,
                colorScheme,
            ),
            yellow: generateTokenScaleFromColor(
                "yellow",
                GLOBAL_COLORS.yellow,
                colorScheme,
            ),
        },
    };
}

function generateCSSVariablesFromColor(
    name: string,
    baseColor: HexColor,
    colorScheme: ColorScheme,
) {
    return Object.entries(generatePalette(baseColor, colorScheme)).map(
        ([role, colorData]) => {
            const cssVarName = role.includes("@")
                ? `--color-${role.replaceAll("@", name)}`
                : `--color-${name}-${role}`;
            return `      ${cssVarName}: ${colorData.hex};\n`;
        },
    );
}

export function generateCSSTokens(brandColor: HexColor) {
    const lightModeVariables = [
        ...generateCSSVariablesFromColor("brand", brandColor, "light"),
        ...generateCSSVariablesFromColor(
            "neutral",
            GLOBAL_COLORS.neutral,
            "light",
        ),
        ...generateCSSVariablesFromColor("info", GLOBAL_COLORS.blue, "light"),
        ...generateCSSVariablesFromColor(
            "success",
            GLOBAL_COLORS.green,
            "light",
        ),
        ...generateCSSVariablesFromColor("danger", GLOBAL_COLORS.red, "light"),
        ...generateCSSVariablesFromColor(
            "warning",
            GLOBAL_COLORS.yellow,
            "light",
        ),
    ];

    // for (const color in GLOBAL_COLORS) {
    //     lightModeVariables = lightModeVariables.concat(
    //         ...generateCSSVariablesFromColor(
    //             color,
    //             GLOBAL_COLORS[color],
    //             "light",
    //         ),
    //     );
    // }

    const darkModeVariables = [
        ...generateCSSVariablesFromColor("brand", brandColor, "dark"),
        ...generateCSSVariablesFromColor(
            "neutral",
            GLOBAL_COLORS.neutral,
            "dark",
        ),
        ...generateCSSVariablesFromColor("info", GLOBAL_COLORS.blue, "dark"),
        ...generateCSSVariablesFromColor(
            "success",
            GLOBAL_COLORS.green,
            "dark",
        ),
        ...generateCSSVariablesFromColor("danger", GLOBAL_COLORS.red, "dark"),
        ...generateCSSVariablesFromColor(
            "warning",
            GLOBAL_COLORS.yellow,
            "dark",
        ),
    ];

    // for (const color in GLOBAL_COLORS) {
    //     darkModeVariables = darkModeVariables.concat(
    //         ...generateCSSVariablesFromColor(
    //             color,
    //             GLOBAL_COLORS[color],
    //             "dark",
    //         ),
    //     );
    // }

    let output = "/* Auto-genererte CSS-variabler */\n";
    // Vi vil legge alle variablene inn i laget jokul.theme
    output = output.concat("@layer jokul.theme {\n");

    // Variabler for spesifisert light mode
    output = output.concat(
        "  :root, [data-color-scheme='light'] {\n",
        ...lightModeVariables,
        "  }\n\n",
    );

    // Variabler for automatisk light mode
    output = output.concat(
        "  @media (prefers-color-scheme: light) {\n",
        "    [data-color-scheme='auto'] {\n",
        ...lightModeVariables,
        "    }\n",
        "  }\n\n",
    );

    // Variabler for spesifisert dark mode
    output = output.concat(
        "  [data-color-scheme='dark'] {\n",
        ...darkModeVariables,
        "  }\n\n",
    );

    // Variabler for automatisk dark mode
    output = output.concat(
        "  @media (prefers-color-scheme: dark) {\n",
        "    [data-color-scheme='auto'] {\n",
        ...darkModeVariables,
        "    }\n",
        "  }\n\n",
    );

    output = output.concat("}\n");

    return output;
}

await writeFile(
    path.join(
        path.resolve(process.cwd(), "generated-tokens"),
        "color-light.json",
    ),
    JSON.stringify(generateColorSchemeTokens("#1b1917", "light"), null, 2),
);
