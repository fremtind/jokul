"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Select } from "@fremtind/jokul/select";
import { Title } from "@fremtind/jokul/typography";
import { useState } from "react";
import { ColorCombinationCard } from "../_components/ColorCombinationCard";
import type { ColorRole } from "../generator/types";
import { CONTRAST_REQUIREMENTS } from "./contrastEvaluation";

import overviewStyles from "../../../../components/overview/overview.module.scss";
import { useThemePreview } from "../_context/ThemePreviewContext";

export function ColorCombinations() {
    const { contrastErrors } = useThemePreview();
    const [shownBackground, setShownBackground] =
        useState<keyof typeof CONTRAST_REQUIREMENTS>("page");

    return (
        <Flex direction="column" gap="xl">
            {contrastErrors.length > 0 && (
                <section>
                    <Title as="h2" className="jkl-spacing-m--bottom">
                        Fargekombinasjoner med for lav kontrast
                    </Title>
                    <div
                        className={overviewStyles.grid}
                        style={{ gap: "var(--jkl-spacing-s)" }}
                    >
                        {contrastErrors.map((combination) => (
                            <ColorCombinationCard
                                key={`${combination.backgroundRole}-${combination.foregroundRole}`}
                                backgroundRole={combination.backgroundRole}
                                foregroundRole={combination.foregroundRole}
                                contrastError={{
                                    actualContrast: combination.actualContrast,
                                    expectedContrast:
                                        combination.expectedContrast,
                                }}
                            />
                        ))}
                    </div>
                </section>
            )}

            <Flex as="section" direction="column" gap="s" alignItems="start">
                <Title as="h2">Alle kombinasjoner</Title>
                <Select
                    className="jkl-spacing-m--bottom"
                    label="Bakgrunnsfarge"
                    name="bakgrunn"
                    value={shownBackground}
                    items={Object.keys(CONTRAST_REQUIREMENTS)}
                    onChange={(event) =>
                        setShownBackground(
                            event.target
                                .value as keyof typeof CONTRAST_REQUIREMENTS,
                        )
                    }
                />
                <div
                    className={overviewStyles.grid}
                    style={{ gap: "var(--jkl-spacing-s)", width: "100%" }}
                >
                    {Object.entries(CONTRAST_REQUIREMENTS[shownBackground]).map(
                        ([role]) => (
                            <ColorCombinationCard
                                key={role}
                                backgroundRole={`background.${shownBackground}`}
                                foregroundRole={role as ColorRole}
                            />
                        ),
                    )}
                </div>
            </Flex>
        </Flex>
    );
}
