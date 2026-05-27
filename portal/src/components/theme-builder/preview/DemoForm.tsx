"use client";

import { type ReactNode, memo } from "react";

// Storybook-storyene ligger utenfor `portal/`. Ved å gjenbruke dem holdes
// demoen i synk med det designere og utviklere ser i Storybook selv. Hele
// `Skjermbilder/`-mappa er hentet inn — legges en ny pattern-story til der,
// utvides DEMO_STORIES her med den.
import * as Bedriftsmarked from "@jokul-stories/patterns/Bedriftsmarked.stories";
import * as Detaljside from "@jokul-stories/patterns/Detaljside.stories";
import * as Erstatningsberegner from "@jokul-stories/patterns/ErstatningsBeregner.stories";
import * as Flyt from "@jokul-stories/patterns/Flyt.stories";
import * as Kjopsflyt from "@jokul-stories/patterns/Kjopsflyt.stories";

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
    // biome-ignore lint/suspicious/noExplicitAny: args-typer varierer per story
    args?: Record<string, any>;
}[] = [
    { id: "detaljside", label: "Detaljside", story: Detaljside.Detaljside },
    {
        id: "detaljside-sizes",
        label: "Detaljside — ulike størrelser",
        story: Detaljside.DetaljsideMedUlikeSizes,
    },
    { id: "smart-delay", label: "SmartDelay", story: Detaljside.SmartDelay },
    {
        id: "hjem",
        label: "Bedrift — hjem",
        story: Bedriftsmarked.Hjem,
        args: Bedriftsmarked.default.args,
    },
    {
        id: "forsikringsoversikt",
        label: "Forsikringsoversikt",
        story: Bedriftsmarked.Forsikringsoversikt,
        args: Bedriftsmarked.default.args,
    },
    {
        id: "erstatning",
        label: "Erstatningsberegner",
        story: Erstatningsberegner.ErstatningsBeregner,
        args: Erstatningsberegner.default.args,
    },
    { id: "flyt", label: "Flyt", story: Flyt._Flyt, args: Flyt.default.args },
    {
        id: "boligen-bygget",
        label: "Når ble boligen bygget?",
        story: Kjopsflyt.NårBleBoligenBygget,
    },
    {
        id: "boligens-adresse",
        label: "Hva er boligens adresse?",
        story: Kjopsflyt.HvaErBoligensAdresse,
    },
    {
        id: "leie-ut",
        label: "Skal du leie ut boligen?",
        story: Kjopsflyt.SkalDuLeieUtBoligen,
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
    return <>{selected.story.render?.(selected.args ?? {})}</>;
});
