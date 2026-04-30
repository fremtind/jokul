"use client";

import { type ReactNode, memo } from "react";

// Storybook-storyene ligger utenfor `portal/`. Ved å gjenbruke dem holdes
// demoen i synk med det designere og utviklere ser i Storybook selv. Hele
// `Skjermbilder/`-mappa er hentet inn — legges en ny pattern-story til der,
// utvides DEMO_STORIES her med den.
import {
    Forsikringsoversikt as ForsikringsoversiktStory,
    Hjem as HjemStory,
} from "@jokul-stories/patterns/Bedriftsmarked.stories";
import {
    DetaljsideMedUlikeSizes as DetaljsideMedUlikeSizesStory,
    Detaljside as DetaljsideStory,
    SmartDelay as SmartDelayStory,
} from "@jokul-stories/patterns/Detaljside.stories";
import { ErstatningsBeregner as ErstatningsBeregnerStory } from "@jokul-stories/patterns/ErstatningsBeregner.stories";
import { _Flyt as FlytStory } from "@jokul-stories/patterns/Flyt.stories";
import {
    HvaErBoligensAdresse as HvaErBoligensAdresseStory,
    NårBleBoligenBygget as NårBleBoligenByggetStory,
    SkalDuLeieUtBoligen as SkalDuLeieUtBoligenStory,
} from "@jokul-stories/patterns/Kjopsflyt.stories";

/**
 * Storybook-stories har en `render(args, context) => ReactNode`. Vi leser
 * hverken args eller context — vi rendrer storyen som en React-komponent.
 * En variadisk signatur lar oss godta Storybooks strenge typer uten å lyve
 * om verdier (som `as never` ville gjort).
 */
type StorybookStory = {
    // biome-ignore lint/suspicious/noExplicitAny: Storybook-stories har strengere args/context-typer enn vi trenger her
    render?: (...args: any[]) => ReactNode;
};

/** Storybook "Skjermbilder"-demoer tilgjengelige i preview, nøklet på id. */
export const DEMO_STORIES: {
    id: string;
    label: string;
    story: StorybookStory;
}[] = [
    { id: "detaljside", label: "Detaljside", story: DetaljsideStory },
    {
        id: "detaljside-sizes",
        label: "Detaljside — ulike størrelser",
        story: DetaljsideMedUlikeSizesStory,
    },
    { id: "smart-delay", label: "SmartDelay", story: SmartDelayStory },
    { id: "hjem", label: "Bedrift — hjem", story: HjemStory },
    {
        id: "forsikringsoversikt",
        label: "Forsikringsoversikt",
        story: ForsikringsoversiktStory,
    },
    {
        id: "erstatning",
        label: "Erstatningsberegner",
        story: ErstatningsBeregnerStory,
    },
    { id: "flyt", label: "Flyt", story: FlytStory },
    {
        id: "boligen-bygget",
        label: "Når ble boligen bygget?",
        story: NårBleBoligenByggetStory,
    },
    {
        id: "boligens-adresse",
        label: "Hva er boligens adresse?",
        story: HvaErBoligensAdresseStory,
    },
    {
        id: "leie-ut",
        label: "Skal du leie ut boligen?",
        story: SkalDuLeieUtBoligenStory,
    },
];

type DemoFormProps = {
    storyId: string;
};

/**
 * Rendrer Storybook-storyen som matcher `storyId` (faller tilbake til den første).
 *
 * Memoiseres på `storyId` slik at story-rendringen (potensielt tung — noen
 * stories har egen `useState`/internt arbeid) ikke kjøres om igjen for hver
 * fargeendring i editoren.
 */
export const DemoForm = memo(function DemoForm({ storyId }: DemoFormProps) {
    const selected =
        DEMO_STORIES.find((s) => s.id === storyId) ?? DEMO_STORIES[0];
    return <>{selected.story.render?.()}</>;
});
