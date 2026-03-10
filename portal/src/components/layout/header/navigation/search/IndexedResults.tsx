"use client";

import type { SearchResult } from "@/app/api/search/route";
import type { DocumentType } from "@/search/index";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { useEffect, useRef, useState } from "react";

import styles from "./search.module.scss";

const DEBOUNCE_MS = 50;

const DOCUMENT_TYPE_LABELS: Record<DocumentType, string> = {
    component: "Komponent",
    fundamental: "Fundament",
    blog_post: "Blogg",
};

const DOCUMENT_TYPE_HREFS: Record<DocumentType, (slug: string) => string> = {
    component: (slug) => `/komponenter/${slug}`,
    fundamental: (slug) => `/fundamenter/${slug}`,
    blog_post: (slug) => `/blog/${slug}`,
};

export const Results = ({ searchString = "" }) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [searched, setSearched] = useState(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        if (!searchString.trim()) {
            setResults([]);
            setSearched(false);
            return;
        }

        debounceRef.current = setTimeout(async () => {
            try {
                const res = await fetch(
                    `/api/search?q=${encodeURIComponent(searchString)}`,
                );
                if (!res.ok) return;
                const data = await res.json();
                setResults(data.results ?? []);
                setSearched(true);
            } catch {
                // Silently ignore network errors during search
            }
        }, DEBOUNCE_MS);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [searchString]);

    if (!searchString.trim() && results.length === 0) {
        return null;
    }

    if (searched && results.length === 0) {
        return <p>Ingen resultater funnet for "{searchString}"</p>;
    }

    return (
        <Flex
            as="ul"
            direction="column"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
            gap="none"
        >
            {results.map((result, index) => (
                <Flex asChild key={result.id} gap="s" alignItems="center">
                    <Card as="li" data-search-result-index={index}>
                        <figure
                            style={{
                                height: "86px",
                                aspectRatio: 1.5,
                                padding: "0",
                                margin: "0",
                                background: "var(--jkl-color-background-page)",
                                border: "1px solid var(--jkl-color-border-separator)",
                                borderRadius: "4px",
                                overflow: "hidden",
                                flexShrink: 0,
                            }}
                        >
                            {result.image && (
                                <picture>
                                    <source
                                        media="(prefers-color-scheme: dark)"
                                        srcSet={result.imageDark}
                                    />
                                    <img
                                        src={result.image}
                                        alt=""
                                        style={{
                                            objectFit: "cover",
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    />
                                </picture>
                            )}
                        </figure>
                        <Flex direction="column" gap="xs">
                            <p>
                                <Link
                                    href={DOCUMENT_TYPE_HREFS[
                                        result.documentType
                                    ](result.slug)}
                                >
                                    <span
                                        // biome-ignore lint/security: For å få formatering på søketreff
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                result.highlight?.title ||
                                                result.title,
                                        }}
                                    />
                                </Link>
                                <span className={styles.type}>
                                    {DOCUMENT_TYPE_LABELS[result.documentType]}
                                </span>
                            </p>

                            {result.highlight?.short_description && (
                                <p
                                    className={styles.description}
                                    // biome-ignore lint/security: For å få formatering på søketreff
                                    dangerouslySetInnerHTML={{
                                        __html: result.highlight
                                            .short_description,
                                    }}
                                />
                            )}
                            {!result.highlight?.short_description &&
                                result.highlight?.bodyText && (
                                    <p
                                        className={styles.description}
                                        // biome-ignore lint/security: For å få formatering på søketreff
                                        dangerouslySetInnerHTML={{
                                            __html: result.highlight.bodyText,
                                        }}
                                    />
                                )}
                            {!result.highlight?.short_description &&
                                !result.highlight?.bodyText && (
                                    <>
                                        <p
                                            className={styles.keywords}
                                            // biome-ignore lint/security: For å få formatering på søketreff
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    result.highlight?.keywords?.replaceAll(
                                                        " ",
                                                        ", ",
                                                    ) || "",
                                            }}
                                        />
                                        <p className={styles.description}>
                                            {result.short_description}
                                        </p>
                                    </>
                                )}
                        </Flex>
                    </Card>
                </Flex>
            ))}
        </Flex>
    );
};
