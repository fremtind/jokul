import { apiVersion } from "@/sanity/env";
import { Box, Card, Flex, Spinner, Stack, Text } from "@sanity/ui";
import { type ReactNode, useEffect, useState } from "react";
import { useClient, useSchema } from "sanity";
import { IntentLink } from "sanity/router";

// Alle publiserte dokumenter som refererer til $id, uansett hvor i innholdet
// referansen ligger.
const REFERENCING_DOCUMENTS_QUERY = `*[
    references($id) &&
    _id != $id &&
    !(_id in path("drafts.**"))
]{
    _id,
    _type,
    "title": coalesce(name, title, tema, version, _id),
    short_description
} | order(_type asc, title asc)`;

type ReferencingDocument = {
    _id: string;
    _type: string;
    title: string | null;
    short_description: string | null;
};

type ReferencingDocumentsState = ReferencingDocument[] | null | false;

function useReferencingDocuments(documentId: string) {
    const client = useClient({ apiVersion });
    const [documents, setDocuments] = useState<ReferencingDocumentsState>(null);

    useEffect(() => {
        if (!documentId) {
            setDocuments([]);
            return;
        }

        let isCurrent = true;
        setDocuments(null);

        client
            .fetch<ReferencingDocument[]>(REFERENCING_DOCUMENTS_QUERY, {
                id: documentId,
            })
            .then((result) => isCurrent && setDocuments(result))
            .catch(() => isCurrent && setDocuments(false));

        return () => {
            isCurrent = false;
        };
    }, [client, documentId]);

    return documents;
}

function Message({ children }: { children: ReactNode }) {
    return (
        <Box padding={4}>
            <Text muted>{children}</Text>
        </Box>
    );
}

function ReferenceCard({ document }: { document: ReferencingDocument }) {
    return (
        <Card padding={3} radius={2} shadow={1}>
            <IntentLink
                intent="edit"
                params={{ id: document._id, type: document._type }}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <Stack space={2}>
                    <Text weight="semibold">
                        {document.title || "Uten navn"}
                    </Text>
                    {document.short_description && (
                        <Text size={1} muted>
                            {document.short_description}
                        </Text>
                    )}
                </Stack>
            </IntentLink>
        </Card>
    );
}

export function ReferencedByView({ documentId }: { documentId: string }) {
    const documents = useReferencingDocuments(documentId);
    const schema = useSchema();

    const titleForType = (type: string) => schema.get(type)?.title ?? type;

    if (documents === null) {
        return (
            <Flex align="center" gap={2} padding={4}>
                <Spinner muted />
                <Text muted>Laster referanser …</Text>
            </Flex>
        );
    }

    if (documents === false) {
        return (
            <Message>Kunne ikke hente referanser. Prøv igjen senere.</Message>
        );
    }

    if (documents.length === 0) {
        return <Message>Ingen andre dokumenter refererer hit.</Message>;
    }

    const groupedByType = Object.groupBy(
        documents,
        (document) => document._type,
    );

    return (
        <Box padding={4}>
            <Stack space={5}>
                {Object.entries(groupedByType).map(
                    ([type, documentsOfType]) => (
                        <Stack space={3} key={type}>
                            <Text size={1} weight="semibold" muted>
                                {titleForType(type)}
                            </Text>
                            {documentsOfType?.map((document) => (
                                <ReferenceCard
                                    key={document._id}
                                    document={document}
                                />
                            ))}
                        </Stack>
                    ),
                )}
            </Stack>
        </Box>
    );
}
