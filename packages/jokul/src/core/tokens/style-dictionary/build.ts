import StyleDictionary from "style-dictionary";
import { legacyDesignTokensConfig, designTokensConfig } from "./config.js";
import "./register.js";

async function build() {
    console.log("Starting design token build...\n");

    console.log("⚙️ Building legacy tokens");
    const legacySd = await new StyleDictionary(legacyDesignTokensConfig);
    await legacySd.buildAllPlatforms();

    console.log("⚙️ Building modern tokens");
    const modernSd = await new StyleDictionary(designTokensConfig);
    await modernSd.buildAllPlatforms();

    console.log("\nBuild complete.");
}

build();
