"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { Icon, PenIcon } from "@fremtind/jokul/icon";
import { NativeSelect } from "@fremtind/jokul/select";
import { TextArea } from "@fremtind/jokul/text-area";
import { TextInput } from "@fremtind/jokul/text-input";
import {
    COLOR_ROLES,
    COLOR_VARIANTS,
    type ColorGroup,
    type ColorVariant,
    type EditableColorToken,
    type EditorMode,
} from "./types";
import {
    getColorInputValue,
    getHexValidationMessage,
    getTokensForVariant,
} from "./utils";

import styles from "./theme-builder.module.scss";

type ThemeBuilderEditorPanelProps = {
    activeVariant: ColorVariant;
    brandName: string;
    editorMode: EditorMode;
    jsonError?: string;
    jsonValue: string;
    onActiveVariantChange: (variant: ColorVariant) => void;
    onBrandNameChange: (value: string) => void;
    onEditorModeChange: (mode: EditorMode) => void;
    onJsonValueChange: (value: string) => void;
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
    tokens: EditableColorToken[];
};

export function ThemeBuilderEditorPanel({
    activeVariant,
    brandName,
    editorMode,
    jsonError,
    jsonValue,
    onActiveVariantChange,
    onBrandNameChange,
    onEditorModeChange,
    onJsonValueChange,
    onTokenChange,
    tokens,
}: ThemeBuilderEditorPanelProps) {
    const variantTokens = getTokensForVariant(tokens, activeVariant);

    return (
        <Card as="section" padding="m" className={styles.panel}>
            <div className={styles.panelHeader}>
                <div className={styles.panelIntro}>
                    <h2>Editor</h2>
                    <p>
                        Bytt mellom visuell redigering og JSON uten a forlate
                        builderen.
                    </p>
                </div>
                <Button
                    variant="ghost"
                    data-size="small"
                    className={styles.editorModeSwitch}
                    icon={
                        editorMode === "visual" ? (
                            <Icon bold>code</Icon>
                        ) : (
                            <PenIcon bold />
                        )
                    }
                    title={
                        editorMode === "visual"
                            ? "Bytt til JSON-redigering"
                            : "Bytt til visuell redigering"
                    }
                    aria-label={
                        editorMode === "visual"
                            ? "Bytt til JSON-redigering"
                            : "Bytt til visuell redigering"
                    }
                    onClick={() =>
                        onEditorModeChange(
                            editorMode === "visual" ? "json" : "visual",
                        )
                    }
                />
            </div>
            <div className={styles.editorControls}>
                <TextInput
                    label="Brand"
                    value={brandName}
                    onChange={(event) => onBrandNameChange(event.target.value)}
                    placeholder="custom-brand"
                />
                {editorMode === "visual" && (
                    <NativeSelect
                        label="Variant"
                        items={COLOR_VARIANTS.map((variant) => ({
                            label: formatVariantLabel(variant),
                            value: variant,
                        }))}
                        value={activeVariant}
                        onChange={(event) =>
                            onActiveVariantChange(
                                event.target.value as ColorVariant,
                            )
                        }
                    />
                )}
            </div>
            {editorMode === "visual" ? (
                <div className={styles.groupList}>
                    {(
                        Object.keys(COLOR_ROLES) as Array<
                            keyof typeof COLOR_ROLES
                        >
                    ).map((group) => (
                        <GroupSection
                            key={group}
                            group={group}
                            tokens={variantTokens}
                            onTokenChange={onTokenChange}
                        />
                    ))}
                </div>
            ) : (
                <TextArea
                    className={styles.jsonEditor}
                    label="Color tokens JSON"
                    value={jsonValue}
                    rows={10}
                    startOpen
                    spellCheck={false}
                    errorLabel={jsonError}
                    helpLabel="Endringer brukes nar JSON-en er gyldig."
                    onChange={(event) => onJsonValueChange(event.target.value)}
                />
            )}
        </Card>
    );
}

type GroupSectionProps = {
    group: ColorGroup;
    tokens: EditableColorToken[];
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
};

function GroupSection({ group, tokens, onTokenChange }: GroupSectionProps) {
    const groupTokens = tokens.filter((token) => token.group === group);

    return (
        <Card as="section" padding="s" className={styles.groupSection}>
            <header className={styles.groupHeader}>
                <h3>{formatGroupLabel(group)}</h3>
                <p>{getGroupDescription(group)}</p>
            </header>
            <div className={styles.tokenColumnHeaders} aria-hidden="true">
                <span />
                <span>Light</span>
                <span>Dark</span>
            </div>
            <div className={styles.tokenRowList}>
                {groupTokens.map((token) => (
                    <Card
                        as="article"
                        key={token.id}
                        padding="s"
                        className={styles.tokenRow}
                    >
                        <h4 className={styles.tokenTitle}>{token.label}</h4>
                        <div className={styles.tokenControls}>
                            <ColorField
                                mode="light"
                                token={token}
                                onTokenChange={onTokenChange}
                            />
                            <ColorField
                                mode="dark"
                                token={token}
                                onTokenChange={onTokenChange}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </Card>
    );
}

type ColorFieldProps = {
    mode: "light" | "dark";
    token: EditableColorToken;
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
};

function ColorField({ mode, token, onTokenChange }: ColorFieldProps) {
    const value = token[mode];

    return (
        <div className={styles.colorField}>
            <span className={styles.colorFieldLabel}>
                {mode === "light" ? "Light" : "Dark"}
            </span>
            <div className={styles.colorFieldInner}>
                <input
                    className={styles.colorPicker}
                    type="color"
                    aria-label={`${token.label} ${mode}`}
                    value={getColorInputValue(value)}
                    onChange={(event) =>
                        onTokenChange(token.id, mode, event.target.value)
                    }
                />
                <TextInput
                    label={mode === "light" ? "Light" : "Dark"}
                    labelProps={{ srOnly: true }}
                    data-size="small"
                    value={value}
                    maxLength={7}
                    spellCheck={false}
                    autoComplete="off"
                    errorLabel={getHexValidationMessage(value)}
                    onChange={(event) =>
                        onTokenChange(token.id, mode, event.target.value)
                    }
                />
            </div>
        </div>
    );
}

function formatVariantLabel(variant: ColorVariant): string {
    return `${variant[0].toUpperCase()}${variant.slice(1)}`;
}

function formatGroupLabel(group: ColorGroup): string {
    return `${group[0].toUpperCase()}${group.slice(1)}`;
}

function getGroupDescription(group: ColorGroup): string {
    switch (group) {
        case "background":
            return "Bakgrunn for side, flater og handlinger.";
        case "text":
            return "Tekstfarger for standard, dempet og pa handlinger.";
        case "border":
            return "Kantfarger for sterk, standard og dempet bruk.";
    }
}
