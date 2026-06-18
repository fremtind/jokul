"use client";

import type { ColorScheme } from "@/app/(frontend)/temabygger/_components/ThemeBuilder";
import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import { ThemePreview } from "@/app/(frontend)/temabygger/_preview/ThemePreview";
import { createColorTokenMailHref } from "@/app/(frontend)/temabygger/_shared/colorTokenMailHref";
import { buildThemePreviewStyle } from "@/app/(frontend)/temabygger/_shared/previewStyle";
import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Message } from "@fremtind/jokul/message";
import { Text, Title } from "@fremtind/jokul/typography";
import { useMemo, useState } from "react";
import styles from "./theme-preview-page.module.scss";

const DEFAULT_THEME_NAME = "<SpareBank 1>";

export function ThemePreviewPage() {
    const { draft } = useThemeDraft();
    const [previewColorScheme, setPreviewColorScheme] =
        useState<ColorScheme>("light");
    const activePreviewColorScheme = draft.includeDarkMode
        ? previewColorScheme
        : "light";
    const themeName = draft.themeName.trim() || DEFAULT_THEME_NAME;
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
                <Card as="aside" padding="l">
                    <Flex direction="column" gap="32">
                        <Flex direction="column" gap="24">
                            <Title as="h1" size="m">
                                Forhåndsvisning av tema for {themeName}
                            </Title>
                            <Text>
                                Dette er en visning av hvordan merkevaren deres
                                vil representeres i Fremtinds designsystem,
                                Jøkul.
                            </Text>
                            <Message variant="info">
                                Vi anbefaler at denne forhåndsvisningen deles
                                internt, slik at uttrykket er forankret og
                                godkjent før det sendes til Jøkul.
                            </Message>
                        </Flex>
                        <Button
                            as="a"
                            href={createColorTokenMailHref({
                                themeName,
                                colorTokens: draft.colorTokens,
                                includeDarkMode: draft.includeDarkMode,
                            })}
                            variant="primary"
                        >
                            Send til Jøkul
                        </Button>
                    </Flex>
                </Card>
                <Card
                    as="section"
                    padding="l"
                    outlined
                    aria-labelledby="theme-builder-preview-page-title"
                    data-theme={activePreviewColorScheme}
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
                        colorScheme={activePreviewColorScheme}
                        includeDarkMode={draft.includeDarkMode}
                        onColorSchemeChange={setPreviewColorScheme}
                    />
                </Card>
            </Flex>
        </div>
    );
}
