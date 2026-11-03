"use client";

import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import { getFontSelection } from "@/app/(frontend)/temabygger/_context/themeDraftSelectors";
import { COLOR_SCHEME_LABELS } from "@/app/(frontend)/temabygger/_preview/ColorSchemeComparison";
import { ThemePreviewWorkspace } from "@/app/(frontend)/temabygger/_preview/ThemePreviewWorkspace";
import { BORDER_RADIUS_SCALES } from "@/app/(frontend)/temabygger/_shared/borderRadius";
import type { FontSlot } from "@/app/(frontend)/temabygger/_shared/customFont";
import { getFontOption } from "@/app/(frontend)/temabygger/_shared/fontOptions";
import { HandoverStep } from "@/app/(frontend)/temabygger/_steps/HandoverStep";
import { getEditableColorTokenGroups } from "@/app/(frontend)/temabygger/_steps/colorTokenMetadata";
import {
    COLOR_SCHEMES,
    type ColorScheme,
} from "@/app/(frontend)/temabygger/generator/types";
import { Card } from "@fremtind/jokul/card";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "@fremtind/jokul/description-list";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { NavLink } from "@fremtind/jokul/nav-link";
import { ToggleSwitch } from "@fremtind/jokul/toggle-switch";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { Fragment, type ReactNode, useState } from "react";
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
        <Card as="aside" className={styles.aside} padding="l">
            <Flex direction="column" gap="24">
                <Flex>
                    <NavLink as={Link} back href="/temabygger/hjorner">
                        Tilbake til redigering
                    </NavLink>
                </Flex>
                <Title as="h1" size="m">
                    {themeName
                        ? `Forhåndsvisning av tema for ${themeName}`
                        : "Forhåndsvisning av tema"}
                </Title>
                <ThemeSummary />
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
                <Flex direction="column" gap="24">
                    <SummaryList
                        items={[
                            [
                                "Mørk modus",
                                draft.includeDarkMode ? "Ja" : "Nei",
                            ],
                        ]}
                    />
                    {getEditableColorTokenGroups(draft.colorTokens).map(
                        (group) => (
                            <Flex key={group.id} direction="column" gap="8">
                                <Title as="h3" size="xs">
                                    {group.title}
                                </Title>
                                <SummaryList
                                    items={group.tokens.map((token) => [
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
                                    ])}
                                />
                            </Flex>
                        ),
                    )}
                </Flex>
            </SummaryPanel>
            <SummaryPanel title="Font">
                <SummaryList
                    items={[
                        ["Vanlig font", fontLabel("regular")],
                        ["Display-font", fontLabel("display")],
                        ["Titler", draft.boldTitles ? "Fete" : "Normale"],
                    ]}
                />
            </SummaryPanel>
            <SummaryPanel title="Hjørner">
                <SummaryList
                    items={[
                        [
                            "Skala",
                            BORDER_RADIUS_SCALES[draft.borderRadius].label,
                        ],
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

/**
 * Her finnes ingen steg som kan bestemme fargemodus, så mottakeren velger den
 * selv. Bryteren ligger utenfor temaflaten og beholder derfor Jøkuls farger.
 */
function PreviewPageContent() {
    const { draft } = useThemeDraft();
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={styles.content}>
            {draft.includeDarkMode && (
                <div className={styles.colorSchemeToggle}>
                    <ToggleSwitch
                        aria-pressed={darkMode}
                        onChange={(_event, pressed) => setDarkMode(pressed)}
                    >
                        {COLOR_SCHEME_LABELS.dark}
                    </ToggleSwitch>
                </div>
            )}
            <ThemePreviewWorkspace colorScheme={darkMode ? "dark" : "light"} />
        </div>
    );
}
