"use client";

import { Chip } from "@fremtind/jokul/chip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterChipProps = {
    category: string;
    selectedCategories: string[];
};

const toggledCategories = (
    category: string,
    selectedCategories: string[],
): string[] => {
    if (selectedCategories.includes(category)) {
        return selectedCategories.filter((c) => c !== category).filter(Boolean);
    }
    return [...selectedCategories, category].filter(Boolean);
};

export function FilterChip({ category, selectedCategories }: FilterChipProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Chip
            key={category}
            variant="filter"
            selected={selectedCategories?.includes(category)}
            onClick={() => {
                const updatedCategories = toggledCategories(
                    category,
                    selectedCategories,
                );
                const params = new URLSearchParams(searchParams.toString());
                params.set("categories", updatedCategories.join(","));
                router.push(`${pathname}?${params.toString()}`);
            }}
        >
            {category}
        </Chip>
    );
}
