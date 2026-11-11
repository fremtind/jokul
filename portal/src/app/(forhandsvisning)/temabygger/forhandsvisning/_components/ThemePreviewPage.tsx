"use client";

import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import { ThemePreview } from "@/app/(frontend)/temabygger/_preview/ThemePreview";
import { buildThemePreviewStyle } from "@/app/(frontend)/temabygger/_shared/previewStyle";
import type { ColorScheme } from "@/app/(frontend)/temabygger/generator/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import { useMemo, useState } from "react";
import styles from "./theme-preview-page.module.scss";

export function ThemePreviewPage() {
    return (
        <div className={styles.page}>
            <Flex as="main" className={styles.main} wrap alignItems="start">
                <PreviewPageAside />
                <PreviewPageContent />
            </Flex>
        </div>
    );
}

function PreviewPageAside() {
    const { draft } = useThemeDraft();
    const { themeName } = draft;

    return (
        <Card as="aside" padding="l">
            <Flex direction="column" gap="24">
                <Title as="h1" size="m">
                    {themeName
                        ? `Forhåndsvisning av tema for ${themeName}`
                        : "Forhåndsvisning av tema"}
                </Title>
                <Text>
                    Dette er en visning av hvordan merkevaren deres vil
                    representeres i Fremtinds designsystem, Jøkul.
                </Text>
            </Flex>
        </Card>
    );
}

function PreviewPageContent() {
    const { draft } = useThemeDraft();
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const activeColorScheme = draft.includeDarkMode ? colorScheme : "light";
    const previewStyle = useMemo(() => {
        return buildThemePreviewStyle({
            tokens: draft.colorTokens,
            includeDarkMode: draft.includeDarkMode,
            regularFont: draft.regularFont,
            displayFont: draft.displayFont,
        });
    }, [
        draft.colorTokens,
        draft.includeDarkMode,
        draft.displayFont,
        draft.regularFont,
    ]);

    return (
        <Card
            as="section"
            padding="l"
            outlined
            aria-labelledby="theme-builder-preview-page-title"
            data-theme={activeColorScheme}
            style={{
                ...previewStyle,
                backgroundColor: "var(--jkl-color-background-page)",
            }}
        >
            <Title
                as="h2"
                size="s"
                id="theme-builder-preview-page-title"
                srOnly
            >
                Forhåndsvisning
            </Title>
            <ThemePreview
                colorScheme={activeColorScheme}
                onToggleColorScheme={() =>
                    setColorScheme((current) =>
                        current === "light" ? "dark" : "light",
                    )
                }
            />
        </Card>
    );
}
