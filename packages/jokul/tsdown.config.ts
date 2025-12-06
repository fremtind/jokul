import { defineConfig } from "tsdown";

export default defineConfig({
    dts: true,
    platform: "browser",
    entry: [
        "src/*/!(development|integration|documentation|stories)/!(*.figma|*.test|*.spec|*.stories).{ts,tsx}",
        "src/**/index.ts",
        "src/index.ts",
    ],
    external: ["react", "react-dom", "react-hook-form", /^tailwind/],
});
