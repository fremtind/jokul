"use client";

import { type ReactNode, memo } from "react";

// Storybook-storyen ligger utenfor `portal/`. Ved å gjenbruke den holdes
// demoen i synk med det designere og utviklere ser i Storybook selv.
import { Detaljside as DetaljsideStory } from "@jokul-stories/patterns/Detaljside.stories";

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

const detailStory = DetaljsideStory as StorybookStory;

/**
 * Rendrer detaljside-storyen fra Storybook.
 * Memoiseres slik at story-rendringen ikke kjøres om igjen for hver
 * fargeendring i editoren.
 */
export const DemoForm = memo(function DemoForm() {
    return <>{detailStory.render?.()}</>;
});
