"use client";

import { useThemeDraft } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import { getFontSelection } from "@/app/(frontend)/temabygger/_context/themeDraftSelectors";
import { COLOR_SCHEME_LABELS } from "@/app/(frontend)/temabygger/_preview/ColorSchemeComparison";
import { ThemePreviewWorkspace } from "@/app/(frontend)/temabygger/_preview/ThemePreviewWorkspace";
import { BORDER_RADIUS_SCALES } from "@/app/(frontend)/temabygger/_shared/borderRadius";
import type { FontSlot } from "@/app/(frontend)/temabygger/_shared/customFont";
import { getFontOption } from "@/app/(frontend)/temabygger/_shared/fontOptions";
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
import { Flex } from "@fremtind/jokul/flex";
import { ToggleSwitch } from "@fremtind/jokul/toggle-switch";
import { Text, Title } from "@fremtind/jokul/typography";
import { Fragment, useState } from "react";
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
                <Title as="h1" size="m">
                    {themeName
                        ? `Forhåndsvisning av tema for ${themeName}`
                        : "Forhåndsvisning av tema"}
                </Title>
                <Text>
                    Dette er en visning av hvordan merkevaren deres vil
                    representeres i Fremtinds designsystem, Jøkul.
                </Text>
                <ThemeSettingsSummary />
                <ColorTokenSummary />
            </Flex>
        </Card>
    );
}

function ThemeSettingsSummary() {
    const { draft } = useThemeDraft();

    const fontLabel = (slot: FontSlot) => {
        const selection = getFontSelection(draft, slot);
        return selection === "custom"
            ? (draft.customFonts[slot]?.name ?? "Egen font")
            : getFontOption(selection).label;
    };

    const settings: [string, string][] = [
        ["Vanlig font", fontLabel("regular")],
        ["Display-font", fontLabel("display")],
        ["Titler", draft.boldTitles ? "Fete" : "Normale"],
        ["Hjørner", BORDER_RADIUS_SCALES[draft.borderRadius].label],
        ["Mørk modus", draft.includeDarkMode ? "Ja" : "Nei"],
    ];

    return (
        <Flex direction="column" gap="16">
            <Title as="h2" size="xs">
                Valg
            </Title>
            <DescriptionList separators alignment="vertical">
                {settings.map(([term, detail]) => (
                    <Fragment key={term}>
                        <DescriptionTerm>{term}</DescriptionTerm>
                        <DescriptionDetail>{detail}</DescriptionDetail>
                    </Fragment>
                ))}
            </DescriptionList>
        </Flex>
    );
}

/**
 * Mottakeren skal kunne lese ut de ferdige verdiene uten å gå gjennom stegene i
 * temabyggeren. De mørke verdiene vises bare når temaet har mørk modus: ellers
 * står de urørt på Jøkuls standard, og hører ikke til temaet.
 */
function ColorTokenSummary() {
    const { draft } = useThemeDraft();
    const schemes: readonly ColorScheme[] = draft.includeDarkMode
        ? COLOR_SCHEMES
        : ["light"];

    return (
        <Flex direction="column" gap="16">
            <Title as="h2" size="xs">
                Fargetokens
            </Title>
            <DescriptionList separators alignment="vertical">
                {getEditableColorTokenGroups(draft.colorTokens).flatMap(
                    (group) =>
                        group.tokens.map((token) => (
                            <Fragment key={token.colorRole}>
                                <DescriptionTerm>{token.label}</DescriptionTerm>
                                <DescriptionDetail>
                                    <Flex direction="column" gap="8">
                                        {schemes.map((scheme) => (
                                            <ColorTokenValue
                                                key={scheme}
                                                scheme={scheme}
                                                value={token.token[scheme]}
                                            />
                                        ))}
                                    </Flex>
                                </DescriptionDetail>
                            </Fragment>
                        )),
                )}
            </DescriptionList>
        </Flex>
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
