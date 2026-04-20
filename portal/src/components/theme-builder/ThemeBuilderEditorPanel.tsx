"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { ExpandablePanel } from "@fremtind/jokul/expander";
import { CopyIcon, Icon } from "@fremtind/jokul/icon";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { TextInput } from "@fremtind/jokul/text-input";
import {
    COLOR_VARIANTS,
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
    brandName: string;
    editorMode: EditorMode;
    exportBlocked: boolean;
    fileName: string;
    jsonError?: string;
    jsonValue: string;
    onBrandNameChange: (value: string) => void;
    onClose: () => void;
    onCopyExport: () => Promise<void>;
    onDownloadExport: () => void;
    onEditorModeChange: (mode: EditorMode) => void;
    onJsonValueChange: (value: string) => void;
    onReset: () => void;
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
    tokens: EditableColorToken[];
};

export function ThemeBuilderEditorPanel({
    brandName,
    editorMode,
    exportBlocked,
    fileName,
    jsonError,
    jsonValue,
    onBrandNameChange,
    onClose,
    onCopyExport,
    onDownloadExport,
    onEditorModeChange,
    onJsonValueChange,
    onReset,
    onTokenChange,
    tokens,
}: ThemeBuilderEditorPanelProps) {
    return (
        <Card
            as="section"
            padding="m"
            className={styles.panel}
            data-editor-mode={editorMode}
        >
            <div className={styles.editorToolbar}>
                <SegmentedControl
                    className={styles.editorModeSwitch}
                    legend="Redigeringsmodus"
                    labelProps={{ srOnly: true }}
                >
                    <SegmentedControlButton
                        name="theme-builder-editor-mode"
                        value="visual"
                        checked={editorMode === "visual"}
                        onChange={() => onEditorModeChange("visual")}
                    >
                        Visuell
                    </SegmentedControlButton>
                    <SegmentedControlButton
                        name="theme-builder-editor-mode"
                        value="json"
                        checked={editorMode === "json"}
                        onChange={() => onEditorModeChange("json")}
                    >
                        JSON
                    </SegmentedControlButton>
                </SegmentedControl>
                <div className={styles.editorToolbarActions}>
                    <Button
                        variant="ghost"
                        data-size="small"
                        icon={<Icon bold>restart_alt</Icon>}
                        aria-label="Tilbakestill"
                        title="Tilbakestill"
                        onClick={onReset}
                    />
                    <Button
                        variant="ghost"
                        data-size="small"
                        icon={<Icon bold>close</Icon>}
                        aria-label="Lukk editor"
                        title="Lukk editor"
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className={styles.editorContent}>
                {editorMode === "visual" ? (
                    <>
                        {COLOR_VARIANTS.map((variant) => (
                            <VariantTokenSection
                                key={variant}
                                variant={variant}
                                tokens={getTokensForVariant(tokens, variant)}
                                onTokenChange={onTokenChange}
                            />
                        ))}
                    </>
                ) : (
                    <div className={styles.jsonEditor}>
                        <label
                            className={styles.srOnly}
                            htmlFor="theme-builder-json-editor"
                        >
                            Fargetokens JSON
                        </label>
                        <textarea
                            id="theme-builder-json-editor"
                            className={styles.jsonEditorInput}
                            value={jsonValue}
                            spellCheck={false}
                            aria-invalid={Boolean(jsonError)}
                            aria-describedby={
                                jsonError
                                    ? "theme-builder-json-error"
                                    : undefined
                            }
                            onChange={(event) =>
                                onJsonValueChange(event.target.value)
                            }
                        />
                        <output
                            id="theme-builder-json-error"
                            className={styles.jsonEditorError}
                            aria-live="polite"
                        >
                            {jsonError}
                        </output>
                    </div>
                )}
            </div>
            <div className={styles.editorFooter}>
                <TextInput
                    className={styles.brandNameField}
                    label="Merkenavn"
                    value={brandName}
                    onChange={(event) => onBrandNameChange(event.target.value)}
                    placeholder="custom-brand"
                />
                <div className={styles.editorFooterMeta}>
                    <code className={styles.exportFileName}>{fileName}</code>
                    <div className={styles.editorExportActions}>
                        <Button
                            variant="ghost"
                            data-size="small"
                            disabled={exportBlocked}
                            icon={<CopyIcon bold />}
                            aria-label="Kopier JSON"
                            title="Kopier JSON"
                            onClick={onCopyExport}
                        />
                        <Button
                            variant="ghost"
                            data-size="small"
                            disabled={exportBlocked}
                            icon={<Icon bold>download</Icon>}
                            aria-label="Last ned JSON"
                            title="Last ned JSON"
                            onClick={onDownloadExport}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
}

type VariantTokenSectionProps = {
    variant: ColorVariant;
    tokens: EditableColorToken[];
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
};

function VariantTokenSection({
    variant,
    tokens,
    onTokenChange,
}: VariantTokenSectionProps) {
    return (
        <ExpandablePanel
            variant="stroke"
            defaultOpen={variant === "neutral"}
            className={styles.variantSection}
        >
            <ExpandablePanel.Header>
                {formatVariantLabel(variant)}
            </ExpandablePanel.Header>
            <ExpandablePanel.Content className={styles.variantContent}>
                <div className={styles.tokenList}>
                    <div
                        className={styles.tokenColumnHeaders}
                        aria-hidden="true"
                    >
                        <span>Lys</span>
                        <span>Mørk</span>
                    </div>
                    {tokens.map((token) => (
                        <ColorTokenRow
                            key={token.id}
                            token={token}
                            onTokenChange={onTokenChange}
                        />
                    ))}
                </div>
            </ExpandablePanel.Content>
        </ExpandablePanel>
    );
}

type ColorTokenRowProps = {
    token: EditableColorToken;
    onTokenChange: (
        tokenId: string,
        mode: "light" | "dark",
        value: string,
    ) => void;
};

function ColorTokenRow({ token, onTokenChange }: ColorTokenRowProps) {
    const tokenName = formatTokenName(token);

    return (
        <Card as="article" padding="s" className={styles.tokenRow}>
            <code className={styles.tokenTitle} title={tokenName}>
                {tokenName}
            </code>
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
                {mode === "light" ? "Lys" : "Mørk"}
            </span>
            <div className={styles.colorFieldInner}>
                <input
                    className={styles.colorPicker}
                    type="color"
                    aria-label={`${token.label} ${mode === "light" ? "lys" : "mørk"}`}
                    value={getColorInputValue(value)}
                    onChange={(event) =>
                        onTokenChange(token.id, mode, event.target.value)
                    }
                />
                <TextInput
                    className={styles.hexInput}
                    label={mode === "light" ? "Lys" : "Mørk"}
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

function formatTokenName(token: EditableColorToken): string {
    return `${token.group}.${token.role}`;
}

function formatVariantLabel(variant: ColorVariant): string {
    return `${variant[0].toUpperCase()}${variant.slice(1)}`;
}
