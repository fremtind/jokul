"use client";

import { Message } from "@fremtind/jokul/message";
import { Title } from "@fremtind/jokul/typography";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { getFailingContrasts } from "../_preview/contrastEvaluation";
import type { ColorScheme } from "../generator/types";
import { ColorTokenAccordion } from "./ColorTokenAccordion";
import { StepCard } from "./StepCard";
import { getEditableColorTokenGroups } from "./colorTokenMetadata";

const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
    light: "lyst modus",
    dark: "mørk modus",
};

type ColorsStepProps = {
    colorScheme: ColorScheme;
};

/**
 * Lyse og mørke farger justeres i hvert sitt steg. Da trenger ikke
 * forhåndsvisningen en egen modusvelger, og kontrastfeilene som blokkerer
 * veien videre er alltid de brukeren faktisk ser.
 */
export function ColorsStep({ colorScheme }: ColorsStepProps) {
    const { draft } = useThemeDraft();
    const router = useRouter();
    const [hasTriedToContinue, setHasTriedToContinue] = useState(false);

    const { colorTokens, includeDarkMode, themeName } = draft;
    const isOrphanedDarkStep = colorScheme === "dark" && !includeDarkMode;

    const contrastErrors = getFailingContrasts(colorTokens, [colorScheme]);
    const hasContrastErrors = contrastErrors.length > 0;

    // Mørk modus kan skrus av etter at brukeren har vært innom dette steget.
    useEffect(() => {
        if (isOrphanedDarkStep) {
            router.replace("/temabygger/farger");
        }
    }, [isOrphanedDarkStep, router]);

    if (isOrphanedDarkStep) {
        return null;
    }

    const heading = themeName
        ? `Tilpass farger for ${themeName}`
        : "Tilpass farger";

    const segment = colorScheme === "dark" ? "mork-modus" : "farger";

    return (
        <StepCard
            segment={segment}
            navigation={{
                onBlocked: hasContrastErrors
                    ? () => setHasTriedToContinue(true)
                    : undefined,
            }}
        >
            <Title as="h3" size="m">
                {includeDarkMode
                    ? `${heading} i ${COLOR_SCHEME_LABELS[colorScheme]}`
                    : heading}
            </Title>
            <ColorTokenAccordion
                colorScheme={colorScheme}
                groups={getEditableColorTokenGroups(colorTokens)}
                failingContrasts={contrastErrors}
            />
            {hasTriedToContinue && hasContrastErrors && (
                <Message variant="error" title="Kontrastfeil" role="alert">
                    Noen fargekombinasjoner har for lav kontrast. Juster de
                    markerte feltene før du går videre.
                </Message>
            )}
        </StepCard>
    );
}
