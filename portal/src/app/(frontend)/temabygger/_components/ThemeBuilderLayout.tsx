"use client";

import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import { type CSSProperties, type ReactNode, useMemo } from "react";
import type { ColorTokens } from "../_context/ThemeDraftContext";
import type { ColorScheme } from "./ThemeBuilder";

type ThemeBuilderLayoutProps = {
    children: ReactNode;
};

type ThemeBuilderLayoutSlotProps = {
    children: ReactNode;
};

type ThemeBuilderLayoutPreviewProps = ThemeBuilderLayoutSlotProps & {
    colorScheme: ColorScheme;
    tokens: ColorTokens;
};

const ThemeBuilderLayoutRoot = ({ children }: ThemeBuilderLayoutProps) => (
    <Flex direction="column" gap="40">
        <Flex as="header" direction="column" gap="8">
            <Title as="h1" size="xl">
                Forsikring i din merkevare
            </Title>
            <Text size="l">
                Gjør forsikring til en naturlig del av kundereisen
            </Text>
        </Flex>
        <Flex gap="32" layout={{ small: "1", large: "4.8" }} wrap="wrap">
            {children}
        </Flex>
    </Flex>
);

const ThemeBuilderLayoutPreview = ({
    children,
    colorScheme,
    tokens,
}: ThemeBuilderLayoutPreviewProps) => {
    const previewStyle = useMemo(() => buildPreviewStyle(tokens), [tokens]);

    return (
        <Card
            as="section"
            padding="l"
            outlined
            aria-labelledby="theme-builder-preview-title"
            data-theme={colorScheme}
            style={{
                ...previewStyle,
                backgroundColor: "var(--jkl-color-background-page)",
            }}
        >
            <Title as="h2" size="s" id="theme-builder-preview-title" srOnly>
                Forhåndsvisning
            </Title>
            {children}
        </Card>
    );
};

const ThemeBuilderLayoutForm = ({ children }: ThemeBuilderLayoutSlotProps) => (
    <section aria-labelledby="theme-builder-editor-title">
        <Title as="h2" size="s" id="theme-builder-editor-title" srOnly>
            Temaredigering
        </Title>
        {children}
    </section>
);

export const ThemeBuilderLayout = Object.assign(ThemeBuilderLayoutRoot, {
    Preview: ThemeBuilderLayoutPreview,
    Form: ThemeBuilderLayoutForm,
});

function buildPreviewStyle(tokens: ColorTokens): CSSProperties {
    const style: Record<string, string> = {};
    for (const [group, roles] of Object.entries(tokens)) {
        for (const [role, token] of Object.entries(roles)) {
            const value = `light-dark(${token.light}, ${token.dark})`;
            style[`--jkl-color-${group}-${role}`] = value;
        }
    }
    return style as CSSProperties;
}
