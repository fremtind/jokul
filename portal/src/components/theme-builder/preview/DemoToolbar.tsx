"use client";

import { Card } from "@fremtind/jokul/card";
import { Chip } from "@fremtind/jokul/chip";
import { Flex } from "@fremtind/jokul/flex";
import { Title } from "@fremtind/jokul/typography";
import type { DisplayState } from "../displayAttributes";
import { DisplayPopover } from "../layout/DisplayPopover";
import { DEMO_STORIES } from "./DemoForm";

import styles from "./preview.module.scss";

type DemoToolbarProps = {
    storyId: string;
    onStoryChange: (id: string) => void;
    display: DisplayState;
    onDisplayChange: (next: DisplayState) => void;
};

/**
 * Chrome over live preview-en — visuelt markert som utenfor demoen via en
 * stiplet kant og dempet bakgrunn, slik at brukeren ikke forveksler den med
 * den rendrede storyen. Holder også visningsmodus-popoveren siden den bare
 * påvirker innholdet i demo-fanen.
 */
export function DemoToolbar({
    storyId,
    onStoryChange,
    display,
    onDisplayChange,
}: DemoToolbarProps) {
    return (
        <Flex>
            <Flex
                as="fieldset"
                wrap="wrap"
                gap="xs"
                className={styles.demoChipGroup}
            >
                <legend className={styles.srOnly}>Velg demo</legend>
                {DEMO_STORIES.map((story) => (
                    <Chip
                        key={story.id}
                        variant="filter"
                        selected={story.id === storyId}
                        onClick={() => onStoryChange(story.id)}
                    >
                        {story.label}
                    </Chip>
                ))}
            </Flex>
            <div>
                <Title size="s" srOnly>
                    Verktøy
                </Title>
                <DisplayPopover state={display} onChange={onDisplayChange} />
            </div>
        </Flex>
    );
}
