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
import {
    type RatingCounts,
    contrastReference,
    countRatings,
} from "./colorContrast";
import {
    type ContrastEvaluation,
    type ContrastRating,
    evaluateColorContrast,
} from "./colorTokenUtils";
import {
    COLOR_VARIANTS,
    type ColorGroup,
    type ColorToken,
    type ColorVariant,
    type RoleEntry,
    THEME_MODES,
    type ThemeMode,
    tokenKey,
} from "./colorTokens";

import styles from "./token-overview.module.scss";

type TokenOverviewProps = {
    tokens: ColorToken[];
};

export function TokenOverview({ tokens }: TokenOverviewProps) {
    const counts = useMemo(() => countRatings(tokens), [tokens]);

    return (
        <Flex direction="column" gap="2xl">
            <ContrastSummary counts={counts} />
            <Flex direction="column" gap="2xl">
                {COLOR_VARIANTS.map((variant) => {
                    const variantTokens = tokens.filter(
                        (t) => t.variant === variant,
                    );
                    if (variantTokens.length === 0) return null;
                    return (
                        <VariantTable
                            key={variant}
                            variant={variant}
                            tokens={variantTokens}
                            allTokens={tokens}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
}

type VariantTableProps = {
    variant: ColorVariant;
    tokens: ColorToken[];
    allTokens: ColorToken[];
};

function VariantTable({ variant, tokens, allTokens }: VariantTableProps) {
    const tokensByKey = useMemo(
        () => new Map(allTokens.map((t) => [tokenKey(t), t])),
        [allTokens],
    );

    return (
        <Table
            fullWidth
            collapseToList
            caption={<TableCaption srOnly={false}>{variant}</TableCaption>}
        >
            <TableHead>
                <TableRow>
                    <TableHeader scope="col">group</TableHeader>
                    <TableHeader scope="col">role</TableHeader>
                    {THEME_MODES.map((mode) => (
                        <TableHeader key={mode} scope="col">
                            {mode}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tokens.map((token) => {
                    const reference = contrastReference(token);
                    const referenceToken = reference
                        ? tokensByKey.get(tokenKey(reference.against))
                        : undefined;

                    return (
                        <TableRow key={`${token.group}.${token.role}`}>
                            <TableCell data-th="group">
                                <code>{token.group}</code>
                            </TableCell>
                            <TableCell data-th="role">
                                <code>{token.role}</code>
                            </TableCell>
                            {THEME_MODES.map((mode) => (
                                <TableCell key={mode} data-th={mode}>
                                    <TokenSwatch
                                        group={token.group}
                                        value={token[mode]}
                                        contrast={evaluateContrastFor(
                                            token,
                                            reference,
                                            referenceToken,
                                            mode,
                                        )}
                                        reference={
                                            reference && referenceToken
                                                ? {
                                                      token: reference.against,
                                                      value: referenceToken[
                                                          mode
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

function evaluateContrastFor(
    token: ColorToken,
    reference: ReturnType<typeof contrastReference>,
    referenceToken: ColorToken | undefined,
    mode: ThemeMode,
) {
    if (!reference || !referenceToken) return undefined;
    return evaluateColorContrast(
        token[mode],
        referenceToken[mode],
        reference.requirementId,
    );
}

type TokenSwatchProps = {
    group: ColorGroup;
    value: string;
    contrast?: ContrastEvaluation;
    reference?: { token: RoleEntry; value: string };
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
    group: ColorGroup;
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
    group: ColorGroup;
    value: string;
    reference?: { token: RoleEntry; value: string };
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
                            <code>
                                {`${reference.token.group}.${reference.token.role}`}
                            </code>
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
                        {`${total} (token, modus)-par evaluert mot deres "naturlige" par i samme variant. ${
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
