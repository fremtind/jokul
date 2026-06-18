"use client";

import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Popover } from "@fremtind/jokul/popover";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul/table";
import { Tag } from "@fremtind/jokul/tag";
import { Text, Title } from "@fremtind/jokul/typography";
import { type CSSProperties, useMemo, useState } from "react";
import { COLOR_SCHEMES, type ColorScheme } from "../_components/ThemeBuilder";
import type { ThemeDraftColorTokenValue } from "../_context/types";
import type { EditableLightDarkPalette } from "../generator/types";
import {
    type ContrastEvaluation,
    type ContrastRating,
    type RatingCounts,
    contrastReference,
    countRatings,
    evaluateColorContrast,
} from "./contrastEvaluation";

import styles from "./contrast-view.module.scss";

type ContrastViewProps = {
    includeDarkMode: boolean;
    tokens: EditableLightDarkPalette;
};

const LIGHT_COLOR_SCHEMES = ["light"] as const satisfies readonly ColorScheme[];

export function ContrastView({ includeDarkMode, tokens }: ContrastViewProps) {
    const colorSchemes = includeDarkMode ? COLOR_SCHEMES : LIGHT_COLOR_SCHEMES;
    const counts = useMemo(
        () => countRatings(tokens, colorSchemes),
        [colorSchemes, tokens],
    );

    return (
        <Flex direction="column" gap="2xl">
            <ContrastSummary counts={counts} />
            <TokenTable colorSchemes={colorSchemes} tokens={tokens} />
        </Flex>
    );
}

type TokenTableProps = {
    colorSchemes: readonly ColorScheme[];
    tokens: EditableLightDarkPalette;
};

type TokenTableItem = {
    group: string;
    role: string;
    token: ThemeDraftColorTokenValue;
};

