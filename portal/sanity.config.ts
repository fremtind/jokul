import { ReferencedByView } from "@/sanity/components/ReferencedByView";
import { dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { documents } from "@/sanity/schemas/documents";
import { VersionManager } from "@/sanity/tools/version-manager/VersionManager";
import { codeInput } from "@sanity/code-input";
import { documentInternationalization } from "@sanity/document-internationalization";
import {
    CogIcon,
    ComponentIcon,
    EarthGlobeIcon,
    LinkIcon,
} from "@sanity/icons";
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
                                ![
                                    "jokul_story",
                                    "jokul_siteData",
                                    "translation.metadata",
                                ].includes(listItem.getId() || ""),
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
        documentInternationalization({
            supportedLanguages: [
                { id: "next", title: "6.0" },
                { id: "v5", title: "5.0" },
                { id: "v4", title: "4.0" },
            ],
            schemaTypes: documents.map((s) => s.name),
            languageField: "versjon",
            apiVersion: "2025-04-03",
            bulkPublish: true, // publish all versions of a doc together
            weakReferences: true, // don't let cross-version refs block deletes
        }),
    ],
    schema: {
        types: schemaTypes,
    },
    tools: (prev) => [
        ...prev,
        {
            name: "versjoner",
            title: "Versjoner",
            icon: EarthGlobeIcon,
            component: VersionManager,
        },
    ],
});
