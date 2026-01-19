import { dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { nbNOLocale } from "@sanity/locale-nb-no";
import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

export default defineConfig({
    projectId,
    dataset,
    name: "default",
    basePath: "/studio",
    title: "Jøkul Portal Studio",
    plugins: [
        structureTool(),
        visionTool(),
        nbNOLocale(),
        table(),
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
