import { defineCliConfig } from "sanity/cli";

// biome-ignore lint/style/noNonNullAssertion: Fikk det ikke til å fungere med bruk av const imports
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// biome-ignore lint/style/noNonNullAssertion: Se over
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    },
    typegen: {
        path: "./src/**/*.{ts,tsx,js,jsx}",
        schema: "./src/sanity/extract.json",
        generates: "./src/sanity/types.ts",
    },
});
