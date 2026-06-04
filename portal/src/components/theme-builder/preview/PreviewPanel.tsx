"use client";

import { Flex } from "@fremtind/jokul/flex";
import type { ColorToken, ThemeMode } from "../tokens";
import { DemoForm } from "./DemoForm";
import { PreviewScope } from "./PreviewScope";

import styles from "./preview.module.scss";

type PreviewPanelProps = {
    themeMode: ThemeMode;
    tokens: ColorToken[];
};

/**
 * Demo-fanen rendrer detaljside-storyen inni et scope som anvender gjeldende
 * `data-theme` og live tokens.
 */
export function PreviewPanel({ themeMode, tokens }: PreviewPanelProps) {
    return (
        <Flex direction="column" gap="m">
            <PreviewScope tokens={tokens}>
                <div className={styles.previewSurface} data-theme={themeMode}>
                    <DemoForm />
                </div>
            </PreviewScope>
        </Flex>
    );
}
