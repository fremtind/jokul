"use client";

import { NotificationBadge } from "@fremtind/jokul/notification-badge";
import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jokul/tabs";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ColorScheme } from "../generator/types";
import { ColorCombinations } from "./ColorCombinations";
import { ThemePreviewSurface } from "./ThemePreviewSurface";
import { getFailingContrasts } from "./contrastEvaluation";
import { ThemePreviewComponents, ThemePreviewOverview } from "./previewStories";
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
                <Tab>
                    Fargekombinasjoner
                    <ContrastErrorBadge colorScheme={colorScheme} />
                </Tab>
            </TabList>
            <TabPanel className={styles.workspacePanel}>
                <ThemePreviewSurface colorScheme={colorScheme}>
                    <ThemePreviewOverview />
                </ThemePreviewSurface>
            </TabPanel>
            <TabPanel className={styles.workspacePanel}>
                <ThemePreviewSurface colorScheme={colorScheme}>
                    <ThemePreviewComponents />
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

/**
 * Varselet står uten anker, så det flyter inn som et flex-element i fanen ved
 * siden av teksten. `NotificationBadge` rendrer ingenting når antallet er null.
 */
function ContrastErrorBadge({ colorScheme }: ThemePreviewWorkspaceProps) {
    const { draft } = useThemeDraft();
    const count = getFailingContrasts(draft.colorTokens, [colorScheme]).length;

    return (
        <NotificationBadge
            count={count}
            label={`${count} kombinasjoner med for lav kontrast`}
            urgent
        />
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
