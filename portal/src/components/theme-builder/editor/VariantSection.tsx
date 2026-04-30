import { ExpandablePanel } from "@fremtind/jokul/expander";
import { Text } from "@fremtind/jokul/typography";
import type { CSSProperties } from "react";
import {
    type ColorToken,
    type ColorVariant,
    THEME_MODES,
    tokenKey,
} from "../tokens";
import { TokenRow } from "./TokenRow";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type VariantSectionProps = {
    variant: ColorVariant;
    tokens: ColorToken[];
    defaultOpen?: boolean;
    onTokenChange: TokenChangeHandler;
};

/** Utvidbar seksjon for én fargevariant. */
export function VariantSection({
    variant,
    tokens,
    defaultOpen = false,
    onTokenChange,
}: VariantSectionProps) {
    return (
        <ExpandablePanel variant="stroke" defaultOpen={defaultOpen}>
            <ExpandablePanel.Header>{variant}</ExpandablePanel.Header>
            <ExpandablePanel.Content>
                <div className={styles.tokenList}>
                    <div
                        className={styles.tokenColumnHeaders}
                        aria-hidden="true"
                        style={
                            {
                                "--theme-mode-count": THEME_MODES.length,
                            } as CSSProperties
                        }
                    >
                        {THEME_MODES.map((mode) => (
                            <Text key={mode} as="span" size="xs">
                                {mode}
                            </Text>
                        ))}
                    </div>
                    {tokens.map((token) => (
                        <TokenRow
                            key={tokenKey(token)}
                            token={token}
                            onTokenChange={onTokenChange}
                        />
                    ))}
                </div>
            </ExpandablePanel.Content>
        </ExpandablePanel>
    );
}
