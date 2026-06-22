"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeBuilderLayout } from "./_components/ThemeBuilderLayout";
import { ThemePreviewProvider } from "./_context/ThemePreviewContext";
import { ThemePreview } from "./_preview/ThemePreview";

type ThemeBuilderProps = {
    children: ReactNode;
};

export function ThemeBuilder({ children }: ThemeBuilderProps) {
    const [activeSegment] = useSelectedLayoutSegments().filter(
        (segment) => !segment.startsWith("("),
    );

    return (
        <ThemeBuilderLayout>
            <ThemeBuilderLayout.Form>{children}</ThemeBuilderLayout.Form>
            <ThemePreviewProvider>
                <ThemeBuilderLayout.Preview>
                    <ThemePreview segment={activeSegment} />
                </ThemeBuilderLayout.Preview>
            </ThemePreviewProvider>
        </ThemeBuilderLayout>
    );
}
