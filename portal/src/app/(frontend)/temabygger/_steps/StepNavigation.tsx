"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { NavLink } from "@fremtind/jokul/nav-link";
import Link from "next/link";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ResetThemeModal } from "./ResetThemeModal";
import styles from "./step-navigation.module.scss";

/**
 * Løypa, i rekkefølge. `forwardLabel` står på knappen som fører hit, og
 * beskriver siden den går til i stedet for retningen, slik at brukeren vet hva
 * som skjer før de trykker.
 */
const STEPS = [
    { segment: "identitet", forwardLabel: "Lag tema" },
    { segment: "grunnfarge", forwardLabel: "Velg kontrastfarge" },
    { segment: "farger", forwardLabel: "Tilpass fargene" },
    { segment: "mork-modus", forwardLabel: "Tilpass mørk modus" },
    { segment: "hjorner", forwardLabel: "Velg hjørner" },
    { segment: "forhandsvisning", forwardLabel: "Se forhåndsvisning" },
] as const;

// Forhåndsvisningen er målet for siste steg, ikke et steg i temabyggeren.
export type ThemeBuilderStepSegment = Exclude<
    (typeof STEPS)[number]["segment"],
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
    const { next } = useNeighbourSteps(segment);
    // Hovedhandlingen fyller bredden som er igjen. Nullstilling står alene til
    // høyre, bare som ikon, slik at den ikke konkurrerer om oppmerksomheten.
    // Handlingen og «ikke klar ennå» er knapper; ellers er veien videre en lenke.
    const onClick = onBlocked;
    const label = next?.forwardLabel;

    return (
        <Flex gap="16" alignItems="center">
            {label &&
                (onClick ? (
                    <Button
                        className={styles.forward}
                        type="button"
                        variant="primary"
                        onClick={onClick}
                    >
                        {label}
                    </Button>
                ) : (
                    <Button
                        className={styles.forward}
                        as={Link}
                        href={`/temabygger/${next?.segment}`}
                        variant="primary"
                    >
                        {label}
                    </Button>
                ))}
            <ResetThemeModal className={styles.reset} scope={segment} />
        </Flex>
    );
}

/**
 * Tilbakelenka hører til øverst i steget, der den ikke konkurrerer med knappen
 * som fører videre. En `NavLink` sier at dette er navigasjon og ikke en handling
 * på temaet, slik at det eneste knappeutseendet i kortet er veien framover.
 */
export function StepBackLink({
    segment,
}: { segment: ThemeBuilderStepSegment }) {
    const { previous } = useNeighbourSteps(segment);

    if (!previous) {
        return null;
    }

    return (
        <Flex>
            <NavLink as={Link} back href={`/temabygger/${previous.segment}`}>
                Tilbake
            </NavLink>
        </Flex>
    );
}

function useNeighbourSteps(segment: ThemeBuilderStepSegment) {
    const { draft } = useThemeDraft();

    // Mørk modus er et tilvalg, så steget finnes bare når temaet har det.
    const steps = STEPS.filter(
        (step) => draft.includeDarkMode || step.segment !== "mork-modus",
    );
    const index = steps.findIndex((step) => step.segment === segment);

    return { previous: steps[index - 1], next: steps[index + 1] };
}
