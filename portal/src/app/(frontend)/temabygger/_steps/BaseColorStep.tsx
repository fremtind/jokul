"use client";

import { Checkbox } from "@fremtind/jokul/checkbox";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useThemeDraftActions } from "../_hooks/useThemeDraftActions";
import { StepCard } from "./StepCard";

export function BaseColorStep() {
    const { draft } = useThemeDraft();
    const { applyBaseColor, setIncludeDarkMode } = useThemeDraftActions();
    const { themeName } = draft;

    return (
        <StepCard segment="grunnfarge">
            <Flex direction="column" gap="8">
                <Title as="h3" size="m">
                    {themeName
                        ? `Fyll inn kontrastfargen til ${themeName}`
                        : "Fyll inn kontrastfargen"}
                </Title>
                <Text>
                    Vi bruker fargen som utgangspunkt til å generere et tema som
                    du kan tilpasse i neste steg.
                </Text>
            </Flex>
            <ColorTokenField
                group="background"
                tokenRole="contrast"
                colorScheme="light"
                label="Kontrastfarge"
                onValueChange={applyBaseColor}
            />
            <Checkbox
                name="includeDarkMode"
                value="includeDarkMode"
                checked={draft.includeDarkMode}
                onChange={(event) => setIncludeDarkMode(event.target.checked)}
            >
                Lag tema for mørk modus, også
            </Checkbox>
        </StepCard>
    );
}
