import StyleDictionary from "style-dictionary";
import { BRAND_NAMES, createBrandConfig, jokulTokens } from "./config.js";
import "./register.js";

async function build() {
    console.log("Starting design token build...\n");

    console.log("⚙️ Building tokens (CSS, TypeScript, SCSS, and Tailwind v4)");
    const dictionary = new StyleDictionary(jokulTokens);
    await dictionary.buildAllPlatforms();

    for (const brand of BRAND_NAMES) {
        console.log(`⚙️ Building separate color output for brand "${brand}"`);
        const brandDictionary = new StyleDictionary(createBrandConfig(brand));
        await brandDictionary.buildPlatform("css");
    }

    console.log("\nBuild complete.");
}

build();
