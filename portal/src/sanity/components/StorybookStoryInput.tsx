import {
    Button,
    Flex,
    Grid,
    Inline,
    Label,
    Select,
    Spinner,
    Stack,
    Text,
    TextArea,
    TextInput,
} from "@sanity/ui";
import React, { useEffect, useState, useCallback, useId } from "react";
import { set } from "sanity";
import type { ObjectInputProps } from "sanity";

export function StorybookInput(props: ObjectInputProps) {
    const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;

    const { value, onChange, id, readOnly } = props;
    const [stories, setStories] = useState<
        Record<string, Array<{ id: string; name: string; title: string }>>
    >({});
    const [storyId, setStoryId] = useState<string>(value?.storyId || "");
    const [storyName, setStoryName] = useState<string>(value?.storyName || "");
    const [storyDescription, setStoryDescription] = useState<string>(
        value?.storyDescription || "",
    );
    const [storyHeight, setStoryHeight] = useState<number>(360);
    const [loading, setLoading] = useState<boolean>(true);
    const fieldId = useId();
    const fieldKey = /_key=="(?<key>\w+)"/g.exec(id)?.groups?.key;

    const findStoryById = useCallback(
        (storyId: string) => {
            for (const componentStories of Object.values(stories)) {
                const found = componentStories.find(
                    (story) => story.id === storyId,
                );
                if (found) {
                    return found.name;
                }
            }
            return null;
        },
        [stories],
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const storiesResult = await fetch("/api/stories", {
                    cache: "no-store",
                });
                const stories = await storiesResult.json();
                setStories(stories);
            } catch (error) {
                console.error("Failed to fetch options:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!loading && !readOnly) {
            onChange(
                set({
                    storyId: storyId,
                    storyName: storyName,
                    storyDescription: storyDescription,
                    height: storyHeight,
                    _key: `${fieldKey}-${storyId}`,
                }),
            );
        }
    }, [
        loading,
        storyId,
        storyName,
        storyDescription,
        storyHeight,
        fieldKey,
        onChange,
        readOnly,
    ]);

    if (loading || readOnly) {
        setTimeout(() => {
            return (
                <Flex
                    align="center"
                    direction="column"
                    gap={3}
                    height="fill"
                    justify="center"
                >
                    <Spinner muted />
                    <Text muted size={1}>
                        Henter stories
                    </Text>
                </Flex>
            );
        }, 400);
    }

    return (
        <Stack space={5}>
            <Grid columns={2} gap={2}>
                <Stack space={2}>
                    <Label htmlFor={`storybook-story-${fieldId}-id`}>
                        Velg story
                    </Label>
                    <Select
                        onChange={(e) => {
                            setStoryId(e.currentTarget.value);
                            setStoryName(
                                findStoryById(e.currentTarget.value) || "",
                            );
                        }}
                        disabled={loading}
                        readOnly={readOnly}
                        value={storyId || ""}
                        id={`storybook-story-${fieldId}-id`}
                        aria-label="Velg story"
                    >
                        <option value="">-- Velg en verdi --</option>
                        {Object.entries(stories)
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([componentName, stories]) => (
                                <optgroup
                                    label={componentName}
                                    key={componentName}
                                >
                                    {stories.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                    </Select>
                </Stack>
                <Stack space={2}>
                    <Label htmlFor={`storybook-story-${fieldId}-title`}>
                        Tittel
                    </Label>
                    <TextInput
                        id={`storybook-story-${fieldId}-title`}
                        value={storyName}
                        readOnly={readOnly}
                        onChange={(e) => setStoryName(e.currentTarget.value)}
                    />
                </Stack>
            </Grid>
            <Stack space={2}>
                <Label htmlFor={`storybook-story-${fieldId}-description`}>
                    Beskrivelse
                </Label>
                <TextArea
                    id={`storybook-story-${fieldId}-description`}
                    value={storyDescription}
                    readOnly={readOnly}
                    onChange={(e) => setStoryDescription(e.currentTarget.value)}
                />
            </Stack>
            <Stack space={2}>
                <Stack space={2}>
                    <Label htmlFor={`storybook-story-${fieldId}-height`}>
                        Høyde på eksempelet
                    </Label>
                    <TextInput
                        id={`storybook-story-${fieldId}-height`}
                        value={storyHeight}
                        readOnly={readOnly}
                        onChange={(e) =>
                            setStoryHeight(Number(e.currentTarget.value))
                        }
                    />
                </Stack>
                <Inline space={2}>
                    <Button
                        onClick={() => setStoryHeight(storyHeight - 50)}
                        mode="ghost"
                        padding={3}
                    >
                        - 50 px
                    </Button>
                    <Button
                        onClick={() => setStoryHeight(storyHeight + 50)}
                        mode="ghost"
                        padding={3}
                    >
                        + 50 px
                    </Button>
                    <Button
                        onClick={() => setStoryHeight(storyHeight - 100)}
                        mode="ghost"
                        padding={3}
                    >
                        - 100 px
                    </Button>
                    <Button
                        onClick={() => setStoryHeight(storyHeight + 100)}
                        mode="ghost"
                        padding={3}
                    >
                        + 100 px
                    </Button>
                </Inline>
            </Stack>
            <Stack space={2}>
                <Label>Forhåndsvisning</Label>
                <iframe
                    title={storyName}
                    className="storybook-example"
                    src={`${STORYBOOK_URL}/iframe.html?viewMode=story&id=${storyId}&globals=backgrounds.value:page;backgrounds.grid:!false`}
                    style={{
                        width: "100%",
                        height: storyHeight,
                        border: "1px solid color-mix(in srgb, currentColor 20%, transparent)",
                    }}
                />
            </Stack>
        </Stack>
    );
}
