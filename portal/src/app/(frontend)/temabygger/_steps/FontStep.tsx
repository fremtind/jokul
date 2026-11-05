"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Title } from "@fremtind/jokul/typography";
import { FontSlotField } from "./FontSlotField";
import { StepCard } from "./StepCard";

export function FontStep() {
    return (
        <StepCard segment="font">
            <Title as="h3" size="m">
                Font
            </Title>
            <Flex direction="column" gap="24">
                <FontSlotField
                    slot="regular"
                    label="Last opp font"
                    description="Uten egen fil brukes Inter"
                />
                <FontSlotField
                    slot="display"
                    label="Last opp display-font"
                    description="Brukes til store overskrifter. Uten egen fil følger den vanlig font"
                />
            </Flex>
        </StepCard>
    );
}
