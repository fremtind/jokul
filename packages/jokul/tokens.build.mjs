import { camelCase } from "change-case";
import Prettier from "prettier";
import StyleDictionary from "style-dictionary";
import { fileHeader, formattedVariables } from "style-dictionary/utils";

const excludeFromTokenPath = (token, exclude) =>
    token.path.filter((step) => !exclude.includes(step));

/**
 * Forferdelig stygg funksjon, skrevet av Copilot, for å serialisere tokens
 * med tall som navn på riktig måte. Forhåpentligvis blir vi kvitt denne
 * igjen snart (famous last words)
 */
function serialize(object, indent = 4) {
    const pad = (n) => " ".repeat(n);

    if (object === null) return "null";

    if (Array.isArray(object)) {
        return `[${object.map((v) => serialize(v, indent)).join(", ")}]`;
    }

    if (typeof object === "object") {
        const entries = Object.entries(object).map(([key, value]) => {
            let keyStr;

            if (
                typeof key === "number" ||
                (!Number.isNaN(Number(key)) && key.trim() !== "")
            ) {
                keyStr = Number(key).toString();
            } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
                keyStr = key;
            } else {
                keyStr = JSON.stringify(key);
            }

            return `${pad(indent)}${keyStr}: ${serialize(value, indent + indent)}`;
        });

        return `{
${entries.join(",\n")}
${pad(indent - indent)}}`;
    }

    if (typeof object === "string") return JSON.stringify(object);

    return String(object);
}

const formatKeysToCamelCase = (token) => {
    if (!token || typeof token !== "object") {
        return token;
    }

    if ("value" in token) {
        return token.value;
    }

    const camelCasedObject = {};
    for (const [key, value] of Object.entries(token)) {
        const camelCasedKey = camelCase(key);
        camelCasedObject[camelCasedKey] = formatKeysToCamelCase(value);
    }

    return camelCasedObject;
};

const stripTermsFromTokenNames = (
    dictionary,
    platform,
    terms = ["ref", "sys", "light", "dark"],
) => {
    for (const token of dictionary.allTokens) {
        if (terms.some((term) => token.path.includes(term))) {
            const tokenPath = excludeFromTokenPath(token, terms);
            token.name = `${platform.prefix}-${tokenPath.join("-")}`;
        }
    }
};

// Formatters
StyleDictionary.registerFormat({
    name: "javascript/esm",
    format: async ({ dictionary, file, platform = {} }) => {
        const { prefix } = platform;
        const tokens = prefix
            ? { [prefix]: dictionary.tokens }
            : dictionary.tokens;

        const output = `${await fileHeader({ file })}export default ${serialize(formatKeysToCamelCase(tokens))};\n`;

        return Prettier.format(output, {
            parser: "typescript",
            semi: true,
            trailingComma: "all",
            singleQuote: false,
            printWidth: 120,
            tabWidth: 4,
            arrowParens: "always",
        });
    },
});

StyleDictionary.registerFormat({
    name: "css/theme-variables",
    format: async ({ dictionary, file, platform }) => {
        stripTermsFromTokenNames(dictionary, platform);

        return `${await fileHeader({ file })}
@layer jokul.theme {
    :root {
${formattedVariables({
    dictionary,
    format: "css",
    formatting: {
        indentation: "        ",
    },
})}
    }
}`;
    },
});

StyleDictionary.registerFormat({
    name: "css/dynamic-color-variables",
    format: async ({ dictionary, file, platform }) => {
        const lightModeOnly = {
            ...dictionary,
            allTokens: dictionary.allTokens.filter((token) =>
                token.path.includes("light"),
            ),
        };
        stripTermsFromTokenNames(lightModeOnly, platform);

        const darkModeOnly = {
            ...dictionary,
            allTokens: dictionary.allTokens.filter((token) =>
                token.path.includes("dark"),
            ),
        };
        stripTermsFromTokenNames(darkModeOnly, platform);

        return `${await fileHeader({ file })}
/* stylelint-disable */
@use "../jkl";

@layer jokul.theme {
    @include jkl.light-mode-variables {
${formattedVariables({
    dictionary: lightModeOnly,
    format: "css",
    formatting: {
        indentation: "        ",
    },
})}
    }

    @include jkl.dark-mode-variables {
${formattedVariables({
    dictionary: darkModeOnly,
    format: "css",
    formatting: {
        indentation: "        ",
    },
})}
    }
}
`;
    },
});

