import { DEFAULT_VERSION } from "@/utils/versions";
import { useCallback, useEffect, useState } from "react";
import { useClient } from "sanity";
import { type Row, TYPES } from "./types";

const versionedDocumentsQuery = `*[_type in $types] | order(_type asc, title asc){
    _id, _type, versjon, _updatedAt, _createdAt,
    "title": coalesce(name, tema, version, "Uten tittel")
}`;

const metadataForDocumentQuery = `*[_type == "translation.metadata" && references($id)][0]{
    _id, translations
}`;

export function useVersionDocuments() {
    const client = useClient({ apiVersion: "2025-04-03" });
    const [rows, setRows] = useState<Row[]>([]);

    const load = useCallback(
        () =>
            client
                .fetch<Row[]>(versionedDocumentsQuery, { types: TYPES })
                .then((docs) => {
                    const byBaseId = new Map<string, Row>();
                    for (const doc of docs) {
                        const baseId = doc._id.replace(/^drafts\./, "");
                        const existing = byBaseId.get(baseId);
                        if (!existing || doc._id.startsWith("drafts."))
                            byBaseId.set(baseId, doc);
                    }
                    setRows([...byBaseId.values()]);
                }),
        [client],
    );

    useEffect(() => {
        load();
    }, [load]);

    const setVersion = (ids: string[], versjon: string) => {
        const transaction = client.transaction();
        for (const id of ids)
            transaction.patch(id, (patch) => patch.set({ versjon }));
        return transaction.commit().then(load);
    };

    const copyToVersion = async (ids: string[], versjon: string) => {
        for (const id of ids) {
            const source = await client.getDocument(id);
            if (!source || source.versjon === versjon) continue;

            const cloneId = `${id}-${versjon}`;
            const { _rev, _createdAt, _updatedAt, ...content } = source;
            const clone = { ...content, _id: cloneId, versjon };

            const metadata = await client.fetch<{
                _id: string;
                translations?: { _key: string }[];
            } | null>(metadataForDocumentQuery, { id });

            const transaction = client.transaction();
            transaction.createIfNotExists(clone);

            const cloneRef = { _type: "reference", _ref: cloneId, _weak: true };

            if (metadata) {
                const alreadyLinked = metadata.translations?.some(
                    (t) => t._key === versjon,
                );
                if (!alreadyLinked) {
                    transaction.patch(metadata._id, (patch) =>
                        patch
                            .setIfMissing({ translations: [] })
                            .insert("after", "translations[-1]", [
                                { _key: versjon, value: cloneRef },
                            ]),
                    );
                }
            } else {
                transaction.create({
                    _type: "translation.metadata",
                    schemaTypes: [source._type],
                    translations: [
                        {
                            _key: source.versjon ?? DEFAULT_VERSION,
                            value: {
                                _type: "reference",
                                _ref: id,
                                _weak: true,
                            },
                        },
                        { _key: versjon, value: cloneRef },
                    ],
                });
            }

            await transaction.commit();
        }
        return load();
    };

    return { rows, setVersion, copyToVersion };
}
