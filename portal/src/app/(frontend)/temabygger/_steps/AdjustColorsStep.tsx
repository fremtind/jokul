"use client";

import type { ButtonProps } from "@fremtind/jokul/button";
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
import { ButtonGroup } from "@fremtind/jokul/button-group";

type ContrastErrorLabelsByRole = Partial<Record<ColorRole, string>>;

export function AdjustColorsStep({
    colorScheme,
}: { colorScheme: ColorScheme }) {
    const { draft } = useThemeDraft();
    const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);

    const { colorTokens, includeDarkMode, themeName } = draft;

    const editableColorTokenGroups = getEditableColorTokenGroups(colorTokens);
    const contrastErrors = getFailingContrasts(
        colorTokens,
        includeDarkMode ? COLOR_SCHEMES : ["light"],
    );
    const hasContrastErrors = contrastErrors.length > 0;

    const previousStepAction: ButtonProps<typeof Link> = {
        as: Link,
        href:
            colorScheme === "dark"
                ? "/temabygger/farger"
                : "/temabygger/grunnfarge",
        children: "Tilbake",
    };

    const nextStepAction = hasContrastErrors
        ? {
              onClick: () => setHasTriedToSubmit(true),
              children: "Fortsett",
          }
        : {
              as: Link,
              href:
                  colorScheme === "dark"
                      ? "/temabygger/innsending"
                      : "/temabygger/farger/morkt",
              children: "Fortsett",
          };

    return (
        <StepCard>
            <Flex direction="column" gap="32">
                <Title as="h3" size="m">
                    {includeDarkMode
                        ? `Tilpass farger for ${colorScheme === "dark" ? "mørkt" : "lyst"} modus`
                        : themeName
                          ? `Tilpass farger for ${themeName}`
                          : "Tilpass farger"}
                </Title>
                <ColorModeAccordion
                    colorScheme={colorScheme}
                    groups={editableColorTokenGroups}
                    failingContrasts={contrastErrors}
                />
                {hasTriedToSubmit && hasContrastErrors && (
                    <Message variant="error" title="Kontrastfeil" role="alert">
                        Noen fargekombinasjoner har for lav kontrast. Juster de
                        markerte feltene før du bruker temaet.
                    </Message>
                )}
                <ButtonGroup
                    // @ts-ignore Trenger bedre typer i ButtonGroup
                    mainAction={nextStepAction}
                    // @ts-ignore Trenger bedre typer i ButtonGroup
                    secondaryAction={previousStepAction}
                />
            </Flex>
        </StepCard>
    );
}

type ColorModeAccordionProps = {
    colorScheme: ColorScheme;
    groups: EditableColorTokenGroup[];
    failingContrasts: FailingContrastCombination[];
};

function ColorModeAccordion({
    colorScheme,
    groups,
    failingContrasts,
}: ColorModeAccordionProps) {
    const [openGroupId, setOpenGroupId] = useState<string | null>("background");
    const contrastErrorLabels = getContrastErrorLabelsForColorScheme(
        failingContrasts,
        colorScheme,
    );

    return (
        <Flex direction="column" gap="16">
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
