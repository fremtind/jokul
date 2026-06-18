"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Select } from "@fremtind/jokul/select";
import { TextInput } from "@fremtind/jokul/text-input";
import { Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { FONT_SELECT_OPTIONS, type FontOptionId } from "../_shared/fontOptions";
import { StepCard } from "./StepCard";

type IdentityStepProps = {
    nextStepPath: string;
};

export function IdentityStep({ nextStepPath }: IdentityStepProps) {
    const { draft, dispatch } = useThemeDraft();

    return (
        <StepCard>
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
                    onChange={(event) =>
                        dispatch({
                            type: "SET_THEME_NAME",
                            themeName: event.target.value,
                        })
                    }
                />
                <Select
                    name="regularFont"
                    label="Velg font"
                    items={FONT_SELECT_OPTIONS}
                    width="100%"
                    value={draft.regularFont}
                    onChange={(event) =>
                        dispatch({
                            type: "SET_REGULAR_FONT",
                            font: event.target.value as FontOptionId,
                        })
                    }
                />
                <Select
                    name="displayFont"
                    label="Velg display font"
                    description="Brukes til store overskrifter"
                    items={FONT_SELECT_OPTIONS}
                    width="100%"
                    value={draft.displayFont}
                    onChange={(event) =>
                        dispatch({
                            type: "SET_DISPLAY_FONT",
                            font: event.target.value as FontOptionId,
                        })
                    }
                />
            </Flex>
            <Button as={Link} href={nextStepPath} variant="primary">
                Sett i gang!
            </Button>
        </StepCard>
    );
}
