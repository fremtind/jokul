"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Popover } from "@fremtind/jokul/popover";
import { Text } from "@fremtind/jokul/typography";
import { type CSSProperties, useState } from "react";
import { type ContrastEvaluation, wcagLabel, wcagUrl } from "../contrast";
import type { ColorTokenDefinition, TokenGroup } from "../tokens";

import styles from "./tokens-list.module.scss";

type TokenSwatchProps = {
    group: TokenGroup;
    value: string;
    contrast?: ContrastEvaluation;
    /** Tokenet kontrasten beregnes mot — brukes som bakgrunn i forhåndsvisningen. */
    reference?: { token: ColorTokenDefinition; value: string };
};

/**
 * Inline rolle-eksempel + heks-kode + WCAG-vurdering.
 *
 * Selve forhåndsvisningen plasserer tokenet i sin "naturlige" rolle:
 *
 * - `background.*` — fargeblokk
 * - `text.*` — "Aa" i denne fargen, oppå referansens farge
 * - `border.*` — boks med denne kantfargen, oppå referansens farge
 *
 * Klikk på kontrast-hinten åpner en popover med en stor versjon av paret og
 * lenke til relevant WCAG-suksesskriterium.
 */
export function TokenSwatch({
    group,
    value,
    contrast,
    reference,
}: TokenSwatchProps) {
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
    group: TokenGroup;
    value: string;
    pairValue?: string;
    size: "small" | "large";
};

/** Rolle-spesifikk visuell representasjon av tokenet, i to størrelser. */
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
    group: TokenGroup;
    value: string;
    reference?: { token: ColorTokenDefinition; value: string };
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
                            <code>{reference.token.id}</code>
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
