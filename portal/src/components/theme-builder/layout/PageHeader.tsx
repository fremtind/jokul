"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Tag } from "@fremtind/jokul/tag";
import { Title } from "@fremtind/jokul/typography";
import { useThemeBuilder } from "../ThemeBuilderProvider";

type PageHeaderProps = {
    onOpenEditor: () => void;
};

/**
 * Toppen av siden: tittel til venstre, primary-knappen for "Rediger tokens"
 * til høyre. Visningsmodus-popoveren ligger inni demo-fanen siden den kun
 * påvirker innholdet der. En liten "Endret"-tag dukker opp på knappen når
 * arbeidskopien skiller seg fra basen.
 */
export function PageHeader({ onOpenEditor }: PageHeaderProps) {
    const { isDirty } = useThemeBuilder();

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            wrap="wrap"
            gap="m"
        >
            <Title as="h1" size="xl">
                Temabygger
            </Title>
            <Flex alignItems="center" gap="s">
                {isDirty && <Tag variant="info">Endret</Tag>}
                <Button variant="primary" onClick={onOpenEditor}>
                    Rediger tokens
                </Button>
            </Flex>
        </Flex>
    );
}
