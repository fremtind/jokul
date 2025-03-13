import { Select } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import { set, unset } from "sanity";
import type { StringInputProps } from "sanity";

export function StorybookStoryInput(props: StringInputProps) {
    const { value, onChange } = props;
    const [stories, setStories] = useState<
        Record<string, Array<{ id: string; name: string; title: string }>>
    >({});
    const [loading, setLoading] = useState<boolean>(true);

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
            onChange(selectedValue ? set(selectedValue) : unset());
        },
        [onChange],
    );

    return (
        <Select onChange={handleChange} disabled={loading} value={value}>
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
    );
}
