import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
    name: "portal-sanity-studio",
    basePath: "/studio",
    title: "portal-sanity-studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "test",
    token: process.env.SANITY_API_READ_TOKEN || "",
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
