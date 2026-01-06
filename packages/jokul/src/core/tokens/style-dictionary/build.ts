import StyleDictionary from "style-dictionary";
import { designTokensConfig, legacyDesignTokensConfig } from "./config.js";
import "./register.js";
import { buildTailwind4Theme } from "../build-tailwind-4.js";

async function build() {
    console.log("Starting design token build...\n");

    console.log("⚙️ Building legacy tokens");
    const legacySd = await new StyleDictionary(legacyDesignTokensConfig);
    await legacySd.buildAllPlatforms();

    console.log("⚙️ Building modern tokens");
    const modernSd = await new StyleDictionary(designTokensConfig);
    await modernSd.buildAllPlatforms();

    console.log("⚙️ Generating Tailwind v4 theme");
    await buildTailwind4Theme();

    console.log("\nBuild complete.");
}

build();
