"use client";

import { Checkbox } from "@fremtind/jokul/checkbox";
import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import { Title } from "@fremtind/jokul/typography";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useThemeDraftActions } from "../_hooks/useThemeDraftActions";
import { FontSlotField } from "./FontSlotField";
import { StepCard } from "./StepCard";

export function IdentityStep() {
    const { draft } = useThemeDraft();
    const { setThemeName, setBoldTitles } = useThemeDraftActions();

    return (
        <StepCard segment="identitet">
            <Title as="h3" size="m">
                Lag tema
            </Title>
            <Flex direction="column" gap="24">
                <TextInput
                    label="Navngi tema"
                    description="Brukes til å navngi fila di"
                    name="themeName"
                    width="100%"
                    value={draft.themeName}
                    onChange={(event) => setThemeName(event.target.value)}
                />
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
                <Checkbox
                    name="boldTitles"
                    value="boldTitles"
                    checked={draft.boldTitles}
                    onChange={(event) => setBoldTitles(event.target.checked)}
                >
                    Vis titlene i fet vekt
                </Checkbox>
            </Flex>
        </StepCard>
    );
}
