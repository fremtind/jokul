"use client";

import { RadioButton, RadioButtonGroup } from "@fremtind/jokul/radio-button";
import { Title } from "@fremtind/jokul/typography";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useThemeDraftActions } from "../_hooks/useThemeDraftActions";
import {
    BORDER_RADIUS_SCALE_OPTIONS,
    type BorderRadiusScaleId,
} from "../_shared/borderRadius";
import { StepCard } from "./StepCard";

export function BorderRadiusStep() {
    const { draft } = useThemeDraft();
    const { setBorderRadius } = useThemeDraftActions();

    return (
        <StepCard segment="hjorner">
            <Title as="h3" size="m">
                Velg hjørner
            </Title>

            <RadioButtonGroup
                legend="Hvor runde skal hjørnene være?"
                name="borderRadius"
                value={draft.borderRadius}
                onChange={(event) =>
                    setBorderRadius(event.target.value as BorderRadiusScaleId)
                }
            >
                {BORDER_RADIUS_SCALE_OPTIONS.map((option) => (
                    <RadioButton
                        key={option.id}
                        value={option.id}
                        helpLabel={option.helpLabel}
                    >
                        {option.label}
                    </RadioButton>
                ))}
            </RadioButtonGroup>
        </StepCard>
    );
}
