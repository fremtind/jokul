"use client";

import { Flex } from "@fremtind/jokul/flex";
import { BETA_Select } from "@fremtind/jokul/select";
import { Title } from "@fremtind/jokul/typography";
import { useState } from "react";
import { ColorCombinationCard } from "../_components/ColorCombinationCard";
import {
    COLOR_SCHEMES,
    type ColorRole,
    type ColorScheme,
    type EditableLightDarkPalette,
} from "../generator/types";
import {
    CONTRAST_REQUIREMENTS,
    getFailingContrasts,
} from "./contrastEvaluation";

import overviewStyles from "../../../../components/overview/overview.module.scss";

type ColorCombinationsProps = {
    includeDarkMode: boolean;
    tokens: EditableLightDarkPalette;
    colorScheme?: ColorScheme;
};

const LIGHT_COLOR_SCHEMES = ["light"] as const satisfies readonly ColorScheme[];

export function ColorCombinations({
    includeDarkMode,
    tokens,
    colorScheme = "light",
}: ColorCombinationsProps) {
    const colorSchemes = includeDarkMode ? COLOR_SCHEMES : LIGHT_COLOR_SCHEMES;
    const [shownBackground, setShownBackground] =
        useState<keyof typeof CONTRAST_REQUIREMENTS>("page");

    const failingCombinations = getFailingContrasts(
        tokens,
        colorSchemes,
    ).filter((combination) => combination.colorScheme === colorScheme);

    return (
        <Flex direction="column" gap="xl">
            {failingCombinations.length > 0 && (
                <section>
                    <Title as="h2" className="jkl-spacing-m--bottom">
                        Fargekombinasjoner med for lav kontrast
                    </Title>
                    <div
                        className={overviewStyles.grid}
                        style={{ gap: "var(--jkl-spacing-s)" }}
                    >
                        {failingCombinations.map((combination) => (
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
                <BETA_Select
                    className="jkl-spacing-m--bottom"
                    label="Bakgrunnsfarge"
                    name="bakgrunn"
                    value={shownBackground}
                    onChange={(event) =>
                        setShownBackground(
                            event.target
                                .value as keyof typeof CONTRAST_REQUIREMENTS,
                        )
                    }
                >
                    {Object.keys(CONTRAST_REQUIREMENTS).map((background) => (
                        <option key={background} value={background}>
                            {background}
                        </option>
                    ))}
                </BETA_Select>
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
