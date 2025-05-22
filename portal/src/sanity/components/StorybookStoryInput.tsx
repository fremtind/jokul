import { Label, Select, Stack } from "@sanity/ui";
import React, { useEffect, useState, useCallback, useId } from "react";
import { set, unset } from "sanity";
import type { ObjectInputProps } from "sanity";

export function StorybookInput(props: ObjectInputProps) {
    const { value, onChange, id } = props;
    const [stories, setStories] = useState<
        Record<string, Array<{ id: string; name: string; title: string }>>
    >({});
    const [loading, setLoading] = useState<boolean>(true);
    const fieldId = useId();
    const fieldKey = /_key==\"(?<key>\w+)\"/g.exec(id)?.groups?.key;

    const findStoryById = useCallback(
        (storyId: string) => {
            for (const componentStories of Object.values(stories)) {
                const found = componentStories.find(
                    (story) => story.id === storyId,
                );
                if (found) {
                    return found;
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

    const handleChange = React.useCallback(
        (event: React.FormEvent<HTMLSelectElement> | undefined) => {
            const selectedValue = event?.currentTarget.value;
            const story = findStoryById(selectedValue || "");

            if (selectedValue && story) {
                onChange(
                    set({
                        storyId: selectedValue,
                        storyName: story.name,
                        _key: `${fieldKey}-${selectedValue}`,
                    }),
                );
            } else {
                onChange(unset());
            }
        },
        [onChange, findStoryById, fieldKey],
    );

    return (
        <Stack space={2}>
            <Label htmlFor={`storybook-story-${fieldId}`}>
                Velg story fra Storybook
            </Label>
            <Select
                onChange={handleChange}
                disabled={loading}
                value={value?.storyId}
                id={`storybook-story-${fieldId}`}
            >
                <option value="">-- Velg en verdi --</option>
                {Object.entries(stories)
                    // Sorter alfabetisk etter komponentnavn
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
        </Stack>
    );
}
