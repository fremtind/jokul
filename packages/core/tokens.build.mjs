import { camelCase } from "change-case";
import { format } from "prettier";
import StyleDictionary from "style-dictionary";

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
    formatter: function ({ dictionary, file, platform = {} }) {
        const { prefix } = platform;
        const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;

        const output =
            StyleDictionary.formatHelpers.fileHeader({ file }) +
            `export default \n${JSON.stringify(transformTokens(tokens), null, 2)}\n`;

        // return prettified
        return format(output, {
            semi: true,
            trailingComma: "all",
            singleQuote: false,
            printWidth: 120,
            tabWidth: 4,
            arrowParens: "always",
        });
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
    formatter: function ({ dictionary, file, platform }) {
        let output = StyleDictionary.formatHelpers.fileHeader({ file }) + `@use "../jkl";\n\n`;
        const { prefix } = platform;

        // Light mode
        output += `@include jkl.light-mode-variables {\n    `;
        output += dictionary.allTokens
            .filter((token) => token.path.includes("light"))
            .map((token) => {
                const value = dictionary.usesReference(token.original.value)
                    ? formatValueAsScssVar(token.original.value)
                    : token.value;
                const name = [prefix, ...token.path.filter((step) => !["dark", "light"].includes(step))].join("-");

                return `--${name}: ${value};`;
            })
            .join("\n    ");
        output += "\n}\n";

        // Dark mode
        output += `@include jkl.dark-mode-variables {\n    `;
        output += dictionary.allTokens
            .filter((token) => token.path.includes("dark"))
            .map((token) => {
                const value = dictionary.usesReference(token.original.value)
                    ? formatValueAsScssVar(token.original.value)
                    : token.value;
                const name = [prefix, ...token.path.filter((step) => !["dark", "light"].includes(step))].join("-");

                return `--${name}: ${value};`;
            })
            .join("\n    ");
        output += "\n}\n";

        return output;
    },
});

StyleDictionary.registerFilter({
    name: "isBaseVariable",
    matcher: function (token) {
        const baseCategories = ["brand", "functional", "spacing", "typography"];
        return token.path.some((word) => baseCategories.includes(word));
    },
});

StyleDictionary.registerFilter({
    name: "isNotBaseVariable",
    matcher: function (token) {
        const baseCategories = ["brand", "functional", "spacing", "typography"];
        return !token.path.some((word) => baseCategories.includes(word));
    },
});

const legacyDictionary = StyleDictionary.extend({
    source: ["tokens/legacy/*.json"],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "jkl/",
            prefix: "jkl",
            files: [
                {
                    destination: "_legacy-tokens.scss",
                    format: "scss/variables",
                },
            ],
        },
        css: {
            transformGroup: "scss",
            buildPath: "styles/",
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

const myStyleDictionary = StyleDictionary.extend({
    source: ["tokens/**/*.json"],
    platforms: {
        ts: {
            transforms: ["name/cti/camel"],
            buildPath: "src/",
            files: [
                {
                    destination: "tokens.ts",
                    format: "javascript/esm",
                },
            ],
        },
        scss: {
            transformGroup: "scss",
            buildPath: "jkl/",
            files: [
                {
                    destination: "_tokens.scss",
                    format: "scss/variables",
                },
            ],
        },
        css: {
            transformGroup: "scss",
            buildPath: "styles/",
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
                    filter: (token) => token.path.includes("light") || token.path.includes("dark"),
                },
            ],
        },
        less: {
            transformGroup: "less",
            buildPath: "./",
            files: [
                {
                    destination: "tokens.less",
                    format: "less/variables",
                },
            ],
        },
    },
});

myStyleDictionary.buildAllPlatforms();
legacyDictionary.buildAllPlatforms();
