import { schemaTypes } from "@/sanity/schemas";
import { nbNOLocale } from "@sanity/locale-nb-no";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import type { Config } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

export function getSanityConfig(config: Config) {
    return defineConfig({
        name: "default",
        basePath: "/studio",
        title: "Jøkul Portal Studio",
        plugins: [
            structureTool(),
            visionTool(),
            nbNOLocale(),
            presentationTool({
                previewUrl: {
                    previewMode: {
                        enable: "/api/draft-mode/enable",
                    },
                },
            }),
        ],
        schema: {
            types: schemaTypes,
        },
        ...config,
    });
}

// For at sanity typegen skal kunne generere typer så må defineConfig være default export.
export default defineConfig({
    projectId: process.env.SANITY_PROJECT_ID || "",
    dataset: process.env.SANITY_DATASET || "test",
    name: "default",
    basePath: "/studio",
    title: "Jøkul Portal Studio",
    plugins: [
        structureTool(),
        visionTool(),
        presentationTool({
            previewUrl: {
                previewMode: {
                    enable: "/api/draft-mode/enable",
                },
            },
        }),
    ],
    schema: {
        types: schemaTypes,
    },
});
