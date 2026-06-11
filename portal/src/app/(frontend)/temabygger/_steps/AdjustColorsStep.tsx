"use client";

import { Button } from "@fremtind/jokul/button";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { Message } from "@fremtind/jokul/message";
import { Text, Title } from "@fremtind/jokul/typography";
import { ColorTokenField } from "../_components/ColorTokenField";
import type { ColorScheme } from "../_components/ThemeBuilder";
import { useThemeDraft } from "../_context/ThemeDraftContext";
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
    const { color, identity } = useThemeDraft();
    const colorTokenGroups = getEditableColorTokenGroups(color.tokens);
    const themeName = identity.themeName.trim() || "distributøren";

    return (
        <StepCard>
            <Title as="h3" size="m">
                Tilpass farger for {themeName}
            </Title>
            <Flex direction="column" gap="40">
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
            </Flex>
            <Message variant="warning" title="Informasjon">
                Her kommer relevant informasjon.
            </Message>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                wrap="wrap"
            >
                <Button variant="primary">Send tokens</Button>
                <Button variant="ghost">Del visning</Button>
            </Flex>
        </StepCard>
    );
}

type ColorSchemeSectionProps = ColorSchemeEditorProps & {
    title: string;
};

function ColorSchemeSection({
    title,
    colorScheme,
    groups,
    defaultOpenGroup,
}: ColorSchemeSectionProps) {
    return (
        <Flex direction="column" gap="16">
            <Text bold>{title}</Text>
            <ColorSchemeEditor
                colorScheme={colorScheme}
                groups={groups}
                defaultOpenGroup={defaultOpenGroup}
            />
        </Flex>
    );
}

function ColorSchemeEditor({
    colorScheme,
    groups,
    defaultOpenGroup,
}: ColorSchemeEditorProps) {
    return (
        <Accordion outlined>
            {groups.map((group) => (
                <ExpandablePanel
                    key={group.id}
                    defaultOpen={group.id === defaultOpenGroup}
                >
                    <ExpandablePanel.Header>
                        {group.title}
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        <Flex direction="column" gap="24">
                            {group.tokens.map((token) => (
                                <ColorTokenField
                                    key={`${token.group}.${token.role}`}
                                    token={token.token}
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
