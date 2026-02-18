import StyleDictionary from "style-dictionary";
import { jokulTokens } from "./config.js";
import "./register.js";

async function build() {
    console.log("Starting design token build...\n");

    console.log("⚙️ Building tokens (CSS, TypeScript, SCSS, and Tailwind v4)");
    const dictionary = new StyleDictionary(jokulTokens);
    await dictionary.buildAllPlatforms();

    console.log("\nBuild complete.");
}

build();
