"use client";

import { Button } from "@fremtind/jokul/button";
import { Checkbox } from "@fremtind/jokul/checkbox";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useState } from "react";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { StepCard } from "./StepCard";

type BaseColorStepProps = {
    nextStepPath: string;
};

export function BaseColorStep({ nextStepPath }: BaseColorStepProps) {
    const { color } = useThemeDraft();
    const [includeDarkMode, setIncludeDarkMode] = useState(true);
    const contrastToken = color.tokens.background.contrast;

    return (
        <StepCard>
            <Flex direction="column" gap="8">
                <Title as="h3" size="m">
                    Fyll inn kontrastfargen til &lt;Distributør&gt;
                </Title>
                <Text>
                    Vi bruker fargen som utgangspunkt til å generere et tema som
                    du kan tilpasse i neste steg.
                </Text>
            </Flex>
            {contrastToken && (
                <ColorTokenField
                    token={contrastToken}
                    group="background"
                    tokenRole="contrast"
                    colorScheme="light"
                    label="Kontrastfarge"
                    onValueChange={color.applyBaseColor}
                />
            )}
            <Checkbox
                name="includeDarkMode"
                value="includeDarkMode"
                checked={includeDarkMode}
                onChange={(event) => setIncludeDarkMode(event.target.checked)}
            >
                Lag tema for mørk modus, også
            </Checkbox>
            <Button as={Link} href={nextStepPath} variant="primary">
                Lag tema
            </Button>
        </StepCard>
    );
}
