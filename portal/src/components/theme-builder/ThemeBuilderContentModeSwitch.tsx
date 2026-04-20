"use client";

import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import type { ThemeMode } from "./types";

import styles from "./theme-builder.module.scss";

type ThemeBuilderContentModeSwitchProps = {
    mode: ThemeMode;
    onChange: (mode: ThemeMode) => void;
};

export function ThemeBuilderContentModeSwitch({
    mode,
    onChange,
}: ThemeBuilderContentModeSwitchProps) {
    return (
        <div className={styles.workspaceControls}>
            <SegmentedControl
                className={styles.previewModeSwitch}
                legend="Visningsmodus"
                labelProps={{ srOnly: true }}
            >
                <SegmentedControlButton
                    name="theme-builder-content-mode"
                    value="light"
                    checked={mode === "light"}
                    onChange={() => onChange("light")}
                >
                    Lys
                </SegmentedControlButton>
                <SegmentedControlButton
                    name="theme-builder-content-mode"
                    value="dark"
                    checked={mode === "dark"}
                    onChange={() => onChange("dark")}
                >
                    Mørk
                </SegmentedControlButton>
            </SegmentedControl>
        </div>
    );
}
