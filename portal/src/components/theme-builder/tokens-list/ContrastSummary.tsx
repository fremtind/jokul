import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Tag } from "@fremtind/jokul/tag";
import { Text, Title } from "@fremtind/jokul/typography";
import type { ContrastRating, RatingCounts } from "../contrast";

import styles from "./tokens-list.module.scss";

type ContrastSummaryProps = {
    counts: RatingCounts;
};

const RATINGS: {
    rating: ContrastRating;
    /** Tekstlig label brukt av skjermlesere når symbolet ikke er nok. */
    spokenLabel: string;
    description: string;
    wcag: string;
    tag: "success" | "warning" | "error";
}[] = [
    {
        rating: "AAA",
        spokenLabel: "AAA",
        description: "Tekst — bestått høyeste nivå",
        wcag: "WCAG 2.1 SC 1.4.6 (≥ 7:1)",
        tag: "success",
    },
    {
        rating: "AA",
        spokenLabel: "AA",
        description: "Tekst — bestått minimumskravet",
        wcag: "WCAG 2.1 SC 1.4.3 (≥ 4.5:1)",
        tag: "success",
    },
    {
        rating: "A",
        spokenLabel: "A",
        description: "Grafisk innhold — bestått",
        wcag: "WCAG 2.1 SC 1.4.11 (≥ 3:1)",
        tag: "warning",
    },
    {
        rating: "✕",
        spokenLabel: "Ikke bestått",
        description: "Ikke bestått — for lav kontrast",
        wcag: "Under terskelen for tilhørende WCAG-krav",
        tag: "error",
    },
];

/**
 * Status-rad som viser hvor mange (token, mode)-par havner i hver kategori,
 * inkludert kort forklaring av hva hver vurdering betyr og lenke til
 * relevant WCAG-suksesskriterium via inline-popoverene i tabellen.
 *
 * Bruker en kategorisert `<ul>`-liste fremfor `DescriptionList` siden hver
 * rad er en egen kategori-måling, ikke en term/definisjon-paring.
 */
export function ContrastSummary({ counts }: ContrastSummaryProps) {
    const total = RATINGS.reduce((sum, { rating }) => sum + counts[rating], 0);
    const failing = counts["✕"];

    return (
        <Card asChild padding="m">
            <Flex direction="column" gap="s">
                <Flex direction="column" gap="2xs">
                    <Title as="h2" size="s">
                        Kontrast-vurderinger
                    </Title>
                    <Text size="s">
                        {`${total} (token, modus)-par evaluert mot deres "naturlige" par i samme seksjon. ${
                            failing === 0
                                ? "Alle par passerer."
                                : `${failing} par feiler kravet.`
                        } Klikk en vurdering i tabellen under for å se fargene side om side og hvilket WCAG-suksesskriterium som gjelder.`}
                    </Text>
                </Flex>
                <ul
                    className={styles.contrastSummaryList}
                    aria-label="Kontrastnivåer fordelt på antall par"
                >
                    {RATINGS.map(
                        ({ rating, spokenLabel, description, wcag, tag }) => (
                            <li
                                key={rating}
                                className={styles.contrastSummaryItem}
                            >
                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap="m"
                                    wrap="wrap"
                                >
                                    <Flex alignItems="center" gap="s">
                                        <Tag
                                            variant={tag}
                                            aria-label={spokenLabel}
                                        >
                                            <span aria-hidden="true">
                                                {rating}
                                            </span>
                                        </Tag>
                                        <Flex direction="column" gap="2xs">
                                            <Text size="s">{description}</Text>
                                            <Text size="xs">{wcag}</Text>
                                        </Flex>
                                    </Flex>
                                    <Text size="m" bold>
                                        {`${counts[rating]} par`}
                                    </Text>
                                </Flex>
                            </li>
                        ),
                    )}
                </ul>
            </Flex>
        </Card>
    );
}
