import { ReferencedByView } from "@/sanity/components/ReferencedByView";
import { dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { codeInput } from "@sanity/code-input";
import { BookIcon, CogIcon, LinkIcon } from "@sanity/icons";
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
                        ...S.documentTypeListItems().filter(
                            (listItem) =>
                                !["jokul_story"].includes(
                                    listItem.getId() || "",
                                ) &&
                                !["jokul_siteData"].includes(
                                    listItem.getId() || "",
                                ),
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
            defaultDocumentNode: (S) =>
                S.document().views([
                    S.view.form(),
                    S.view
                        .component(ReferencedByView)
                        .title("Referanser")
                        .icon(LinkIcon),
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
