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
    { segment: "lever-over", forwardLabel: "Lever over til Jøkul" },
] as const;

export type ThemeBuilderStepSegment = (typeof STEPS)[number]["segment"];

type StepNavigationProps = {
    segment: ThemeBuilderStepSegment;
    /**
     * Settes når brukeren ikke skal komme videre ennå. Da kaller knappen denne
     * i stedet for å navigere, slik at steget selv kan forklare hvorfor.
     */
    onBlocked?: () => void;
    /**
     * Erstatter knappen videre. Siste steget går ingen steder, det leverer over,
     * men handlingen skal se ut som veien framover på de andre stegene.
     */
    action?: { label: string; onClick: () => void };
};

export function StepNavigation({
    segment,
    onBlocked,
    action,
}: StepNavigationProps) {
    const { next } = useNeighbourSteps(segment);
    // Hovedhandlingen fyller bredden som er igjen. Nullstilling står alene til
    // høyre, bare som ikon, slik at den ikke konkurrerer om oppmerksomheten.
    return (
        <Flex gap="16" alignItems="center">
            {action ? (
                <Button
                    className={styles.forward}
                    type="button"
                    variant="primary"
                    onClick={action.onClick}
                >
                    {action.label}
                </Button>
            ) : (
                next &&
                (onBlocked ? (
                    <Button
                        className={styles.forward}
                        type="button"
                        variant="primary"
                        onClick={onBlocked}
                    >
                        {next.forwardLabel}
                    </Button>
                ) : (
                    <Button
                        className={styles.forward}
                        as={Link}
                        href={`/temabygger/${next.segment}`}
                        variant="primary"
                    >
                        {next.forwardLabel}
                    </Button>
                ))
            )}
            <ResetThemeModal
                className={styles.reset}
                scope={segment === "lever-over" ? undefined : segment}
            />
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
