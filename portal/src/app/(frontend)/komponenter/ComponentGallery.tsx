"use client";

import styles from "./komponenter.module.scss";
import { useState, useMemo, useCallback } from "react";
import { ComponentCard } from "./ComponentCard";
import { ComponentFilterToolbar } from "@/components/component-filter-toolbar/ComponentFilterToolbar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/url";
import { useUserPreferences } from "@/context/UserPreferencesContext/UserPreferencesContext";
import type { ComponentsQueryResult } from "@/sanity/types";

type ComponentGalleryProps = {
    components: ComponentsQueryResult;
};

export const ComponentGallery = ({ components }: ComponentGalleryProps) => {
    const { preferences } = useUserPreferences();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const keywordsParam = searchParams.get("keywords");

    const [selectedKeywords, setSelectedKeywords] = useState<string[]>(
        keywordsParam ? keywordsParam.split(",") : [],
    );

    const filteredComponents = useMemo(() => {
        if (!selectedKeywords || selectedKeywords.length === 0) {
            return components;
        }

        return components.filter(({ keywords }) => {
            return keywords?.some((keyword) =>
                selectedKeywords.includes(keyword),
            );
        });
    }, [components, selectedKeywords]);

    const handleKeywordsChange = useCallback(
        (keywords: string[]) => {
            router.push(
                `${pathname}?${createQueryString(searchParams, "keywords", keywords.join(","))}`,
            );
            setSelectedKeywords(keywords);
        },
        [router, pathname, searchParams],
    );

    return (
        <>
            <ComponentFilterToolbar
                selectedKeywords={selectedKeywords}
                onSelectedKeywordsChangeAction={handleKeywordsChange}
            />
            <ul
                data-grid-size={preferences.componentGridSize}
                aria-label="Komponenter"
                className={styles.componentGallery}
            >
                {filteredComponents.map((component) => (
                    <li key={component.slug}>
                        <ComponentCard component={component} />
                    </li>
                ))}
            </ul>
        </>
    );
};
