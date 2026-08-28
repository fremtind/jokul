import type { Jokul_storybookEmbed } from "@/sanity/types";
import { MAINTAINED_VERSIONS } from "@/storybook/versions";
import { Flex, Select, Stack, Switch, Text, TextInput } from "@sanity/ui";
import { useEffect, useId, useState } from "react";
import { type ObjectInputProps, set } from "sanity";

type Story = {
    id: string;
    name: string;
};

type GroupedStories = Record<string, Story[]>;

export function StorybookEmbedInput(props: ObjectInputProps) {
    const { onChange } = props;
    const value = props.value as Jokul_storybookEmbed | undefined;
    const version = value?.version ?? "latest";
    const height = value?.height ?? 360;
    const interactive = value?.interactive ?? true;
    const selectedStory =
        value?.storyId && value.storyName
            ? { storyId: value.storyId, storyName: value.storyName }
            : {};
    const [stories, setStories] = useState<GroupedStories>({});
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const fieldId = useId();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchStories() {
            setLoading(true);
            setHasError(false);

            try {
                const response = await fetch(`/api/stories/${version}`, {
                    cache: "no-store",
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch stories");
                }

                setStories(await response.json());
            } catch {
                if (!controller.signal.aborted) {
                    setStories({});
                    setHasError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchStories();

        return () => controller.abort();
    }, [version]);

    const embedSettings = {
        _type: "jokul_storybookEmbed" as const,
        version,
        height,
        interactive,
    };

    return (
        <Stack gap={4}>
            <Stack gap={2}>
                <Text
                    as="label"
                    htmlFor={`storybook-version-${fieldId}`}
                    size={1}
                    weight="medium"
                >
                    Versjon
                </Text>
                <Select
                    id={`storybook-version-${fieldId}`}
                    label="Versjon"
                    value={version}
                    onChange={(event) => {
                        onChange(
                            set({
                                ...embedSettings,
                                version: event.currentTarget
                                    .value as Jokul_storybookEmbed["version"],
                            }),
                        );
                    }}
                >
                    <option value="latest">Latest</option>
                    <option value="next">Next</option>
                    {MAINTAINED_VERSIONS.map((maintainedVersion) => (
                        <option
                            key={maintainedVersion}
                            value={`version-${maintainedVersion}`}
                        >
                            v{maintainedVersion}
                        </option>
                    ))}
                </Select>
            </Stack>

            <Stack gap={2}>
                <Text
                    as="label"
                    htmlFor={`storybook-story-${fieldId}`}
                    size={1}
                    weight="medium"
                >
                    Story
                </Text>
                <Select
                    id={`storybook-story-${fieldId}`}
                    label="Story"
                    value={value?.storyId ?? ""}
                    disabled={loading || hasError}
                    onChange={(event) => {
                        const storyId = event.currentTarget.value;
                        const story = Object.values(stories)
                            .flat()
                            .find(({ id }) => id === storyId);

                        onChange(
                            set({
                                ...embedSettings,
                                ...(story && {
                                    storyId: story.id,
                                    storyName: story.name,
                                }),
                            }),
                        );
                    }}
                >
                    <option value="">
                        {loading
                            ? "Laster stories ..."
                            : hasError
                              ? "Kunne ikke hente stories"
                              : "Velg story"}
                    </option>
                    {Object.entries(stories)
                        .sort(([first], [second]) =>
                            first.localeCompare(second),
                        )
                        .map(([componentName, componentStories]) => (
                            <optgroup label={componentName} key={componentName}>
                                {componentStories.map((story) => (
                                    <option key={story.id} value={story.id}>
                                        {story.name}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                </Select>
            </Stack>

            <Stack gap={2}>
                <Text
                    as="label"
                    htmlFor={`storybook-height-${fieldId}`}
                    size={1}
                    weight="medium"
                >
                    Høyde på eksempel (px)
                </Text>
                <TextInput
                    id={`storybook-height-${fieldId}`}
                    type="number"
                    min={120}
                    max={1200}
                    step={1}
                    value={height}
                    onChange={(event) => {
                        const nextHeight = event.currentTarget.valueAsNumber;

                        if (!Number.isNaN(nextHeight)) {
                            onChange(
                                set({
                                    ...embedSettings,
                                    ...selectedStory,
                                    height: nextHeight,
                                }),
                            );
                        }
                    }}
                />
            </Stack>

            <Flex align="center" gap={3}>
                <Switch
                    id={`storybook-interactive-${fieldId}`}
                    checked={interactive}
                    onChange={(event) => {
                        onChange(
                            set({
                                ...embedSettings,
                                ...selectedStory,
                                interactive: event.currentTarget.checked,
                            }),
                        );
                    }}
                />
                <Text
                    as="label"
                    htmlFor={`storybook-interactive-${fieldId}`}
                    size={1}
                >
                    Tillat interaksjon
                </Text>
            </Flex>
        </Stack>
    );
}
