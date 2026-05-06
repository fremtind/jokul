import { ExpandablePanel } from "@fremtind/jokul/expander";
import { Text } from "@fremtind/jokul/typography";
import type { CSSProperties } from "react";
import {
    type ColorToken,
    THEME_MODES,
    type TokenSection,
    getTokenId,
} from "../tokens";
import { TokenRow } from "./TokenRow";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type TokenSectionPanelProps = {
    section: TokenSection;
    tokens: ColorToken[];
    defaultOpen?: boolean;
    onTokenChange: TokenChangeHandler;
};

/** Utvidbar seksjon for root-tokens eller én funksjonell fargegruppe. */
export function TokenSectionPanel({
    section,
    tokens,
    defaultOpen = false,
    onTokenChange,
}: TokenSectionPanelProps) {
    return (
        <ExpandablePanel variant="stroke" defaultOpen={defaultOpen}>
            <ExpandablePanel.Header>{section}</ExpandablePanel.Header>
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
                            key={getTokenId(token)}
                            token={token}
                            onTokenChange={onTokenChange}
                        />
                    ))}
                </div>
            </ExpandablePanel.Content>
        </ExpandablePanel>
    );
}
