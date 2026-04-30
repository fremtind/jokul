"use client";

import { Flex } from "@fremtind/jokul/flex";
import { useState } from "react";
import { type DisplayState, dataAttributes } from "../displayAttributes";
import type { ColorToken } from "../tokens";
import { DEMO_STORIES, DemoForm } from "./DemoForm";
import { DemoToolbar } from "./DemoToolbar";
import { PreviewScope } from "./PreviewScope";

import styles from "./preview.module.scss";

type PreviewPanelProps = {
    display: DisplayState;
    onDisplayChange: (next: DisplayState) => void;
    tokens: ColorToken[];
};

/**
 * Demo-fanen: en toolbar (utenfor demo-chrome-et) for å velge story og
 * visningsmodus, så den valgte storyen rendret inni et scope som anvender
 * gjeldende `data-*`-visningsattributter og live tokens.
 */
export function PreviewPanel({
    display,
    onDisplayChange,
    tokens,
}: PreviewPanelProps) {
    const [storyId, setStoryId] = useState(DEMO_STORIES[0].id);

    return (
        <Flex direction="column" gap="m">
            <DemoToolbar
                storyId={storyId}
                onStoryChange={setStoryId}
                display={display}
                onDisplayChange={onDisplayChange}
            />
            <div className={styles.previewSurface} {...dataAttributes(display)}>
                <PreviewScope tokens={tokens}>
                    <DemoForm storyId={storyId} />
                </PreviewScope>
            </div>
        </Flex>
    );
}
