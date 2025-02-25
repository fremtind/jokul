import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
    name: "default",
    basePath: "/studio",
    title: "Jøkul Portal Studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "test",
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
