"use client";

import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import {
    ThemePreviewProvider,
    useThemePreview,
} from "@/app/(frontend)/temabygger/_context/ThemePreviewContext";
import { ThemePreview } from "@/app/(frontend)/temabygger/_preview/ThemePreview";
import { buildThemePreviewStyle } from "@/app/(frontend)/temabygger/_shared/previewStyle";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import { useMemo } from "react";
import styles from "./theme-preview-page.module.scss";

const DEFAULT_THEME_NAME = "<SpareBank 1>";

export function ThemePreviewPage() {
    return (
        <div className={styles.page}>
            <Flex
                as="main"
                className={styles.main}
                center="2xl"
                gap={{ small: "24", medium: "32" }}
                layout={{ small: "1", medium: "3.9" }}
                wrap="wrap"
                alignItems="start"
            >
                <PreviewPageAside />
                <ThemePreviewProvider>
                    <PreviewPageContent />
                </ThemePreviewProvider>
            </Flex>
        </div>
    );
}

function PreviewPageAside() {
    const { draft } = useThemeDraft();
    const themeName = draft.themeName.trim() || DEFAULT_THEME_NAME;

    return (
        <Card as="aside" padding="l">
            <Flex direction="column" gap="24">
                <Title as="h1" size="m">
                    Forhåndsvisning av tema for {themeName}
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
    const { activeColorScheme } = useThemePreview();
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
            <ThemePreview />
        </Card>
    );
}
