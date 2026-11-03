"use client";

import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jokul/tabs";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ColorScheme } from "../generator/types";
import { ColorCombinations } from "./ColorCombinations";
import { ThemePreviewSurface } from "./ThemePreviewSurface";
import { renderThemePreviewStory } from "./previewStories";
import styles from "./theme-preview.module.scss";

type ThemePreviewWorkspaceProps = {
    colorScheme: ColorScheme;
};

/**
 * Fanene ligger utenfor temaflaten og beholder derfor Jøkuls egne farger, mens
 * innholdet under dem vises i brukerens tema.
 *
 * `Tabs` plasserer barna sine etter posisjon: første barn er fanelista, og
 * resten er panelene i samme rekkefølge som fanene. Temaflaten gjentas derfor
 * inne i hvert panel — bare det aktive panelet rendres.
 *
 * Komponenten leser bevisst ikke utkastet selv: `Tabs` genererer nye ID-er for
 * hver gang forelderen rendrer, og forhåndsvisningen rendrer på hvert
 * tastetrykk i fargefeltene. Det som trenger utkastet, henter det i bladet.
 */
export function ThemePreviewWorkspace({
    colorScheme,
}: ThemePreviewWorkspaceProps) {
    return (
        <Tabs className={styles.workspace}>
            <TabList aria-label="Forhåndsvisning">
                <Tab>Overblikk</Tab>
                <Tab>Komponenter</Tab>
                <Tab>Fargekombinasjoner</Tab>
            </TabList>
            <TabPanel className={styles.workspacePanel}>
                <ThemePreviewSurface colorScheme={colorScheme}>
                    {renderThemePreviewStory("overview")}
                </ThemePreviewSurface>
            </TabPanel>
            <TabPanel className={styles.workspacePanel}>
                <ThemePreviewSurface colorScheme={colorScheme}>
                    {renderThemePreviewStory("components")}
                </ThemePreviewSurface>
            </TabPanel>
            <TabPanel className={styles.workspacePanel}>
                <ThemePreviewSurface colorScheme={colorScheme}>
                    <ColorCombinationsPanel colorScheme={colorScheme} />
                </ThemePreviewSurface>
            </TabPanel>
        </Tabs>
    );
}

function ColorCombinationsPanel({ colorScheme }: ThemePreviewWorkspaceProps) {
    const { draft } = useThemeDraft();

    return (
        <ColorCombinations
            includeDarkMode={draft.includeDarkMode}
            tokens={draft.colorTokens}
            colorScheme={colorScheme}
        />
    );
}
