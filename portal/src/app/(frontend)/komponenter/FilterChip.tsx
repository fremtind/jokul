"use client";

import { Chip } from "@fremtind/jokul/chip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterChipProps = {
    keyword: string;
    selectedKeywords: string[];
};

const toggledKeywords = (
    keyword: string,
    selectedKeywords: string[],
): string[] => {
    if (selectedKeywords.includes(keyword)) {
        return selectedKeywords.filter((k) => k !== keyword).filter(Boolean);
    }
    return [...selectedKeywords, keyword].filter(Boolean);
};

export function FilterChip({ keyword, selectedKeywords }: FilterChipProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Chip
            key={keyword}
            variant="filter"
            selected={selectedKeywords?.includes(keyword)}
            onClick={() => {
                const updatedKeywords = toggledKeywords(
                    keyword,
                    selectedKeywords,
                );
                const params = new URLSearchParams(searchParams.toString());
                params.set("keywords", updatedKeywords.join(","));
                router.push(`${pathname}?${params.toString()}`);
            }}
        >
            {keyword}
        </Chip>
    );
}
