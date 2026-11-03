"use client";

import { Flex } from "@fremtind/jokul/flex";
import { NavLink } from "@fremtind/jokul/nav-link";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { ReactNode } from "react";
import { ThemePreview } from "./_preview/ThemePreview";
import styles from "./theme-builder.module.scss";

type ThemeBuilderProps = {
    children: ReactNode;
};

export function ThemeBuilder({ children }: ThemeBuilderProps) {
    const [activeSegment] = useSelectedLayoutSegments().filter(
        (segment) => !segment.startsWith("("),
    );

    return (
        <Flex className={styles.themeBuilder} direction="column" gap="40">
            <Flex direction="column" gap="24">
                {/* Erstatter den globale headeren: eneste veien ut av temabyggeren. */}
                <Flex>
                    <NavLink as={Link} back href="/">
                        Tilbake til portalen
                    </NavLink>
                </Flex>
                <Flex as="header" direction="column" gap="8">
                    <Title as="h1" size="xl">
                        Forsikring i din merkevare
                    </Title>
                    <Text size="l">
                        Gjør forsikring til en naturlig del av kundereisen
                    </Text>
                </Flex>
            </Flex>
            <div className={styles.panels}>
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
                <ThemePreview segment={activeSegment} />
            </div>
        </Flex>
    );
}
