"use client";

import { ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import { Text } from "@fremtind/jokul/typography";
import { type CSSProperties, memo, useMemo } from "react";
import { colorInputValue, hexErrorLabel } from "./colorTokenUtils";
import {
    COLOR_VARIANTS,
    type ColorToken,
    type ColorVariant,
    THEME_MODES,
    type ThemeMode,
    tokenKey,
} from "./colorTokens";

import styles from "./token-editor.module.scss";

type TokenChangeHandler = (
    tokenId: string,
    mode: ThemeMode,
    value: string,
) => void;

type TokenEditorProps = {
    tokens: ColorToken[];
    onTokenChange: TokenChangeHandler;
};

export function TokenEditor({ tokens, onTokenChange }: TokenEditorProps) {
    const tokensByVariant = useMemo(() => {
        const map = new Map<ColorVariant, ColorToken[]>();
        for (const variant of COLOR_VARIANTS) map.set(variant, []);
        for (const token of tokens) map.get(token.variant)?.push(token);
        return map;
    }, [tokens]);

    return (
        <div className={styles.editorRoot}>
            <Flex direction="column" gap="m">
                <div className={styles.variantStack}>
                    {COLOR_VARIANTS.map((variant, index) => {
                        const variantTokens =
                            tokensByVariant.get(variant) ?? [];
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
        </div>
    );
}

type VariantSectionProps = {
    variant: ColorVariant;
    tokens: ColorToken[];
    defaultOpen?: boolean;
    onTokenChange: TokenChangeHandler;
};

function VariantSection({
    variant,
    tokens,
    defaultOpen = false,
    onTokenChange,
}: VariantSectionProps) {
    return (
        <ExpandablePanel outlined defaultOpen={defaultOpen}>
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

type TokenRowProps = {
    token: ColorToken;
    onTokenChange: TokenChangeHandler;
};

const TokenRow = memo(function TokenRow({
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

type ColorFieldProps = {
    mode: ThemeMode;
    token: ColorToken;
    onTokenChange: TokenChangeHandler;
};

const ColorField = memo(function ColorField({
    mode,
    token,
    onTokenChange,
}: ColorFieldProps) {
    const value = token[mode];
    const id = tokenKey(token);
    const tokenPath = `${token.group}.${token.role} ${mode}`;

    return (
        <div className={styles.colorField}>
            <input
                className={styles.colorPicker}
                type="color"
                aria-label={`${tokenPath} — fargevelger`}
                value={colorInputValue(value)}
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
                errorLabel={hexErrorLabel(value)}
                onChange={(event) =>
                    onTokenChange(id, mode, event.target.value)
                }
            />
        </div>
    );
});
