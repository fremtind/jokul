import StyleDictionary from "style-dictionary";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { camelCase } from "change-case";
import { format } from "prettier";

const excludeFromTokenPath = (token, exclude) =>
    token.path.filter((step) => !exclude.includes(step));

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

const stripRefPrefixFromTokenNames = (dictionary, platform) => {
    for (const token of dictionary.allTokens) {
        if (token.path[0] === "ref") {
            const tokenPath = excludeFromTokenPath(token, ["ref"]);
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

        const output = `${await fileHeader({ file })}export default \n${JSON.stringify(
            formatKeysToCamelCase(tokens),
            null,
            2,
        )}\n`;

        return format(output, {
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
    name: "scss/color-variables",
    format: async ({ dictionary, file }) => {
        let output = `${await fileHeader({ file })}@use "../jkl";\n`;

        const colorSchemeLight = {
            ...dictionary,
            allTokens: dictionary.allTokens.filter((token) =>
                token.path.includes("light"),
            ),
        };

        const colorSchemeDark = {
            ...dictionary,
            allTokens: dictionary.allTokens.filter((token) =>
                token.path.includes("dark"),
            ),
        };

        output += `\n@include jkl.light-mode-variables {\n${formattedVariables({
            dictionary: colorSchemeLight,
            format: "css",
            formatting: { indentation: "    " },
        })}\n}\n`;

        output += `\n@include jkl.dark-mode-variables {\n${formattedVariables({
            dictionary: colorSchemeDark,
            format: "css",
            formatting: { indentation: "    " },
        })}\n}\n`;

        return output;
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
                value: `var(--${platform.prefix}-${variableName})`,
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

StyleDictionary.registerFormat({
    name: "css/spacing-variables",
    format: async ({ dictionary, file, platform }) => {
        let output = `${await fileHeader({ file })}`;

        stripRefPrefixFromTokenNames(dictionary, platform);

        const referenceTokens = dictionary.allTokens.filter(
            (token) => token.path[0] === "ref",
        );

        const systemTokens = dictionary.allTokens.filter(
            (token) => token.path[0] === "sys",
        );

        const mutatedSystemTokens = systemTokens
            .filter((token) => token.path.includes("productive"))
            .map((token) => {
                const tokenPath = excludeFromTokenPath(token, [
                    "sys",
                    "productive",
                ]);
                const variableName = `${platform.prefix}-${tokenPath.join("-")}`;

                return {
                    ...token,
                    name: variableName,
                    value: token.value,
                };
            });

        const rootTokens = [...referenceTokens, ...mutatedSystemTokens];

        output += `:root {\n${formattedVariables({
            dictionary: { ...dictionary, allTokens: rootTokens },
            format: "css",
            formatting: { indentation: "    " },
        })}\n}\n\n`;

        const createLook = (look) => {
            const lookTokens = systemTokens
                .filter((token) => token.path.includes(look))
                .map((token) => {
                    const tokenPath = excludeFromTokenPath(token, [
                        "sys",
                        look,
                    ]);
                    const variableName = tokenPath.join("-");

                    return {
                        ...token,
                        name: `${platform.prefix}-${variableName}`,
                        value: token.value,
                    };
                });

            return `:root, [data-look="${look}"] {\n${formattedVariables({
                dictionary: { ...dictionary, allTokens: lookTokens },
                format: "css",
                formatting: { indentation: "    " },
                outputReferences: true,
            })}\n}`;
        };

        output += `${createLook("productive")}\n\n`;
        output += `${createLook("expressive")}\n`;

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
            scss: {
                transformGroup: "scss",
                buildPath: "./src/core/jkl/",
                files: [
                    {
                        destination: "_legacy-tokens.scss",
                        format: "scss/variables",
                    },
                ],
            },
            css: {
                transformGroup: "scss",
                buildPath: "./src/core/styles/",
                prefix: "jkl",
                files: [
                    {
                        destination: "_legacy-tokens.scss",
                        format: "css/variables",
                    },
                ],
            },
        },
    });

    const designTokensDictionary = await new StyleDictionary({
        source: ["src/core/tokens/**/*.json"],
        exclude: ["src/core/tokens/legacy/*.json"],
        platforms: {
            ts: {
                transforms: ["name/camel"],
                buildPath: "./src/core/",
                files: [
                    {
                        destination: "tokens.ts",
                        format: "javascript/esm",
                    },
                ],
            },
            scss: {
                transformGroup: "scss",
                buildPath: "./src/core/jkl/",
                prefix: "jkl",
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
                        format: "css/variables",
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
                        format: "scss/color-variables",
                        filter: (token) =>
                            tokenMatcher(token, {
                                mustContain: ["sys", "color"],
                            }),
                    },
                    {
                        destination: "_spacing-tokens.scss",
                        format: "css/spacing-variables",
                        filter: (token) => token.path.includes("spacing"),
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

    // Build
    await designTokensDictionary.buildAllPlatforms();
    await legacyDesignTokensDictionary.buildAllPlatforms();
}

build();
