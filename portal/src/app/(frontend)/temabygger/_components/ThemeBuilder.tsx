"use client";

import { type ReactNode, useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ThemePreview } from "../_preview/ThemePreview";
import { ThemeBuilderLayout } from "./ThemeBuilderLayout";

export type ColorScheme = "light" | "dark";

export const COLOR_SCHEMES = [
    "light",
    "dark",
] as const satisfies readonly ColorScheme[];

type ThemeBuilderProps = {
    children: ReactNode;
};

export function ThemeBuilder({ children }: ThemeBuilderProps) {
    const { color, settings } = useThemeDraft();
    const [previewColorScheme, setPreviewColorScheme] =
        useState<ColorScheme>("light");
    const activePreviewColorScheme = settings.includeDarkMode
        ? previewColorScheme
        : "light";

    return (
        <ThemeBuilderLayout>
            <ThemeBuilderLayout.Form>{children}</ThemeBuilderLayout.Form>
            <ThemeBuilderLayout.Preview
                colorScheme={activePreviewColorScheme}
                includeDarkMode={settings.includeDarkMode}
                tokens={color.tokens}
            >
                <ThemePreview
                    colorScheme={activePreviewColorScheme}
                    includeDarkMode={settings.includeDarkMode}
                    onColorSchemeChange={setPreviewColorScheme}
                />
            </ThemeBuilderLayout.Preview>
        </ThemeBuilderLayout>
    );
}
