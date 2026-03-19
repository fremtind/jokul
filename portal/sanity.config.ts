import { dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { codeInput } from "@sanity/code-input";
import { CogIcon, ComponentIcon, HomeIcon } from "@sanity/icons";
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
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Innhold")
                    .items([
                        S.listItem()
                            .title("Forside")
                            .icon(HomeIcon)
                            .child(
                                S.document()
                                    .schemaType("jokul_frontpage")
                                    .documentId("jokul_frontpage"),
                            ),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem) =>
                                !["jokul_story"].includes(
                                    listItem.getId() || "",
                                ) &&
                                !["jokul_frontpage"].includes(
                                    listItem.getId() || "",
                                ) &&
                                !["jokul_siteData"].includes(
                                    listItem.getId() || "",
                                ),
                        ),
                        S.divider(),
                        S.listItem()
                            .title("Live-eksempler")
                            .icon(ComponentIcon)
                            .child(
                                S.documentList()
                                    .apiVersion("2026-03-06")
                                    .title("Live-eksempler")
                                    .schemaType("jokul_story")
                                    .filter('_type == "jokul_story"'),
                            ),
                        S.divider(),
                        S.listItem()
                            .title("Nettstedsinformasjon")
                            .icon(CogIcon)
                            .child(
                                S.document()
                                    .schemaType("jokul_siteData")
                                    .documentId("jokul_siteData"),
                            ),
                    ]),
        }),
        visionTool(),
        nbNOLocale(),
        table(),
        codeInput(),
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
