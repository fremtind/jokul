"use client";

import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { ErrorIcon } from "@fremtind/jokul/icon";
import { useState } from "react";
import { ColorTokenField } from "../_components/ColorTokenField";
import {
    type FailingContrastCombination,
    getContrastErrorLabels,
} from "../_preview/contrastEvaluation";
import type { ColorScheme } from "../generator/types";
import type { EditableColorTokenGroup } from "./colorTokenMetadata";

type ColorTokenAccordionProps = {
    colorScheme: ColorScheme;
    groups: EditableColorTokenGroup[];
    failingContrasts: FailingContrastCombination[];
};

export function ColorTokenAccordion({
    colorScheme,
    groups,
    failingContrasts,
}: ColorTokenAccordionProps) {
    const [openGroupId, setOpenGroupId] = useState<string | null>("background");
    const contrastErrorLabels = getContrastErrorLabels(failingContrasts);

    return (
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
                                            contrastErrorLabels[token.colorRole]
                                        }
                                    />
                                ))}
                            </Flex>
                        </ExpandablePanel.Content>
                    </ExpandablePanel>
                );
            })}
        </Accordion>
    );
}
