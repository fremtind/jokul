"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Tag } from "@fremtind/jokul/tag";
import { Title } from "@fremtind/jokul/typography";
import { useThemeBuilder } from "../ThemeBuilderProvider";

/**
 * Toppen av siden. En liten "Endret"-tag dukker opp når arbeidskopien skiller
 * seg fra basen.
 */
export function PageHeader() {
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
            {isDirty && <Tag variant="info">Endret</Tag>}
        </Flex>
    );
}
