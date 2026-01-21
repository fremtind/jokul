import { Select, Stack, Text } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import { type StringInputProps, set } from "sanity";

export function StorySelector(props: StringInputProps) {
    const { value, readOnly, onChange } = props;

    const [loading, setLoading] = useState(readOnly);
    const [stories, setStories] = useState<
        Record<string, Array<{ id: string; name: string; title: string }>>
    >({});
    const [selectedStory, setSelectedStory] = useState<string>(value || "");

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
            onChange(set(selectedStory));
        }
    }, [loading, selectedStory, onChange, readOnly]);

    return (
        <Stack space={3}>
            <Select
                value={selectedStory}
                readOnly={loading}
                onChange={(e) => setSelectedStory(e.currentTarget.value)}
            >
                {Object.entries(stories)
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map(([componentName, stories]) => (
                        <optgroup label={componentName} key={componentName}>
                            {stories.map(({ id, name }) => (
                                <option key={id} value={id}>
                                    {name}
                                </option>
                            ))}
                        </optgroup>
                    ))}
            </Select>
            <Text>
                {Object.entries(stories).map(([_, stories]) =>
                    stories.map(({ id, name }) => id === selectedStory && name),
                )}
            </Text>
        </Stack>
    );
}
