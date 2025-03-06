import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import type { Config } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";

export function getSanityConfig(config: Config) {
    return defineConfig({
        name: "default",
        basePath: "/studio",
        title: "Jøkul Portal Studio",
        plugins: [structureTool(), visionTool()],
        schema: {
            types: schemaTypes,
        },
        ...config,
    });
}
