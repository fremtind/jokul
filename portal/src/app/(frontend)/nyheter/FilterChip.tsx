"use client";

import { Chip } from "@fremtind/jokul/chip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterChipProps = {
    value: string;
    label: string;
    selectedValues: string[];
};

const toggledValues = (value: string, selectedValues: string[]): string[] => {
    if (selectedValues.includes(value)) {
        return selectedValues.filter((v) => v !== value);
    }
    return [...selectedValues, value];
};

export function FilterChip({ value, label, selectedValues }: FilterChipProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Chip
            variant="filter"
            selected={selectedValues.includes(value)}
            onClick={() => {
                const updated = toggledValues(value, selectedValues);
                const params = new URLSearchParams(searchParams.toString());
                if (updated.length > 0) {
                    params.set("types", updated.join(","));
                } else {
                    params.delete("types");
                }
                params.delete("page");
                const query = params.toString();
                router.push(query ? `${pathname}?${query}` : pathname);
            }}
        >
            {label}
        </Chip>
    );
}
