"use client";

import { Button } from "@fremtind/jokul/button";
import { Checkbox } from "@fremtind/jokul/checkbox";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { StepCard } from "./StepCard";

type BaseColorStepProps = {
    nextStepPath: string;
};

export function BaseColorStep({ nextStepPath }: BaseColorStepProps) {
    const { draft, dispatch } = useThemeDraft();
    const themeName = draft.themeName.trim() || "distributøren";

    return (
        <StepCard>
            <Flex direction="column" gap="8">
                <Title as="h3" size="m">
                    Fyll inn kontrastfargen til {themeName}
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
                onValueChange={(value) =>
                    dispatch({ type: "APPLY_BASE_COLOR", value })
                }
            />
            <Checkbox
                name="includeDarkMode"
                value="includeDarkMode"
                checked={draft.includeDarkMode}
                onChange={(event) =>
                    dispatch({
                        type: "SET_INCLUDE_DARK_MODE",
                        includeDarkMode: event.target.checked,
                    })
                }
            >
                Lag tema for mørk modus, også
            </Checkbox>
            <Button as={Link} href={nextStepPath} variant="primary">
                Lag tema
            </Button>
        </StepCard>
    );
}
