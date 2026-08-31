import { writeFile } from "node:fs/promises";
import StyleDictionary from "style-dictionary";
import { BRANDS } from "../../utilities/types.js";
import { createBrandConfig, jokulTokens } from "./config.js";
import "./register.js";

async function build() {
    console.log("Starting design token build...\n");

    console.log("⚙️ Building tokens (CSS, TypeScript, SCSS, and Tailwind v4)");
    const dictionary = new StyleDictionary(jokulTokens);
    await dictionary.buildAllPlatforms();

    for (const brand of BRANDS) {
        console.log(`⚙️ Building separate color output for brand "${brand}"`);
        const brandDictionary = new StyleDictionary(createBrandConfig(brand));
        await brandDictionary.buildPlatform("css");
    }

    console.log("⚙️ Writing index file for brands");
    const forwards = BRANDS.map((brand) => `@forward "${brand}";`).join("\n");
    await writeFile(
        "./src/styles/theme/brands/_index.scss",
        `// Do not edit directly, this file was auto-generated.\n${forwards}\n`,
    );

    console.log("\nBuild complete.");
}

build();
