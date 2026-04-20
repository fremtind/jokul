"use client";

import { Card } from "@fremtind/jokul/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul/table";
import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jokul/tabs";
import { Tag } from "@fremtind/jokul/tag";
import { type CSSProperties, useMemo } from "react";
import {
    COLOR_VARIANTS,
    type ColorGroup,
    type ColorVariant,
    type EditableColorToken,
    type ThemeMode,
    type TokenRole,
} from "./types";
import {
    CONTRAST_REQUIREMENTS,
    type ContrastEvaluation,
    type ContrastRequirementId,
    evaluateColorContrast,
} from "./utils";

import styles from "./theme-builder.module.scss";

type ThemeBuilderContrastPanelProps = {
    theme: ThemeMode;
    tokens: EditableColorToken[];
};

type ContrastTokenRef = {
    variant: ColorVariant;
    group: ColorGroup;
    role: TokenRole;
    label: string;
};

type ContrastCheck = {
    id: string;
    usage: string;
    foreground: ContrastTokenRef;
    background: ContrastTokenRef;
    requirementId: ContrastRequirementId;
    sample: "border" | "icon" | "text";
};

type ContrastSection = {
    id: string;
    title: string;
    checks: ContrastCheck[];
};

type ContrastSectionSummary = {
    failing: number;
    invalid: number;
};

const VARIANT_LABELS: Record<ColorVariant, string> = {
    neutral: "Nøytral",
    info: "Info",
    warning: "Advarsel",
    success: "Suksess",
    error: "Feil",
};

const SURFACE_BACKGROUNDS = [
    {
        role: "page",
        label: "Background Page",
        usage: "sideflate",
    },
    {
        role: "container",
        label: "Background Container",
        usage: "containerflate",
    },
    {
        role: "container-tinted",
        label: "Background Container Tinted",
        usage: "farget containerflate",
    },
] as const satisfies Array<{
    label: string;
    role: TokenRole;
    usage: string;
}>;

const SURFACE_FOREGROUNDS = [
    {
        group: "text",
        label: "Text Default",
        requirementId: "text",
        role: "default",
        sample: "text",
        usage: "Primærtekst",
    },
    {
        group: "text",
        label: "Text Subdued",
        requirementId: "text",
        role: "subdued",
        sample: "text",
        usage: "Sekundærtekst",
    },
    {
        group: "text",
        label: "Text Tinted",
        requirementId: "text",
        role: "tinted",
        sample: "text",
        usage: "Tintet tekst",
    },
    {
        group: "border",
        label: "Border Strong",
        requirementId: "ui",
        role: "strong",
        sample: "border",
        usage: "Sterk border",
    },
    {
        group: "border",
        label: "Border Default",
        requirementId: "ui",
        role: "default",
        sample: "border",
        usage: "Standard border",
    },
    {
        group: "border",
        label: "Border Subdued",
        requirementId: "ui",
        role: "subdued",
        sample: "border",
        usage: "Nedtonet border",
    },
] as const satisfies Array<{
    group: ColorGroup;
    label: string;
    requirementId: ContrastRequirementId;
    role: TokenRole;
    sample: "border" | "text";
    usage: string;
}>;

const CONTRAST_SECTIONS = COLOR_VARIANTS.map((variant) => ({
    id: `${variant}-overview`,
    title: VARIANT_LABELS[variant],
    checks: buildVariantChecks(variant),
})) satisfies ContrastSection[];

