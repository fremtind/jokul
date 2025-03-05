import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";

type SanityConfig = {
    projectId: string;
    dataset: string;
};

export function getSanityConfig(config: SanityConfig) {
    return defineConfig({
        name: "default",
        basePath: "/studio",
        title: "Jøkul Portal Studio",
        projectId: config.projectId,
        dataset: config.dataset,
        plugins: [structureTool(), visionTool()],
        schema: {
            types: schemaTypes,
        },
    });
}
