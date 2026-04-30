"use client";

import { Flex } from "@fremtind/jokul/flex";
import { useMemo } from "react";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import { TokenFilter, tokenMatchesFilter } from "../TokenFilter";
import { COLOR_VARIANTS, type ColorToken, tokenKey } from "../tokens";
import { ContrastSummary } from "./ContrastSummary";
import { VariantTable } from "./VariantTable";
import { countRatings } from "./countRatings";

type TokensListProps = {
    tokens: ColorToken[];
};

/**
 * Skrivbeskyttet listing av alle tokens, speiler JSON-strukturen. Toppen av
 * fanen oppsummerer kontrast-vurderingene per token; én Jøkul `Table` per
 * variant følger.
 *
 * Filtrerings-staten deles med editoren — søker du etter "background.page"
 * her, finner du de samme radene begge steder.
 */
export function TokensList({ tokens }: TokensListProps) {
    const { filter, showOnlyEdited, editedTokenKeys } = useThemeBuilder();

    const filteredTokens = useMemo(() => {
        if (!filter && !showOnlyEdited) return tokens;
        return tokens.filter((t) => {
            if (showOnlyEdited && !editedTokenKeys.has(tokenKey(t)))
                return false;
            return tokenMatchesFilter(t, filter);
        });
    }, [tokens, filter, showOnlyEdited, editedTokenKeys]);

    const counts = useMemo(() => countRatings(tokens), [tokens]);

    return (
        <Flex direction="column" gap="2xl">
            <ContrastSummary counts={counts} />
            <TokenFilter />
            <Flex direction="column" gap="2xl">
                {COLOR_VARIANTS.map((variant) => {
                    const variantTokens = filteredTokens.filter(
                        (t) => t.variant === variant,
                    );
                    if (variantTokens.length === 0) return null;
                    return (
                        <VariantTable
                            key={variant}
                            variant={variant}
                            tokens={variantTokens}
                            allTokens={tokens}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
}
