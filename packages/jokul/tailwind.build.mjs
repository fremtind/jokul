import StyleDictionary from "style-dictionary";

StyleDictionary.registerFormat({
    name: "tailwindcss/colors",
    formatter: function ({ dictionary, file, platform }) {
        const { prefix } = platform;

        let output = StyleDictionary.formatHelpers.fileHeader({ file });

        output += `export const colors = {\n    `;
        output += dictionary.allTokens
            .filter((token) => token.path.includes("light"))
            .map((token) => {
                console.log(token);

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
        output += "\n};\n";

        return output;
    },
});

const tailwindConfig = StyleDictionary.extend({
    source: ["src/core/tokens/**/*.json"],
    platforms: {
        tailwind: {
            buildPath: "tailwind/",
            prefix: "jkl",
            files: [
                {
                    destination: "tailwind.config.ts",
                    format: "tailwindcss/colors",
                },
            ],
        },
    },
});

tailwindConfig.buildAllPlatforms();
