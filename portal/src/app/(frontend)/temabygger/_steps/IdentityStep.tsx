"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Select } from "@fremtind/jokul/select";
import { TextInput } from "@fremtind/jokul/text-input";
import { Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useState } from "react";
import { StepCard } from "./StepCard";

const FONT_OPTIONS = ["SpareBank 1", "Fremtind Grotesk", "Inter", "Open Sans"];

type IdentityStepProps = {
    nextStepPath: string;
};

export function IdentityStep({ nextStepPath }: IdentityStepProps) {
    // Midlertidig lokal state. Når tema-info/typografi skal eksporteres som tokens,
    // kan dette flyttes inn som en egen draft-del i ThemeDraftContext.
    const [themeInfo, setThemeInfo] = useState({
        themeName: "SpareBank 1",
        bodyFont: "",
        displayFont: "",
    });

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
                    value={themeInfo.themeName}
                    onChange={(event) =>
                        setThemeInfo({
                            ...themeInfo,
                            themeName: event.target.value,
                        })
                    }
                />
                <Select
                    name="bodyFont"
                    label="Velg font"
                    items={FONT_OPTIONS}
                    defaultPrompt="Velg"
                    width="100%"
                    value={themeInfo.bodyFont}
                    onChange={(event) =>
                        setThemeInfo({
                            ...themeInfo,
                            bodyFont: event.target.value,
                        })
                    }
                />
                <Select
                    name="displayFont"
                    label="Velg display font"
                    description="Brukes til store overskrifter"
                    items={FONT_OPTIONS}
                    defaultPrompt="Velg"
                    width="100%"
                    value={themeInfo.displayFont}
                    onChange={(event) =>
                        setThemeInfo({
                            ...themeInfo,
                            displayFont: event.target.value,
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
