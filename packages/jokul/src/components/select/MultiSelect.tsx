import { useMemo, useState } from "react";
import type { MultiSelectProps } from "./types.js";

export function MultiSelect({
    label,
    options,
    name,
    value,
    onChange,
    placeholder = "Velg",
    searchable = true,
    disabled,
}: MultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [internalValue, setInternalValue] = useState<string[]>(value ?? []);

    const selectedValues = value ?? internalValue;

    const selectedLabels = options
        .filter((option) => selectedValues.includes(option.value))
        .map((option) => option.label);

    const filteredOptions = useMemo(() => {
        if (!searchable) return options;

        return options.filter((option) =>
            String(option.label).toLowerCase().includes(query.toLowerCase()),
        );
    }, [options, query, searchable]);

    function toggleValue(nextValue: string) {
        const nextValues = selectedValues.includes(nextValue)
            ? selectedValues.filter((current) => current !== nextValue)
            : [...selectedValues, nextValue];

        if (value === undefined) {
            setInternalValue(nextValues);
        }

        onChange?.(nextValues);
    }

    return (
        <div>
            <span>{label}</span>

            <button
                type="button"
                disabled={disabled}
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
            >
                {selectedLabels.length > 0
                    ? selectedLabels.join(", ")
                    : placeholder}
            </button>

            {open && (
                <div>
                    {searchable && (
                        <input
                            type="search"
                            value={query}
                            placeholder="Søk"
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    )}

                    <ul>
                        {filteredOptions.map((option) => {
                            const checked = selectedValues.includes(
                                option.value,
                            );

                            return (
                                <li key={option.value}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            disabled={option.disabled}
                                            onChange={() =>
                                                toggleValue(option.value)
                                            }
                                        />
                                        {option.label}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>

                    {filteredOptions.length === 0 && <p>Ingen treff</p>}
                </div>
            )}

            {name &&
                selectedValues.map((selectedValue) => (
                    <input
                        key={selectedValue}
                        type="hidden"
                        name={name}
                        value={selectedValue}
                    />
                ))}
        </div>
    );
}
