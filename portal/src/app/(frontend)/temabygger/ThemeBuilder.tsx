"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeBuilderLayout } from "./_components/ThemeBuilderLayout";
import { ThemePreview } from "./_preview/ThemePreview";

type ThemeBuilderProps = {
    children: ReactNode;
};

export function ThemeBuilder({ children }: ThemeBuilderProps) {
    const [activeSegment, colorModeSegment] =
        useSelectedLayoutSegments().filter(
            (segment) => !segment.startsWith("("),
        );
    const colorScheme = colorModeSegment === "morkt" ? "dark" : "light";

    return (
        <ThemeBuilderLayout>
            <ThemeBuilderLayout.Form>{children}</ThemeBuilderLayout.Form>
            <ThemeBuilderLayout.Preview colorScheme={colorScheme}>
                <ThemePreview
                    segment={activeSegment}
                    colorScheme={colorScheme}
                />
            </ThemeBuilderLayout.Preview>
        </ThemeBuilderLayout>
    );
}
