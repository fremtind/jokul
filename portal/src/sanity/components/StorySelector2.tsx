import {
    MAINTAINED_VERSIONS,
    type SupportedVersion,
    parseStorybookVersion,
} from "@/app/api/stories/versions";
import { Inline, Select } from "@sanity/ui";
import React, { useState, useCallback, useId, useMemo } from "react";
import { set, unset } from "sanity";
import type { ObjectInputProps } from "sanity";

const isLocalDev = process.env.NODE_ENV === "development";

export function StorySelector2(props: ObjectInputProps) {
    const { value, onChange, id } = props;
    const [version, setVersion] = useState<SupportedVersion>(
        parseStorybookVersion(value?.storyUrl || ""),
    );
    const [stories, setStories] = useState<
        Record<
            string,
            Array<{
                id: string;
                name: string;
                title: string;
                url: string;
            }>
        >
    >({});
    const [loading, setLoading] = useState<boolean>(true);
    const fieldId = useId();
    const fieldKey = /_key=="(\w+)"/g.exec(id)?.[1];

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

    useMemo(() => {
        async function fetchData() {
            try {
                const storiesResult = await fetch(`/api/stories/${version}`, {
                    cache: "no-store",
                });
                const stories = await storiesResult.json();
                setStories(stories);
            } catch (error) {
                console.error("Failed to fetch options:", error);
                setStories({});
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [version]);

    const handleChange = React.useCallback(
        (event: React.FormEvent<HTMLSelectElement> | undefined) => {
            const selectedValue = event?.currentTarget.value;
            const story = findStoryById(selectedValue || "");

            if (selectedValue && story) {
                onChange(
                    set({
                        storyId: selectedValue,
                        storyName: story.name,
                        storyUrl: story.url,
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
        <Inline gap={2}>
            <Select
                label="Jøkul-versjon"
                value={version}
                id={`storybook-version-${fieldId}`}
                onChange={(event) => {
                    setVersion(event.currentTarget.value as SupportedVersion);
                    onChange(unset());
                }}
            >
                {isLocalDev && <option value="local">Lokal Storybook</option>}
                <option value="next">Prerelease</option>
                <option value="latest">Nyeste</option>
                {MAINTAINED_VERSIONS.map((version) => (
                    <option
                        key={version}
                        value={`version-${version}`}
                    >{`v${version}`}</option>
                ))}
            </Select>
            <Select
                label="Velg story fra Storybook"
                onChange={handleChange}
                disabled={loading}
                value={value?.storyId ?? ""}
                id={`storybook-story-${fieldId}`}
            >
                <option value="" disabled>
                    -- Velg en verdi --
                </option>
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
        </Inline>
    );
}
