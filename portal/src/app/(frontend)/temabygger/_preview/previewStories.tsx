"use client";

import { KomponentOversikt as ThemeBuilderComponentsStory } from "@jokul-stories/temabygger/Temabygger.komponenter.stories";
import { Overblikk as ThemeBuilderOverviewStory } from "@jokul-stories/temabygger/Temabygger.overblikk.stories";
import type { ReactNode } from "react";

type StorybookStory = { render?: () => ReactNode };

export const ThemePreviewOverview = () =>
    (ThemeBuilderOverviewStory as StorybookStory).render?.() ?? null;

export const ThemePreviewComponents = () =>
    (ThemeBuilderComponentsStory as StorybookStory).render?.() ?? null;
