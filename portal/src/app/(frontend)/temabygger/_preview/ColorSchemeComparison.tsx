"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Title } from "@fremtind/jokul/typography";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { ColorScheme } from "../generator/types";
import styles from "./theme-preview.module.scss";

export const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
    light: "Lyst modus",
    dark: "Mørk modus",
};

type ColorSchemeComparisonProps = {
    includeDarkMode: boolean;
    children: ReactNode;
};

/**
 * Fargetokenene bæres av custom properties på formen `light-dark(lys, mørk)`,
 * og `data-theme` setter `color-scheme`, som avgjør hvilken av de to som vinner.
 * Begge modusene kan derfor vises samtidig uten å generere paletten på nytt.
 *
 * Den lyse halvdelen beholder samme element gjennom togglingen og krymper til
 * halv høyde når mørk modus slås på. Høyden settes med én gang, så sidehøyden
 * endres bare én gang og aldri til noe høyere enn den ender på — selve
 * bevegelsen oppover er en transform, som ikke påvirker layout.
 */
export function ColorSchemeComparison({
    includeDarkMode,
    children,
}: ColorSchemeComparisonProps) {
    return (
        <div className={styles.comparison}>
            <Flex
                className={clsx(
                    styles.comparisonPane,
                    includeDarkMode && styles.rising,
                )}
                data-theme="light"
                data-single={includeDarkMode ? undefined : "true"}
                direction="column"
                gap="16"
                alignItems="center"
                justifyContent="center"
            >
                {includeDarkMode && (
                    <Title as="h3" size="xs" className={styles.entering}>
                        {COLOR_SCHEME_LABELS.light}
                    </Title>
                )}
                {children}
            </Flex>
            {includeDarkMode && (
                <Flex
                    className={clsx(styles.comparisonPane, styles.entering)}
                    data-theme="dark"
                    direction="column"
                    gap="16"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Title as="h3" size="xs">
                        {COLOR_SCHEME_LABELS.dark}
                    </Title>
                    {children}
                </Flex>
            )}
        </div>
    );
}