export function ThemeBuilderContrastPanel({
    theme,
    tokens,
}: ThemeBuilderContrastPanelProps) {
    const tokenValueById = useMemo(() => getTokenValueById(tokens), [tokens]);

    return (
        <section className={styles.contrastPanel}>
            <div className={styles.contrastLegend}>
                <ContrastRuleTag label="AAA tekst" description="7:1" />
                <ContrastRuleTag
                    label="AA tekst"
                    description="4.5:1"
                    variant="warning"
                />
                <ContrastRuleTag
                    label="Ikke-tekst"
                    description="3:1"
                    variant="info"
                />
            </div>

            <Tabs className={styles.contrastTabs} defaultTab={0}>
                <TabList aria-label="Kontrastvarianter">
                    {CONTRAST_SECTIONS.map((section) => (
                        <Tab key={section.id}>{section.title}</Tab>
                    ))}
                </TabList>
                {CONTRAST_SECTIONS.map((section) => {
                    const summary = getContrastSectionSummary(
                        section,
                        tokenValueById,
                        theme,
                    );

                    return (
                        <TabPanel
                            key={section.id}
                            className={styles.contrastTabPanel}
                        >
                            <Card
                                padding="l"
                                className={styles.contrastSectionCard}
                            >
                                <section className={styles.contrastSection}>
                                    <header
                                        className={styles.contrastSectionHeader}
                                    >
                                        <Tag
                                            variant={
                                                getFailedRequirementCount(
                                                    summary,
                                                ) > 0
                                                    ? "error"
                                                    : "success"
                                            }
                                        >
                                            {formatFailedRequirementCount(
                                                summary,
                                            )}
                                        </Tag>
                                    </header>
                                    <div className={styles.contrastTableScroll}>
                                        <Table
                                            fullWidth
                                            collapseToList
                                            caption={
                                                <TableCaption srOnly>
                                                    {section.title}
                                                </TableCaption>
                                            }
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader scope="col">
                                                        Bruk
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Forgrunn
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Bakgrunn
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Krav
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Prøve
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Målt
                                                    </TableHeader>
                                                    <TableHeader scope="col">
                                                        Status
                                                    </TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {section.checks.map((check) => {
                                                    const foreground =
                                                        getTokenValue(
                                                            tokenValueById,
                                                            check.foreground,
                                                            theme,
                                                        );
                                                    const background =
                                                        getTokenValue(
                                                            tokenValueById,
                                                            check.background,
                                                            theme,
                                                        );

                                                    return (
                                                        <TableRow
                                                            key={check.id}
                                                        >
                                                            <TableCell data-th="Bruk">
                                                                <span
                                                                    className={
                                                                        styles.contrastUsage
                                                                    }
                                                                >
                                                                    {
                                                                        check.usage
                                                                    }
                                                                </span>
                                                            </TableCell>
                                                            <TableCell data-th="Forgrunn">
                                                                <TokenValue
                                                                    token={
                                                                        check.foreground
                                                                    }
                                                                    value={
                                                                        foreground
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell data-th="Bakgrunn">
                                                                <TokenValue
                                                                    token={
                                                                        check.background
                                                                    }
                                                                    value={
                                                                        background
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell data-th="Krav">
                                                                {formatRequirement(
                                                                    check.requirementId,
                                                                )}
                                                            </TableCell>
                                                            <TableCell data-th="Prøve">
                                                                <ContrastResult
                                                                    background={
                                                                        background
                                                                    }
                                                                    foreground={
                                                                        foreground
                                                                    }
                                                                    sample={
                                                                        check.sample
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell data-th="Målt">
                                                                <ContrastRatioValue
                                                                    background={
                                                                        background
                                                                    }
                                                                    foreground={
                                                                        foreground
                                                                    }
                                                                    requirementId={
                                                                        check.requirementId
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell data-th="Status">
                                                                <ContrastStatusValue
                                                                    background={
                                                                        background
                                                                    }
                                                                    foreground={
                                                                        foreground
                                                                    }
                                                                    requirementId={
                                                                        check.requirementId
                                                                    }
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </section>
                            </Card>
                        </TabPanel>
                    );
                })}
            </Tabs>
        </section>
    );
}

function buildVariantChecks(variant: ColorVariant): ContrastCheck[] {
    const surfaceChecks = SURFACE_BACKGROUNDS.flatMap((background) =>
        SURFACE_FOREGROUNDS.map((foreground) => ({
            id: `${variant}-${foreground.group}-${foreground.role}-${background.role}`,
            usage: `${foreground.usage} på ${background.usage}`,
            foreground: token(
                variant,
                foreground.group,
                foreground.role,
                foreground.label,
            ),
            background: token(
                variant,
                "background",
                background.role,
                background.label,
            ),
            requirementId: foreground.requirementId,
            sample: foreground.sample,
        })),
    );

    const contrastCheck: ContrastCheck = {
        id: `${variant}-text-on-contrast-contrast`,
        usage: "Tekst og ikon på kontrastflate",
        foreground: token(variant, "text", "on-contrast", "Text On Contrast"),
        background: token(
            variant,
            "background",
            "contrast",
            "Background Contrast",
        ),
        requirementId: "text",
        sample: variant === "neutral" ? "text" : "icon",
    };

    return [...surfaceChecks, contrastCheck];
}

function token(
    variant: ColorVariant,
    group: ColorGroup,
    role: TokenRole,
    label: string,
): ContrastTokenRef {
    return {
        variant,
        group,
        role,
        label,
    };
}

function ContrastRuleTag({
    description,
    label,
    variant = "success",
}: {
    description: string;
    label: string;
    variant?: "info" | "success" | "warning";
}) {
    return (
        <div className={styles.contrastLegendItem}>
            <Tag variant={variant}>{label}</Tag>
            <span>{description}</span>
        </div>
    );
}

function ContrastResult({
    background,
    foreground,
    sample,
}: {
    background?: string;
    foreground?: string;
    sample: "border" | "icon" | "text";
}) {
    if (!foreground || !background) {
        return (
            <div className={styles.contrastResult}>
                <Tag variant="error">Ugyldig</Tag>
            </div>
        );
    }

    const sampleStyle = {
        "--theme-builder-contrast-background": background,
        "--theme-builder-contrast-foreground": foreground,
    } as CSSProperties;

    return (
        <div className={styles.contrastResult} aria-hidden="true">
            <div className={styles.contrastSample} style={sampleStyle}>
                {sample === "border" ? (
                    <span className={styles.contrastBorderSample} />
                ) : sample === "icon" ? (
                    <span className={styles.contrastIconSample} />
                ) : (
                    <span className={styles.contrastTextSample}>Aa</span>
                )}
            </div>
        </div>
    );
}

function ContrastRatioValue({
    background,
    foreground,
    requirementId,
}: {
    background?: string;
    foreground?: string;
    requirementId: ContrastRequirementId;
}) {
    const evaluation = evaluateColorContrast(
        foreground,
        background,
        requirementId,
    );

    if (evaluation.kind === "invalid") {
        return <span className={styles.contrastRatioValue}>-</span>;
    }

    return (
        <span className={styles.contrastRatioValue}>
            {formatRatio(evaluation.ratio)}:1
        </span>
    );
}

function ContrastStatusValue({
    background,
    foreground,
    requirementId,
}: {
    background?: string;
    foreground?: string;
    requirementId: ContrastRequirementId;
}) {
    const evaluation = evaluateColorContrast(
        foreground,
        background,
        requirementId,
    );

    if (evaluation.kind === "invalid") {
        return (
            <div className={styles.contrastStatusValue}>
                <Tag variant="error">Ugyldig</Tag>
            </div>
        );
    }

    return (
        <div className={styles.contrastStatusValue}>
            <Tag variant={evaluation.status.variant}>
                {evaluation.status.label}
            </Tag>
        </div>
    );
}

function TokenValue({
    token,
    value,
}: {
    token: ContrastTokenRef;
    value?: string;
}) {
    const swatchStyle = {
        "--theme-builder-swatch-color": value ?? "transparent",
    } as CSSProperties;

    return (
        <span className={styles.contrastToken}>
            <span className={styles.contrastTokenLabel}>{token.label}</span>
            <span className={styles.contrastTokenValue}>
                <span
                    className={styles.contrastSwatch}
                    style={swatchStyle}
                    aria-hidden="true"
                />
                <code>{value ?? "Ugyldig verdi"}</code>
            </span>
        </span>
    );
}

function getTokenValueById(tokens: EditableColorToken[]) {
    return new Map(tokens.map((token) => [token.id, token]));
}

function getTokenValue(
    tokenValueById: Map<string, EditableColorToken>,
    token: ContrastTokenRef,
    mode: ThemeMode,
) {
    const tokenId = `${token.variant}.${token.group}.${token.role}`;

    return tokenValueById.get(tokenId)?.[mode];
}

function getContrastSectionSummary(
    section: ContrastSection,
    tokenValueById: Map<string, EditableColorToken>,
    mode: ThemeMode,
): ContrastSectionSummary {
    return section.checks.reduce<ContrastSectionSummary>(
        (summary, check) => {
            const evaluation: ContrastEvaluation = evaluateColorContrast(
                getTokenValue(tokenValueById, check.foreground, mode),
                getTokenValue(tokenValueById, check.background, mode),
                check.requirementId,
            );

            if (evaluation.kind === "invalid") {
                summary.invalid += 1;
            } else if (!evaluation.passes) {
                summary.failing += 1;
            }

            return summary;
        },
        {
            failing: 0,
            invalid: 0,
        },
    );
}

function formatRequirement(requirementId: ContrastRequirementId) {
    const requirement = CONTRAST_REQUIREMENTS[requirementId];

    return `${requirement.label} ${formatRatio(requirement.minimum)}:1`;
}

function formatRatio(value: number) {
    return value.toFixed(2).replace(/\.00$/, "");
}

function getFailedRequirementCount(summary: ContrastSectionSummary) {
    return summary.failing + summary.invalid;
}

function formatFailedRequirementCount(summary: ContrastSectionSummary) {
    const count = getFailedRequirementCount(summary);

    return count === 1 ? "1 feilende krav" : `${count} feilende krav`;
}
