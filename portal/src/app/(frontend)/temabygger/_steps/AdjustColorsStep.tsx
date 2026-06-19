"use client";

import { Button } from "@fremtind/jokul/button";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { Message } from "@fremtind/jokul/message";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useState } from "react";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ColorScheme } from "../generator/types";
import { StepCard } from "./StepCard";
import {
    type EditableColorTokenGroup,
    getEditableColorTokenGroups,
} from "./colorTokenMetadata";

type ColorSchemeEditorProps = {
    colorScheme: ColorScheme;
    groups: EditableColorTokenGroup[];
    defaultOpenGroup?: string;
};

export function AdjustColorsStep() {
    const { draft } = useThemeDraft();
    const colorTokenGroups = getEditableColorTokenGroups(draft.colorTokens);
    const themeName = draft.themeName.trim() || "distributøren";

    return (
        <StepCard>
            <Title as="h3" size="m">
                Tilpass farger for {themeName}
            </Title>
            <Flex direction="column" gap="40">
                {draft.includeDarkMode ? (
                    <>
                        <ColorSchemeSection
                            title="Lyst modus"
                            colorScheme="light"
                            groups={colorTokenGroups}
                            defaultOpenGroup="background"
                        />
                        <ColorSchemeSection
                            title="Mørk modus"
                            colorScheme="dark"
                            groups={colorTokenGroups}
                        />
                    </>
                ) : (
                    <ColorSchemeSection
                        colorScheme="light"
                        groups={colorTokenGroups}
                        defaultOpenGroup="background"
                    />
                )}
            </Flex>
            <Message variant="warning" title="Informasjon">
                Her kommer relevant informasjon.
            </Message>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                wrap="wrap"
            >
                <Button
                    as={Link}
                    href="/temabygger/forhandsvisning"
                    variant="primary"
                >
                    Forhåndsvis tema
                </Button>
                <Button variant="ghost">Del visning</Button>
            </Flex>
        </StepCard>
    );
}

type ColorSchemeSectionProps = ColorSchemeEditorProps & {
    title?: string;
};

function ColorSchemeSection({
    title,
    colorScheme,
    groups,
    defaultOpenGroup,
}: ColorSchemeSectionProps) {
    return (
        <Flex direction="column" gap="16">
            {title && <Text bold>{title}</Text>}
            <ColorSchemeEditor
                colorScheme={colorScheme}
                groups={groups}
                defaultOpenGroup={defaultOpenGroup}
            />
        </Flex>
    );
}

function ColorSchemeEditor({
    groups,
    defaultOpenGroup,
    colorScheme,
}: ColorSchemeEditorProps) {
    const [openGroupId, setOpenGroupId] = useState<string | null>(
        defaultOpenGroup ?? null,
    );

    return (
        <Accordion outlined>
            {groups.map((group) => (
                <ExpandablePanel
                    key={group.id}
                    open={openGroupId === group.id}
                    onOpenChange={(open) =>
                        setOpenGroupId(open ? group.id : null)
                    }
                >
                    <ExpandablePanel.Header>
                        {group.title}
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        <Flex direction="column" gap="24">
                            {group.tokens.map((token) => (
                                <ColorTokenField
                                    key={`${token.group}.${token.role}`}
                                    group={token.group}
                                    tokenRole={token.role}
                                    colorScheme={colorScheme}
                                    label={token.label}
                                    description={token.description}
                                />
                            ))}
                        </Flex>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            ))}
        </Accordion>
    );
}
