"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import type { ReactNode } from "react";
import { useActiveStep } from "./_hooks/useActiveStep";
import { ThemePreview } from "./_preview/ThemePreview";
import styles from "./theme-builder.module.scss";

type ThemeBuilderProps = {
    /** Skjemaet til venstre. Uten det får forhåndsvisningen hele bredden. */
    children?: ReactNode;
    /**
     * Forhåndsvisningen til høyre. Stegene lar den følge ruta, mens
     * forhåndsvisningssiden sender inn sin egen med fargemodusvelger.
     */
    preview?: ReactNode;
};

export function ThemeBuilder({ children, preview }: ThemeBuilderProps) {
    const activeSegment = useActiveStep();

    return (
        <Flex className={styles.themeBuilder} direction="column" gap="40">
            <Flex as="header" direction="column" gap="8">
                <Title as="h1" size="xl">
                    Forsikring i din merkevare
                </Title>
                <Text size="l">
                    Gjør forsikring til en naturlig del av kundereisen
                </Text>
            </Flex>
            <div className={styles.panels}>
                {children && (
                    <section aria-labelledby="theme-builder-editor-title">
                        <Title
                            as="h2"
                            size="s"
                            id="theme-builder-editor-title"
                            srOnly
                        >
                            Temaredigering
                        </Title>
                        {children}
                    </section>
                )}
                {preview ?? <ThemePreview segment={activeSegment} />}
            </div>
        </Flex>
    );
}
