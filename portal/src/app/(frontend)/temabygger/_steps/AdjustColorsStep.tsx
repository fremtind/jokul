"use client";

import { Button } from "@fremtind/jokul/button";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { ErrorIcon } from "@fremtind/jokul/icon";
import { Message } from "@fremtind/jokul/message";
import { Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useState } from "react";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import {
    type FailingContrastCombination,
    getFailingContrasts,
} from "../_preview/contrastEvaluation";
import { createThemePreviewHref } from "../_shared/themeDraftPayload";
import {
    COLOR_SCHEMES,
    type ColorRole,
    type ColorScheme,
} from "../generator/types";
import { StepCard } from "./StepCard";
import {
    type EditableColorTokenGroup,
    getEditableColorTokenGroups,
} from "./colorTokenMetadata";

type ContrastErrorLabelsByRole = Partial<Record<ColorRole, string>>;

export function AdjustColorsStep() {
    const { draft } = useThemeDraft();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const themeName = draft.themeName.trim() || "distributøren";
    const colorTokenGroups = getEditableColorTokenGroups(draft.colorTokens);
    const colorSchemes: readonly ColorScheme[] = draft.includeDarkMode
        ? COLOR_SCHEMES
        : ["light"];
    const failingContrasts = getFailingContrasts(
        draft.colorTokens,
        colorSchemes,
    );
    const hasContrastErrors = failingContrasts.length > 0;
    const previewHref = createThemePreviewHref(draft);

    const handlePreviewButtonClick = () => {
        setHasSubmitted(true);
    };

    const handleShareClick = async () => {
        setHasSubmitted(true);

        if (hasContrastErrors) {
            return;
        }

        try {
            const shareUrl = new URL(previewHref, window.location.origin);

            await navigator.clipboard.writeText(shareUrl.toString());
        } catch {}
    };

    return (
        <StepCard>
            <Flex direction="column" gap="32">
                <Title as="h3" size="m">
                    Tilpass farger for {themeName}
                </Title>
                <Flex direction="column" gap="40">
                    {draft.includeDarkMode ? (
                        <>
                            <ColorModeAccordion
                                title="Lyst modus"
                                colorScheme="light"
                                groups={colorTokenGroups}
                                failingContrasts={failingContrasts}
                            />
                            <ColorModeAccordion
                                title="Mørk modus"
                                colorScheme="dark"
                                groups={colorTokenGroups}
                                failingContrasts={failingContrasts}
                            />
                        </>
                    ) : (
                        <ColorModeAccordion
                            colorScheme="light"
                            groups={colorTokenGroups}
                            failingContrasts={failingContrasts}
                        />
                    )}
                </Flex>
                {hasSubmitted && hasContrastErrors && (
                    <Message variant="error" title="Kontrastfeil" role="alert">
                        Noen fargekombinasjoner har for lav kontrast. Juster de
                        markerte feltene før du bruker temaet.
                    </Message>
                )}
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    wrap="wrap"
                >
                    {hasContrastErrors ? (
                        <Button
                            type="button"
                            variant="primary"
                            onClick={handlePreviewButtonClick}
                        >
                            Forhåndsvis tema
                        </Button>
                    ) : (
                        <Button as={Link} href={previewHref} variant="primary">
                            Forhåndsvis tema
                        </Button>
                    )}
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handleShareClick}
                    >
                        Del visning
                    </Button>
                </Flex>
            </Flex>
        </StepCard>
    );
}

type ColorModeAccordionProps = {
    title?: string;
    colorScheme: ColorScheme;
    groups: EditableColorTokenGroup[];
    failingContrasts: FailingContrastCombination[];
};

function ColorModeAccordion({
    title,
    colorScheme,
    groups,
    failingContrasts,
}: ColorModeAccordionProps) {
    const [openGroupId, setOpenGroupId] = useState<string | null>(
        colorScheme === "light" ? "background" : null,
    );
    const contrastErrorLabels = getContrastErrorLabelsForColorScheme(
        failingContrasts,
        colorScheme,
    );

    return (
        <Flex direction="column" gap="16">
            {title && (
                <Title as="h4" size="xs">
                    {title}
                </Title>
            )}
            <Accordion outlined>
                {groups.map((group) => {
                    const groupHasContrastError = group.tokens.some((token) =>
                        Boolean(contrastErrorLabels[token.colorRole]),
                    );

                    return (
                        <ExpandablePanel
                            key={group.id}
                            open={openGroupId === group.id}
                            onOpenChange={(open) =>
                                setOpenGroupId(open ? group.id : null)
                            }
                        >
                            <ExpandablePanel.Header
                                icon={
                                    groupHasContrastError ? (
                                        <ErrorIcon
                                            style={{
                                                color: "var(--jkl-color-error-background-contrast)",
                                            }}
                                        />
                                    ) : undefined
                                }
                            >
                                {group.title}
                                {groupHasContrastError && (
                                    <span className="jkl-sr-only">
                                        {" "}
                                        har kontrastfeil
                                    </span>
                                )}
                            </ExpandablePanel.Header>
                            <ExpandablePanel.Content>
                                <Flex direction="column" gap="24">
                                    {group.tokens.map((token) => (
                                        <ColorTokenField
                                            key={token.colorRole}
                                            group={token.group}
                                            tokenRole={token.role}
                                            colorScheme={colorScheme}
                                            label={token.label}
                                            description={token.description}
                                            contrastErrorLabel={
                                                contrastErrorLabels[
                                                    token.colorRole
                                                ]
                                            }
                                        />
                                    ))}
                                </Flex>
                            </ExpandablePanel.Content>
                        </ExpandablePanel>
                    );
                })}
            </Accordion>
        </Flex>
    );
}

function getContrastErrorLabelsForColorScheme(
    failingContrasts: FailingContrastCombination[],
    colorScheme: ColorScheme,
): ContrastErrorLabelsByRole {
    const labels: ContrastErrorLabelsByRole = {};

    for (const combination of failingContrasts) {
        if (combination.colorScheme !== colorScheme) {
            continue;
        }

        labels[combination.foregroundRole] ??= getContrastErrorLabel(
            combination.backgroundRole,
            combination,
        );
        labels[combination.backgroundRole] ??= getContrastErrorLabel(
            combination.foregroundRole,
            combination,
        );
    }

    return labels;
}

function getContrastErrorLabel(
    comparedRole: ColorRole,
    combination: FailingContrastCombination,
) {
    return (
        `Kontrasten mot ${comparedRole.replace(".", " ")} er ` +
        `${combination.actualContrast}:1. Den må være minst ` +
        `${combination.expectedContrast}:1.`
    );
}
