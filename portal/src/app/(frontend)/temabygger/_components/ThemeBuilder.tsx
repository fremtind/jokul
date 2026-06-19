"use client";

import { type ReactNode, useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { ThemePreview } from "../_preview/ThemePreview";
import type { ColorScheme } from "../generator/types";
import { ThemeBuilderLayout } from "./ThemeBuilderLayout";

type ThemeBuilderProps = {
    children: ReactNode;
};

export function ThemeBuilder({ children }: ThemeBuilderProps) {
    const { draft } = useThemeDraft();
    const [previewColorScheme, setPreviewColorScheme] =
        useState<ColorScheme>("light");
    const activePreviewColorScheme = draft.includeDarkMode
        ? previewColorScheme
        : "light";

    return (
        <ThemeBuilderLayout>
            <ThemeBuilderLayout.Form>{children}</ThemeBuilderLayout.Form>
            <ThemeBuilderLayout.Preview
                colorScheme={activePreviewColorScheme}
                includeDarkMode={draft.includeDarkMode}
                tokens={draft.colorTokens}
            >
                <ThemePreview
                    colorScheme={activePreviewColorScheme}
                    includeDarkMode={draft.includeDarkMode}
                    onColorSchemeChange={setPreviewColorScheme}
                />
            </ThemeBuilderLayout.Preview>
        </ThemeBuilderLayout>
    );
}
