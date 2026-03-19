import type { FrontpageQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import Link from "next/link";
import styles from "./frontPageNewsSection.module.scss";

interface NewsListProps {
    documents: FrontpageQueryResult["latestUpdatedDocuments"];
    excludedId?: string;
}

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
    dateStyle: "long",
});

const getNewsStatus = (
    item: Pick<
        FrontpageQueryResult["latestUpdatedDocuments"][number],
        "_createdAt" | "_updatedAt"
    >,
) => {
    const createdAt = item._createdAt ? new Date(item._createdAt) : null;
    const updatedAt = item._updatedAt ? new Date(item._updatedAt) : null;
    const hasCreatedAndUpdatedDates = createdAt !== null && updatedAt !== null;
    const isNew =
        hasCreatedAndUpdatedDates &&
        createdAt.getTime() === updatedAt.getTime();

    return {
        label: isNew ? "Opprettet" : "Redigert",
        state: isNew ? "created" : "edited",
        date: isNew ? createdAt : updatedAt,
    };
};

const NewsMetadata = ({
    document,
}: {
    document: FrontpageQueryResult["latestUpdatedDocuments"][number];
}) => {
    const { state, date, label } = getNewsStatus(document);

    return (
        <Flex
            className={styles.newsMeta}
            alignItems="center"
            gap="2xs s"
            wrap="wrap"
        >
            <span
                aria-label={label}
                className={styles.newsMetaIcon}
                data-state={state}
            />
            {date ? (
                <time dateTime={date.toISOString()} className={styles.newsDate}>
                    {dateFormatter.format(date)}
                </time>
            ) : null}
            {document.docType ? (
                <>
                    <span className={styles.newsDivider} aria-hidden="true" />
                    <span>{document.docType}</span>
                </>
            ) : null}
        </Flex>
    );
};

const NewsCard = ({
    document,
}: {
    document: FrontpageQueryResult["latestUpdatedDocuments"][number];
}) => (
    <Card
        as={Link}
        href={document.href || "/"}
        padding="xl"
        clickable
        aria-label={document.name ?? undefined}
        className={styles.newsCard}
    >
        <Flex
            className={styles.newsCardContent}
            alignItems="center"
            justifyContent="space-between"
            gap="m"
        >
            <Flex className={styles.newsCardMain} direction="column" gap="xs">
                <h3>{document.name}</h3>
                <NewsMetadata document={document} />
            </Flex>
            <span className={styles.newsCardArrow} aria-hidden="true" />
        </Flex>
    </Card>
);

export const NewsList = ({ documents, excludedId }: NewsListProps) => {
    const items = documents.filter((document) => document._id !== excludedId);

    if (!items.length) {
        return null;
    }

    return (
        <Flex
            as="ul"
            direction="column"
            gap="s"
            className={styles.list}
            aria-label="Nyheter og siste oppdateringer"
        >
            {items.map((document) => (
                <li key={document._id} className={styles.item}>
                    <NewsCard document={document} />
                </li>
            ))}
        </Flex>
    );
};
