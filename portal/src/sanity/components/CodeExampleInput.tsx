import { Select } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import { set, unset } from "sanity";
import type { StringInputProps } from "sanity";

type OptionGroups = {
    [key: string]: {
        label: string;
        value: string;
    }[];
};

export function CodeExampleInput(props: StringInputProps) {
    const { value, onChange } = props;
    const [groups, setGroups] = useState<OptionGroups>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/code-example-files", {
                    cache: "no-store",
                });
                const data: OptionGroups = await response.json();
                setGroups(data);
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
            {Object.entries(groups).length > 1
                ? Object.entries(groups).map(([group, items]) => (
                      <optgroup label={group} key={group}>
                          {items.map((item) => (
                              <option key={item.value} value={item.value}>
                                  {item.label}
                              </option>
                          ))}
                      </optgroup>
                  ))
                : Object.entries(groups).flatMap(([_, items]) =>
                      items.map((item) => (
                          <option key={item.value} value={item.value}>
                              {item.label}
                          </option>
                      )),
                  )}
        </Select>
    );
}
