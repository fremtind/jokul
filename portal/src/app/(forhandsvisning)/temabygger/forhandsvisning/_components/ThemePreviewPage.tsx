"use client";

import { ThemeBuilder } from "@/app/(frontend)/temabygger/ThemeBuilder";
import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import { getFontSelection } from "@/app/(frontend)/temabygger/_context/themeDraftSelectors";
import { ThemePreviewWorkspace } from "@/app/(frontend)/temabygger/_preview/ThemePreviewWorkspace";
import type { FontSlot } from "@/app/(frontend)/temabygger/_shared/customFont";
import { getFontOption } from "@/app/(frontend)/temabygger/_shared/fontOptions";
import { HandoverStep } from "@/app/(frontend)/temabygger/_steps/HandoverStep";
import { getEditableColorTokenGroups } from "@/app/(frontend)/temabygger/_steps/colorTokenMetadata";
import {
    COLOR_SCHEMES,
    type ColorScheme,
} from "@/app/(frontend)/temabygger/generator/types";
import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "@fremtind/jokul/description-list";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import { NavLink } from "@fremtind/jokul/nav-link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@fremtind/jokul/tooltip";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { Fragment, type ReactNode, useState } from "react";
import styles from "./theme-preview-page.module.scss";

const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
    light: "Lyst modus",
    dark: "Mørk modus",
};

/**
 * Siden står utenfor temabyggerens ruter, men er siste side i den samme løypa.
 * Den låner derfor rammen fra stegene — samme topp, samme skjemabredde — og
 * bytter bare ut forhåndsvisningen, siden det ikke er noe steg her som kan
 * bestemme fargemodusen.
 */
export function ThemePreviewPage() {
    const [expanded, setExpanded] = useState(false);

    return (
        <main className={styles.page}>
            <ThemeBuilder
                preview={
                    <PreviewPanel
                        expanded={expanded}
                        onToggleExpanded={() => setExpanded((shown) => !shown)}
                    />
                }
            >
                {!expanded && <PreviewPageCard />}
            </ThemeBuilder>
        </main>
    );
}

function PreviewPageCard() {
    const { draft } = useThemeDraft();

    return (
        <Card padding="l">
            <Flex direction="column" gap="32">
                <Flex direction="column" gap="24">
                    <Flex>
                        <NavLink
                            as={Link}
                            back
                            href={`/temabygger/${draft.includeDarkMode ? "mork-modus" : "farger"}`}
                        >
                            Tilbake til redigering
                        </NavLink>
                    </Flex>
                    <Title as="h3" size="m">
                        Send tema til Jøkul
                    </Title>
                    <ThemeSummary />
                </Flex>
                <HandoverStep />
            </Flex>
        </Card>
    );
}

function SummaryList({ items }: { items: [string, ReactNode][] }) {
    return (
        <DescriptionList separators alignment="vertical">
            {items.map(([term, detail]) => (
                <Fragment key={term}>
                    <DescriptionTerm>{term}</DescriptionTerm>
                    <DescriptionDetail>{detail}</DescriptionDetail>
                </Fragment>
            ))}
        </DescriptionList>
    );
}

function SummaryPanel({
    title,
    children,
}: { title: string; children: ReactNode }) {
    return (
        <ExpandablePanel>
            <ExpandablePanel.Header>{title}</ExpandablePanel.Header>
            <ExpandablePanel.Content>{children}</ExpandablePanel.Content>
        </ExpandablePanel>
    );
}

/**
 * Mottakeren skal kunne lese ut de ferdige valgene uten å gå gjennom stegene i
 * temabyggeren. De mørke fargene vises bare når temaet har mørk modus: ellers
 * står de urørt på Jøkuls standard, og hører ikke til temaet.
 */
function ThemeSummary() {
    const { draft } = useThemeDraft();
    const schemes: readonly ColorScheme[] = draft.includeDarkMode
        ? COLOR_SCHEMES
        : ["light"];

    const fontLabel = (slot: FontSlot) => {
        const selection = getFontSelection(draft, slot);
        return selection === "custom"
            ? (draft.customFonts[slot]?.name ?? "Egen font")
            : getFontOption(selection).label;
    };

    return (
        <Accordion outlined>
            <SummaryPanel title="Farger">
                <SummaryList
                    items={[
                        ["Mørk modus", draft.includeDarkMode ? "Ja" : "Nei"],
                        ...getEditableColorTokenGroups(draft.colorTokens)
                            .flatMap((group) => group.tokens)
                            .map((token): [string, ReactNode] => [
                                token.label,
                                <Flex
                                    key={token.colorRole}
                                    direction="column"
                                    gap="8"
                                >
                                    {schemes.map((scheme) => (
                                        <ColorTokenValue
                                            key={scheme}
                                            scheme={scheme}
                                            value={token.token[scheme]}
                                        />
                                    ))}
                                </Flex>,
                            ]),
                    ]}
                />
            </SummaryPanel>
            <SummaryPanel title="Font">
                <SummaryList
                    items={[
                        ["Vanlig font", fontLabel("regular")],
                        ["Display-font", fontLabel("display")],
                    ]}
                />
            </SummaryPanel>
        </Accordion>
    );
}

function ColorTokenValue({
    scheme,
    value,
}: { scheme: ColorScheme; value: string }) {
    return (
        <Flex gap="8" alignItems="center">
            <span
                className={styles.swatch}
                style={{ backgroundColor: value }}
            />
            <Text as="span" size="s" short>
                {COLOR_SCHEME_LABELS[scheme]} {value}
            </Text>
        </Flex>
    );
}

type PreviewPanelProps = {
    expanded: boolean;
    onToggleExpanded: () => void;
};

/**
 * Mottakeren velger fargemodus selv. Knappene ligger utenfor temaflaten og
 * beholder derfor Jøkuls farger.
 */
function PreviewPanel({ expanded, onToggleExpanded }: PreviewPanelProps) {
    const { draft } = useThemeDraft();
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={styles.preview}>
            <Flex className={styles.previewActions} gap="8">
                {draft.includeDarkMode && (
                    <PreviewAction
                        label={
                            darkMode ? "Vis i lyst modus" : "Vis i mørk modus"
                        }
                        icon={darkMode ? "light_mode" : "dark_mode"}
                        onClick={() => setDarkMode((shown) => !shown)}
                    />
                )}
                <PreviewAction
                    label={
                        expanded
                            ? "Vis sammendraget"
                            : "Utvid forhåndsvisningen"
                    }
                    icon={expanded ? "close_fullscreen" : "open_in_full"}
                    onClick={onToggleExpanded}
                />
            </Flex>
            <ThemePreviewWorkspace colorScheme={darkMode ? "dark" : "light"} />
        </div>
    );
}

type PreviewActionProps = {
    label: string;
    /** Navnet på ikonet i ikonfonten, som `Icon` slår opp som ligatur. */
    icon: string;
    onClick: () => void;
};

/**
 * Knappene viser bare ikonet for å ta minst mulig plass fra forhåndsvisningen,
 * så teksten må komme fram både i tooltipen og for skjermlesere.
 */
function PreviewAction({ label, icon, onClick }: PreviewActionProps) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    type="button"
                    variant="secondary"
                    icon={<Icon>{icon}</Icon>}
                    aria-label={label}
                    onClick={onClick}
                />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
        </Tooltip>
    );
}
