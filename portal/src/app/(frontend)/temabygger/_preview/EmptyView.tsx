"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";

export function EmptyView() {
    return (
        <Flex direction="column" gap="8">
            <Title as="h3" size="s">
                Forhåndsvisningen kommer her
            </Title>
            <Text>
                Velg navn og fonter for temaet. I neste steg viser vi hvordan
                valgene tar form i Jøkul.
            </Text>
        </Flex>
    );
}
