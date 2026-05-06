import { Flex } from "@fremtind/jokul/flex";
import { useMemo } from "react";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import { TokenFilter } from "../TokenFilter";
import {
    type ColorToken,
    TOKEN_SECTIONS,
    filterTokens,
    groupTokensBySection,
} from "../tokens";
import { TokenSectionPanel } from "./TokenSectionPanel";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type VisualEditorProps = {
    tokens: ColorToken[];
    onTokenChange: TokenChangeHandler;
};

/**
 * Visuell editor — én utvidbar seksjon per token-seksjon; den første er åpen
 * som standard. Seksjonene står tett mot hverandre (uten mellomrom) slik at
 * borderne kollapser i én sammenhengende stabel.
 *
 * Filteret og "vis kun endrede"-toggle deles med tokens-fanen via
 * provider-staten, og seksjoner uten matchende tokens skjules helt.
 */
export function VisualEditor({ tokens, onTokenChange }: VisualEditorProps) {
    const { filter, showOnlyEdited, editedTokenIds } = useThemeBuilder();

    const tokensBySection = useMemo(
        () =>
            groupTokensBySection(
                filterTokens(tokens, {
                    filter,
                    showOnlyEdited,
                    editedTokenIds,
                }),
            ),
        [tokens, filter, showOnlyEdited, editedTokenIds],
    );

    return (
        <Flex direction="column" gap="m">
            <TokenFilter />
            <div className={styles.sectionStack}>
                {TOKEN_SECTIONS.map((section, index) => {
                    const sectionTokens = tokensBySection.get(section) ?? [];
                    if (sectionTokens.length === 0) return null;
                    return (
                        <TokenSectionPanel
                            key={section}
                            section={section}
                            defaultOpen={index === 0}
                            tokens={sectionTokens}
                            onTokenChange={onTokenChange}
                        />
                    );
                })}
            </div>
        </Flex>
    );
}
