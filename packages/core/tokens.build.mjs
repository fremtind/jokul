import StyleDictionary from "style-dictionary-utils";

const myStyleDictionary = StyleDictionary.extend({
    source: ["tokens/**/*.json"],
    platforms: {
        ts: {
            transforms: ["color/hexAlpha", "shadow/css", "name/ti/camel"],
            buildPath: "src/",
            files: [
                {
                    filter: "isSource",
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
    },
});

myStyleDictionary.buildAllPlatforms();
