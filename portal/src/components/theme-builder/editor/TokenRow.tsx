import { type CSSProperties, memo } from "react";
import { type ColorToken, THEME_MODES } from "../tokens";
import { ColorField } from "./ColorField";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type TokenRowProps = {
    token: ColorToken;
    onTokenChange: TokenChangeHandler;
};

/**
 * Kompakt token-rad: navn til venstre, ett `ColorField` per `THEME_MODES`-entry
 * til høyre. Iterasjonen gjør at oppsettet følger token-skjemaet automatisk
 * hvis JSON-en en gang får flere/færre theme-moduser.
 *
 * Memoiseres så bare den raden hvis token faktisk endret seg re-rendrer når
 * tokens-arrayen i provider-en byttes ut. `updateToken`-callbacken er stabil
 * via `useCallback`, så shallow-prop-likhet er nok.
 */
export const TokenRow = memo(function TokenRow({
    token,
    onTokenChange,
}: TokenRowProps) {
    const tokenName = `${token.group}.${token.role}`;

    return (
        <div className={styles.tokenRow}>
            <code className={styles.tokenTitle} title={tokenName}>
                {tokenName}
            </code>
            <div
                className={styles.tokenControls}
                style={
                    {
                        "--theme-mode-count": THEME_MODES.length,
                    } as CSSProperties
                }
            >
                {THEME_MODES.map((mode) => (
                    <ColorField
                        key={mode}
                        mode={mode}
                        token={token}
                        onTokenChange={onTokenChange}
                    />
                ))}
            </div>
        </div>
    );
});
