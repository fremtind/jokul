"use client";

import { Flex } from "@fremtind/jokul/flex";
import { useMemo } from "react";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import { TokenFilter } from "../TokenFilter";
import { countRatings } from "../contrast";
import {
    type ColorToken,
    TOKEN_SECTIONS,
    filterTokens,
    groupTokensBySection,
} from "../tokens";
import { ContrastSummary } from "./ContrastSummary";
import { TokenSectionTable } from "./TokenSectionTable";

type TokensListProps = {
    tokens: ColorToken[];
};

/**
 * Skrivbeskyttet listing av alle tokens, speiler JSON-strukturen. Toppen av
 * fanen oppsummerer kontrast-vurderingene per token; én Jøkul `Table` per
 * seksjon følger.
 *
 * Filtrerings-staten deles med editoren — søker du etter "background.page"
 * her, finner du de samme radene begge steder.
 */
export function TokensList({ tokens }: TokensListProps) {
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

    const counts = useMemo(() => countRatings(tokens), [tokens]);

    return (
        <Flex direction="column" gap="2xl">
            <ContrastSummary counts={counts} />
            <TokenFilter />
            <Flex direction="column" gap="2xl">
                {TOKEN_SECTIONS.map((section) => {
                    const sectionTokens = tokensBySection.get(section) ?? [];
                    if (sectionTokens.length === 0) return null;
                    return (
                        <TokenSectionTable
                            key={section}
                            section={section}
                            tokens={sectionTokens}
                            allTokens={tokens}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
}
