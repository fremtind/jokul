"use client";

import { ButtonGroup } from "@fremtind/jokul/button-group";
import { useRouter } from "next/navigation";
import { useThemeDraft } from "../_context/ThemeDraftContext";

/** Løypa, i rekkefølge. */
const STEPS = [
    "hvem-er-du",
    "font",
    "grunnfarge",
    "farger",
    "mork-modus",
    "forhandsvisning",
] as const;

// Forhåndsvisningen er målet for siste steg, ikke et steg i temabyggeren.
export type ThemeBuilderStepSegment = Exclude<
    (typeof STEPS)[number],
    "forhandsvisning"
>;

type StepNavigationProps = {
    segment: ThemeBuilderStepSegment;
    /**
     * Settes når brukeren ikke skal komme videre ennå. Da kaller knappen denne
     * i stedet for å navigere, slik at steget selv kan forklare hvorfor.
     */
    onBlocked?: () => void;
};

export function StepNavigation({ segment, onBlocked }: StepNavigationProps) {
    const router = useRouter();
    const { previous, next } = useNeighbourSteps(segment);

    return (
        <ButtonGroup
            mainAction={{
                type: "button",
                children: "Fortsett",
                onClick:
                    onBlocked ?? (() => router.push(`/temabygger/${next}`)),
            }}
            secondaryAction={
                previous
                    ? {
                          type: "button",
                          children: "Tilbake",
                          onClick: () => router.push(`/temabygger/${previous}`),
                      }
                    : undefined
            }
        />
    );
}

function useNeighbourSteps(segment: ThemeBuilderStepSegment) {
    const { draft } = useThemeDraft();

    // Mørk modus er et tilvalg, så steget finnes bare når temaet har det.
    const steps = STEPS.filter(
        (step) => draft.includeDarkMode || step !== "mork-modus",
    );
    const index = steps.indexOf(segment);

    return { previous: steps[index - 1], next: steps[index + 1] };
}
