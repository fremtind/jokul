import { defineConfig } from "tsdown";

export default defineConfig({
    dts: true,
    platform: "browser",
    minify: true,
    entry: [
        "src/*/!(development|integration|documentation|stories)/!(*.figma|*.test|*.spec|*.stories).{ts,tsx}",
        // "src/*/!(development|integration|documentation|stories)/(index|types).ts",
        "src/**/index.ts",
        "src/index.ts",
    ],
    external: ["react", "react-dom", "react-hook-form", /^tailwind/],
});
