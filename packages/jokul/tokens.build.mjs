import { camelCase } from "change-case";
import { format } from "prettier";
import StyleDictionary from "style-dictionary";
import {
    fileHeader,
    formattedVariables,
    usesReferences,
} from "style-dictionary/utils";

const transformTokens = (token) => {
    if (!token || typeof token !== "object") {
        return token;
    }

    if ("value" in token) {
        return token.value;
    }

    const nextObj = {};
    for (const [prop, value] of Object.entries(token)) {
        const camelProp = camelCase(prop);
        nextObj[camelProp] = transformTokens(value);
    }

    return nextObj;
};

StyleDictionary.registerFormat({
    name: "javascript/esm",
    format: async ({ dictionary, file, platform = {} }) => {
        const { prefix } = platform;
        const tokens = prefix
            ? { [prefix]: dictionary.tokens }
            : dictionary.tokens;

        const output = `${await fileHeader({ file })}export default \n${JSON.stringify(
            transformTokens(tokens),
            null,
            2,
        )}\n`;

        // return prettified
        // return format(output, {
        //     semi: true,
        //     trailingComma: "all",
        //     singleQuote: false,
        //     printWidth: 120,
        //     tabWidth: 4,
        //     arrowParens: "always",
        // });
    },
});

const formatValueAsScssVar = (originalValue) => {
    const parsedName = originalValue
        .replace(/({|})/g, "")
        .split(".")
        .filter((word) => word !== "value")
        .join("-");
    return `#{jkl.\$${parsedName}}`;
};

StyleDictionary.registerFormat({
    name: "css/variables-ref-scss",
    format: async ({ dictionary, file, platform }) => {
        let output = `${await fileHeader({ file })}@use "../jkl";\n\n`;
        const { prefix } = platform;

        // Light mode
        output += "@include jkl.light-mode-variables {\n    ";
        output += dictionary.allTokens
            .filter((token) => token.path.includes("light"))
            .map((token) => {
                const value = token.value;
                const name = [
                    prefix,
                    ...token.path.filter(
                        (step) => !["dark", "light"].includes(step),
                    ),
                ].join("-");

                return `--${name}: ${value};`;
            })
            .join("\n    ");
        output += "\n}\n";

        // Dark mode
        output += "@include jkl.dark-mode-variables {\n    ";
        output += dictionary.allTokens
            .filter((token) => token.path.includes("dark"))
            .map((token) => {
                const value = token.value;
                const name = [
                    prefix,
                    ...token.path.filter(
                        (step) => !["dark", "light"].includes(step),
                    ),
                ].join("-");

                return `--${name}: ${value};`;
            })
            .join("\n    ");
        output += "\n}\n";

        return output;
    },
});

const variableFormatter =
    (format = "sass") =>
    async ({ dictionary, file }) => {
        const variableDenotion = format === "sass" ? "$" : "@";
        const formatProperty = (token) => {
            const path = token.path
                .filter((word) => !["light", "dark"].includes(word))
                .join("-");

            return `${variableDenotion}${path}: var(--jkl-${path});`;
        };

        const colorVariables = dictionary.allTokens
            .filter((token) => token.path.some((word) => word === "light"))
            .map((token) => ({
                ...token,
                path: token.path.filter((word) => word !== "light"),
            }));

        const otherVariables = dictionary.allTokens.filter(
            (token) =>
                !token.path.some((word) => ["light", "dark"].includes(word)) &&
                !token.filePath.includes("legacy"),
        );

        return `${await fileHeader({ file })}
${formattedVariables({
    dictionary: { ...dictionary, allTokens: otherVariables },
    format: format,
})}

// Dynamiske variabler for farge, via referanse til CSS-variabler
${colorVariables.map(formatProperty).join("\n")}`;
    };

StyleDictionary.registerFormat({
    name: "scss/vars",
    format: variableFormatter("sass"),
});

StyleDictionary.registerFormat({
    name: "less/vars",
    format: variableFormatter("less"),
});

StyleDictionary.registerFilter({
    name: "isBaseVariable",
    filter: (token) => {
        const baseCategories = [
            "brand",
            "functional",
            "spacing",
            "typography",
            "unit",
        ];
        return token.path.some((word) => baseCategories.includes(word));
    },
});

StyleDictionary.registerFilter({
    name: "isNotBaseVariable",
    filter: (token) => {
        const baseCategories = ["brand", "functional", "spacing", "typography"];
        return !token.path.some((word) => baseCategories.includes(word));
    },
});

const legacyDictionary = new StyleDictionary({
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

const myStyleDictionary = new StyleDictionary({
    source: ["src/core/tokens/**/*.json"],
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
            files: [
                {
                    destination: "_tokens.scss",
                    format: "scss/vars",
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
                    filter: "isBaseVariable",
                },
                {
                    destination: "_color-tokens.scss",
                    format: "css/variables-ref-scss",
                    filter: (token) =>
                        token.path.includes("light") ||
                        token.path.includes("dark"),
                },
            ],
        },
    },
});

const lessStyleDictionary = new StyleDictionary({
    source: ["src/core/tokens/**/*.json"],
    platforms: {
        less: {
            transformGroup: "less",
            buildPath: "./src/core/",
            files: [
                {
                    destination: "tokens.less",
                    format: "less/variables",
                },
            ],
        },
    },
});

StyleDictionary.registerFormat({
    name: "tailwindcss/colors",
    format: async ({ dictionary, file, platform }) => {
        const { prefix } = platform;

        let output = await fileHeader({ file });

        output += "const colors = {\n    ";
        output += dictionary.allTokens
            .filter((token) => token.path.includes("light"))
            .map((token) => {
                const key = [
                    ...token.path
                        .slice(1)
                        .filter((step) => !["dark", "light"].includes(step)),
                ].join("-");

                const value = [
                    prefix,
                    ...token.path.filter(
                        (step) => !["dark", "light"].includes(step),
                    ),
                ].join("-");

                return `"${key}": "var(--${value})",`;
            })
            .join("\n    ");
        output += "\n};\n\n";
        output += "export default colors;\n";

        return output;
    },
});

const tailwindPreset = new StyleDictionary({
    source: ["src/core/tokens/**/*.json"],
    platforms: {
        tailwind: {
            buildPath: "src/tailwind/",
            prefix: "jkl",
            files: [
                {
                    destination: "colors.ts",
                    format: "tailwindcss/colors",
                },
            ],
        },
    },
});

await tailwindPreset.buildAllPlatforms();
await myStyleDictionary.buildAllPlatforms();
await lessStyleDictionary.buildAllPlatforms();
await legacyDictionary.buildAllPlatforms();
