import { defineConfig } from "tsdown";

export default defineConfig({
    dts: true,
    platform: "browser",
    minify: true,
    sourcemap: true,
    // Disse tilsvarer eksportene i package.json
    entry: [
        "src/index.ts",
        "src/core/index.ts",
        "src/tailwind/index.ts",
        "src/hooks/index.ts",
        "src/utilities/index.ts",
        "src/components/**/index.ts",
    ],
    external: ["react", "react-dom", /^tailwind/],
});
