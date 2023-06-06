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
