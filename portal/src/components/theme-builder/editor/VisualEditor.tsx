import { Flex } from "@fremtind/jokul/flex";
import { useMemo } from "react";
import { useThemeBuilder } from "../ThemeBuilderProvider";
import { TokenFilter, tokenMatchesFilter } from "../TokenFilter";
import {
    COLOR_VARIANTS,
    type ColorToken,
    type ColorVariant,
    tokenKey,
} from "../tokens";
import { VariantSection } from "./VariantSection";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type VisualEditorProps = {
    tokens: ColorToken[];
    onTokenChange: TokenChangeHandler;
};

/**
 * Visuell editor — én utvidbar seksjon per fargevariant; den første er åpen
 * som standard. Seksjonene står tett mot hverandre (uten mellomrom) slik at
 * borderne kollapser i én sammenhengende stabel.
 *
 * Filteret og "vis kun endrede"-toggle deles med tokens-fanen via
 * provider-staten, og varianter uten matchende tokens skjules helt.
 */
export function VisualEditor({ tokens, onTokenChange }: VisualEditorProps) {
    const { filter, showOnlyEdited, editedTokenKeys } = useThemeBuilder();

    const tokensByVariant = useMemo(() => {
        const map = new Map<ColorVariant, ColorToken[]>();
        for (const variant of COLOR_VARIANTS) map.set(variant, []);
        for (const token of tokens) {
            if (showOnlyEdited && !editedTokenKeys.has(tokenKey(token)))
                continue;
            if (!tokenMatchesFilter(token, filter)) continue;
            map.get(token.variant)?.push(token);
        }
        return map;
    }, [tokens, filter, showOnlyEdited, editedTokenKeys]);

    return (
        <Flex direction="column" gap="m">
            <TokenFilter />
            <div className={styles.variantStack}>
                {COLOR_VARIANTS.map((variant, index) => {
                    const variantTokens = tokensByVariant.get(variant) ?? [];
                    if (variantTokens.length === 0) return null;
                    return (
                        <VariantSection
                            key={variant}
                            variant={variant}
                            defaultOpen={index === 0}
                            tokens={variantTokens}
                            onTokenChange={onTokenChange}
                        />
                    );
                })}
            </div>
        </Flex>
    );
}