function TokenTable({ colorSchemes, tokens }: TokenTableProps) {
    const tokenList = useMemo(() => getTokenTableItems(tokens), [tokens]);
    const tokenLookup = tokens as Record<
        string,
        Record<string, ThemeDraftColorTokenValue>
    >;

    return (
        <Table
            fullWidth
            collapseToList
            caption={
                <TableCaption srOnly={false}>Fargekombinasjoner</TableCaption>
            }
        >
            <TableHead>
                <TableRow>
                    <TableHeader scope="col">group</TableHeader>
                    <TableHeader scope="col">role</TableHeader>
                    {colorSchemes.map((scheme) => (
                        <TableHeader key={scheme} scope="col">
                            {scheme}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tokenList.map(({ group, role, token }) => {
                    const reference = contrastReference(group, role);
                    const referenceToken = reference
                        ? tokenLookup[reference.againstGroup]?.[
                              reference.againstRole
                          ]
                        : undefined;

                    return (
                        <TableRow key={`${group}.${role}`}>
                            <TableCell data-th="group">
                                <code>{group}</code>
                            </TableCell>
                            <TableCell data-th="role">
                                <code>{role}</code>
                            </TableCell>
                            {colorSchemes.map((scheme) => (
                                <TableCell key={scheme} data-th={scheme}>
                                    <TokenSwatch
                                        group={group}
                                        value={token[scheme]}
                                        contrast={evaluateContrastFor(
                                            token,
                                            reference,
                                            referenceToken,
                                            scheme,
                                        )}
                                        reference={
                                            reference && referenceToken
                                                ? {
                                                      group: reference.againstGroup,
                                                      role: reference.againstRole,
                                                      value: referenceToken[
                                                          scheme
                                                      ],
                                                  }
                                                : undefined
                                        }
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

function getTokenTableItems(
    tokens: EditableLightDarkPalette,
): TokenTableItem[] {
    return Object.entries(tokens).flatMap(([group, roles]) =>
        Object.entries(roles).map(([role, token]) => ({
            group,
            role,
            token,
        })),
    );
}

function evaluateContrastFor(
    token: ThemeDraftColorTokenValue,
    reference: ReturnType<typeof contrastReference>,
    referenceToken: ThemeDraftColorTokenValue | undefined,
    colorScheme: ColorScheme,
) {
    if (!reference || !referenceToken) return undefined;
    return evaluateColorContrast(
        token[colorScheme],
        referenceToken[colorScheme],
        reference.requirementId,
    );
}

type TokenSwatchProps = {
    group: string;
    value: string;
    contrast?: ContrastEvaluation;
    reference?: { group: string; role: string; value: string };
};

function TokenSwatch({ group, value, contrast, reference }: TokenSwatchProps) {
    return (
        <Flex inline alignItems="center" gap="s">
            <RolePreview
                group={group}
                value={value}
                pairValue={reference?.value}
                size="small"
            />
            <code>{value}</code>
            {contrast?.kind === "measured" && (
                <ContrastHintButton
                    evaluation={contrast}
                    group={group}
                    value={value}
                    reference={reference}
                />
            )}
        </Flex>
    );
}

type RolePreviewProps = {
    group: string;
    value: string;
    pairValue?: string;
    size: "small" | "large";
};

function RolePreview({ group, value, pairValue, size }: RolePreviewProps) {
    const sizeClass =
        size === "large"
            ? styles.tokensListPreviewLarge
            : styles.tokensListPreviewSmall;

    if (group === "text") {
        return (
            <span
                className={`${styles.tokensListTextPreview} ${sizeClass}`}
                style={
                    {
                        "--theme-builder-preview-color": value,
                        "--theme-builder-preview-bg":
                            pairValue ?? "transparent",
                    } as CSSProperties
                }
                aria-hidden="true"
            >
                Aa
            </span>
        );
    }
    if (group === "border") {
        return (
            <span
                className={`${styles.tokensListBorderPreview} ${sizeClass}`}
                style={
                    {
                        "--theme-builder-preview-color": value,
                        "--theme-builder-preview-bg":
                            pairValue ?? "transparent",
                    } as CSSProperties
                }
                aria-hidden="true"
            />
        );
    }
    return (
        <span
            className={`${styles.tokensListSwatch} ${sizeClass}`}
            style={{ "--theme-builder-swatch-color": value } as CSSProperties}
            aria-hidden="true"
        />
    );
}

type ContrastHintButtonProps = {
    evaluation: Extract<ContrastEvaluation, { kind: "measured" }>;
    group: string;
    value: string;
    reference?: { group: string; role: string; value: string };
};

function ContrastHintButton({
    evaluation,
    group,
    value,
    reference,
}: ContrastHintButtonProps) {
    const [open, setOpen] = useState(false);
    const { rating, scope, minimum } = evaluation.status;
    const visibleLabel = `(${rating} ${scope} ${formatRatio(evaluation.ratio)})`;
    const spokenRating = rating === "✕" ? "Ikke bestått" : rating;
    const ariaLabel = `Kontrast: ${spokenRating} ${scope}, ${formatRatio(evaluation.ratio)} til 1`;

    if (!reference) {
        return (
            <span
                className={styles.tokensListContrast}
                data-passes={evaluation.passes}
                aria-label={ariaLabel}
            >
                <span aria-hidden="true">{visibleLabel}</span>
            </span>
        );
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <button
                    type="button"
                    className={styles.tokensListContrastButton}
                    data-passes={evaluation.passes}
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-haspopup="dialog"
                    aria-label={ariaLabel}
                >
                    <span aria-hidden="true">{visibleLabel}</span>
                </button>
            </Popover.Trigger>
            <Popover.Content padding={16}>
                <Flex direction="column" gap="m">
                    <RolePreview
                        group={group}
                        value={value}
                        pairValue={reference.value}
                        size="large"
                    />
                    <Flex direction="column" gap="2xs">
                        <Text size="xs">Mot</Text>
                        <Flex alignItems="center" gap="s">
                            <code>{`${reference.group}.${reference.role}`}</code>
                            <code>{reference.value}</code>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="2xs">
                        <Text size="xs">Krav</Text>
                        <Text size="s">
                            {scope === "tekst"
                                ? `Tekstkontrast (≥ ${formatRatio(minimum)}:1 for AA, ≥ 7:1 for AAA)`
                                : `Grafisk kontrast (≥ ${formatRatio(minimum)}:1)`}
                        </Text>
                        <Link
                            href={wcagUrl(scope, evaluation.status.rating)}
                            external
                        >
                            {wcagLabel(scope, evaluation.status.rating)}
                        </Link>
                    </Flex>
                </Flex>
            </Popover.Content>
        </Popover>
    );
}

const formatRatio = (value: number): string =>
    value.toFixed(2).replace(/\.00$/, "");

function wcagUrl(scope: "tekst" | "grafisk", rating: string): string {
    if (scope === "tekst" && rating === "AAA") {
        return "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html";
    }
    if (scope === "tekst") {
        return "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html";
    }
    return "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html";
}

function wcagLabel(scope: "tekst" | "grafisk", rating: string): string {
    if (scope === "tekst" && rating === "AAA") return "WCAG 2.1 SC 1.4.6";
    if (scope === "tekst") return "WCAG 2.1 SC 1.4.3";
    return "WCAG 2.1 SC 1.4.11";
}

type ContrastSummaryProps = {
    counts: RatingCounts;
};

const RATINGS: {
    rating: ContrastRating;
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

function ContrastSummary({ counts }: ContrastSummaryProps) {
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
                        {`${total} (token, modus)-par evaluert mot deres "naturlige" par. ${
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