StyleDictionary.registerFormat({
    name: "scss/sass-variables",
    format: async ({ dictionary, file, platform }) => {
        const header = await fileHeader({ file });

        const staticColorTokens = dictionary.allTokens.filter(
            (token) =>
                !token.path.some((word) => ["light", "dark"].includes(word)),
        );

        const colorTokens = dictionary.allTokens.filter((token) =>
            // Bruker 'light' som kilde for å unngå duplikater
            token.path.includes("light"),
        );

        const dynamicColorTokens = colorTokens.map((token) => {
            const tokenPath = excludeFromTokenPath(token, ["dark", "light"]);
            const variableName = tokenPath.join("-");

            return {
                ...token,
                name: variableName,
                value: `var(--${platform.prefix || "jkl"}-${variableName})`,
            };
        });

        const staticColorVariables = formattedVariables({
            format: "sass",
            dictionary: { ...dictionary, allTokens: staticColorTokens },
        });

        const dynamicColorVariables = formattedVariables({
            format: "sass",
            dictionary: { ...dictionary, allTokens: dynamicColorTokens },
        });

        return `${header}
${staticColorVariables}

// Dynamiske variabler for farge, via referanse til CSS-variabler
${dynamicColorVariables}`;
    },
});

StyleDictionary.registerFormat({
    name: "tailwindcss/colors",
    format: async ({ dictionary, file, platform }) => {
        const { prefix } = platform;
        let output = await fileHeader({ file });

        const tailwindColorEntries = dictionary.allTokens
            .filter((token) => token.path.includes("light"))
            .map((token) => {
                const tokenPath = excludeFromTokenPath(token, [
                    "dark",
                    "light",
                ]);
                const tailwindColorName = tokenPath.slice(1).join("-");
                const cssVariableName = [prefix, ...tokenPath].join("-");

                return `    "${tailwindColorName}": "var(--${cssVariableName})",`;
            })
            .join("\n");

        output += `const colors = {\n${tailwindColorEntries}\n};\n\n`;
        output += "export default colors;\n";

        return output;
    },
});

// Filters
const tokenMatcher = (token, criteria = {}) => {
    if (token.path[0] === "ref") {
        return false;
    }

    const { mustContain, mustContainOneOf } = criteria;

    if (
        mustContain &&
        !mustContain.every((path) => token.path.includes(path))
    ) {
        return false;
    }

    if (
        mustContainOneOf &&
        !token.path.some((path) => mustContainOneOf.includes(path))
    ) {
        return false;
    }

    return true;
};

// Dictionaries
async function build() {
    const legacyDesignTokensDictionary = await new StyleDictionary({
        source: ["src/core/tokens/legacy/*.json"],
        platforms: {
            ts: {
                transforms: ["name/camel"],
                buildPath: "./src/core/",
                files: [
                    {
                        destination: "tokens.ts",
                        format: "javascript/esm",
                        filter: (token) =>
                            !token.filePath.includes("color.legacy"),
                    },
                ],
            },
            scss: {
                transformGroup: "scss",
                buildPath: "./src/core/jkl/",
                files: [
                    {
                        destination: "_legacy-tokens.scss",
                        format: "scss/sass-variables",
                    },
                ],
            },
            css: {
                transformGroup: "css",
                buildPath: "./src/core/styles/",
                prefix: "jkl",
                files: [
                    {
                        destination: "_legacy-tokens.scss",
                        format: "css/theme-variables",
                        filter: (token) => !token.filePath.includes("semantic"),
                    },
                    {
                        destination: "_legacy-color-tokens.scss",
                        format: "css/dynamic-color-variables",
                        filter: (token) => token.filePath.includes("semantic"),
                    },
                ],
            },
            tailwind: {
                buildPath: "src/tailwind/",
                prefix: "jkl",
                files: [
                    {
                        destination: "colors.ts",
                        format: "tailwindcss/colors",
                        filter: (token) => tokenMatcher(token),
                    },
                ],
            },
        },
    });

    const designTokensDictionary = await new StyleDictionary({
        source: ["src/core/tokens/!(legacy)/*.json"],
        platforms: {
            scss: {
                transformGroup: "scss",
                buildPath: "./src/core/jkl/",
                files: [
                    {
                        destination: "_tokens.scss",
                        format: "scss/sass-variables",
                        filter: (token) => tokenMatcher(token),
                    },
                ],
            },
            css: {
                transformGroup: "scss",
                buildPath: "./src/core/styles/",
                prefix: "jkl",
                files: [
                    {
                        destination: "_tokens.scss",
                        format: "css/theme-variables",
                        filter: (token) =>
                            tokenMatcher(token, {
                                mustContainOneOf: [
                                    "brand",
                                    "functional",
                                    "typography",
                                    "unit",
                                ],
                            }),
                    },
                    {
                        destination: "_color-tokens.scss",
                        format: "css/dynamic-color-variables",
                        filter: (token) =>
                            tokenMatcher(token, {
                                mustContain: ["sys", "color"],
                            }),
                    },
                    {
                        destination: "_spacing-tokens.scss",
                        format: "css/theme-variables",
                        filter: (token) => token.path.includes("spacing"),
                    },
                ],
            },
        },
    });

    // Build
    await designTokensDictionary.buildAllPlatforms();
    await legacyDesignTokensDictionary.buildAllPlatforms();
}

build();
