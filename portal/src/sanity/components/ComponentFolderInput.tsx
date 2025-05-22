import { Select } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import { set, unset } from "sanity";
import type { StringInputProps } from "sanity";

type ComponentFolderOption = {
    title: string;
    value: string;
};

export function ComponentFolderInput(props: StringInputProps) {
    const { value, onChange } = props;
    const [options, setOptions] = useState<ComponentFolderOption[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleChange = React.useCallback(
        (event: React.FormEvent<HTMLSelectElement> | undefined) => {
            const value = event?.currentTarget.value;

            // If the selected option has a value,
            // it will be written to the document
            // otherwise the field will be cleared
            onChange(value ? set(value) : unset());
        },
        [onChange],
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const componentsResult = await fetch("/api/component-folders", {
                    cache: "no-store",
                });

                const components: ComponentFolderOption[] =
                    await componentsResult.json();

                const formattedOptions: ComponentFolderOption[] =
                    components.map(({ title, value }) => ({
                        title,
                        value,
                    }));

                setOptions(formattedOptions);
            } catch (error) {
                console.error("Failed to fetch component folders:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <Select
            onChange={handleChange}
            disabled={loading || options.length === 0}
            value={value}
        >
            <option value="">-- Velg komponent --</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </Select>
    );
}
