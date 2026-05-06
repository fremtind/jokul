import { TextInput } from "@fremtind/jokul/text-input";
import { memo } from "react";
import { type ColorToken, type ThemeMode, getTokenId } from "../tokens";
import { colorPickerValue, hexColorErrorLabel } from "../tokens/colorValue";
import type { TokenChangeHandler } from "./types";

import styles from "./editor.module.scss";

type ColorFieldProps = {
    mode: ThemeMode;
    token: ColorToken;
    onTokenChange: TokenChangeHandler;
};

/**
 * Kompakt fargevelger + heks-input-par for én (token, mode).
 */
export const ColorField = memo(function ColorField({
    mode,
    token,
    onTokenChange,
}: ColorFieldProps) {
    const value = token[mode];
    const id = getTokenId(token);
    const tokenPath = `${token.id} ${mode}`;

    return (
        <div className={styles.colorField}>
            <input
                className={styles.colorPicker}
                type="color"
                aria-label={`${tokenPath} — fargevelger`}
                value={colorPickerValue(value)}
                onChange={(event) =>
                    onTokenChange(id, mode, event.target.value)
                }
            />
            <TextInput
                className={styles.hexInput}
                label={`${tokenPath} — heks-verdi`}
                labelProps={{ srOnly: true }}
                data-size="small"
                value={value}
                maxLength={7}
                spellCheck={false}
                autoComplete="off"
                errorLabel={hexColorErrorLabel(value)}
                onChange={(event) =>
                    onTokenChange(id, mode, event.target.value)
                }
            />
        </div>
    );
});
